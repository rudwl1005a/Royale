package com.ssafy.royale.domain.game.service;

import com.ssafy.royale.domain.game.dao.DivisionRepository;
import com.ssafy.royale.domain.game.dao.GameRepository;
import com.ssafy.royale.domain.game.domain.Division;
import com.ssafy.royale.domain.game.domain.Game;
import com.ssafy.royale.domain.game.dto.GamesResponseDto;
import com.ssafy.royale.domain.game.dto.PlayerTree;
import com.ssafy.royale.domain.game.exception.DivisionNotFoundException;
import com.ssafy.royale.domain.league.dao.LeagueRepository;
import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.league.exception.LeagueNotFoundException;
import com.ssafy.royale.domain.user.dao.ApplyRepository;
import com.ssafy.royale.domain.user.domain.Apply;
import com.ssafy.royale.domain.user.dto.ParticipantsDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GameServiceImpl implements GameService{

    private final ApplyRepository applyRepository;
    private final DivisionRepository divisionRepository;
    private final LeagueRepository leagueRepository;
    private final GameRepository gameRepository;

    private final String NOSHOW = "NO_SHOW";

    @Override
    public Boolean autoMakeGame(Long seq) {
        List<Division> divisions = divisionRepository.findAll();
        League league = leagueRepository.findById(seq).orElseThrow(LeagueNotFoundException::new);

        for (Division division: divisions) {
            List<Apply> applies = applyRepository.findAllByLeagueAndDivision(league, division);
            applies.sort((e1, e2) -> (int) (e1.getTeam().getTeamSeq() - e2.getTeam().getTeamSeq()));

            PlayerTree tree = new PlayerTree();
            addApplicantDummyData(applies);
            for (Apply apply: applies) {
                tree.insert(apply);
            }
            try {
                applies = tree.inorder(tree.root);
                //applies에는 한 대진에 있는 모든 유저값이 들어있다.
                //대진표 순서 -> 같은 체육관은 멀리 등 알고리즘은 짯다고 치고 수행
                //더미 삽입 후 해당 함수 수행
                int matCount = 1;
                int tournamentRoundText = 1;
                //8강일경우 8개 -> 더미 삽입도 만들어야함
                int tournamentDepthCount = applies.size();
                int applyCount = 0;
                //8강인경우 7개의 경기 생성, 첫 경기들은 userSeq에 값을 다 넣어놔야함(아직 안했음)
                while (tournamentDepthCount > 0) {
                    tournamentDepthCount /= 2;

                    for (int i = 0; i < tournamentDepthCount; i++) {
                        Game game = Game.builder()
                                .league(league)
                                .division(division)
                                .matGameNum(matCount++)
                                .tournamentRoundText(tournamentRoundText)
                                .build();
                        if (applyCount < applies.size()) {
                            game.setAddPlayer(applies.get(applyCount++), applies.get(applyCount++));
                        }
                        gameRepository.save(game);
                    }
                    tournamentRoundText++;
                }
            }catch (Exception e){e.printStackTrace();}
        }
        return true;
    }

    //삽입된 게임을 조회해서 토너먼트 형식에 맞게 뿌려줌
    //전체 값을 list에 담아서 보내야하므로 game에 담긴 값을 다 꺼내서 뿌려야함
    //game이 null이지 않는 한 null값은 내가 넣지 않는다
    @Override
    public List<GamesResponseDto> getTournament(Long leagueSeq, Long divisionSeq) {
        Division division = divisionRepository.findById(divisionSeq).orElseThrow(DivisionNotFoundException::new);
        League league = leagueRepository.findById(leagueSeq).orElseThrow(LeagueNotFoundException::new);

        //대회와 division정보를 바탕으로 만들어진 game을 조회
        List<Game> gameList = gameRepository.findAllByLeagueAndDivision(league, division);
        List<GamesResponseDto> gamesResponseDtoList = new ArrayList<>();
        //gameList의 길이는 N-1개
        for (int i=0; i < gameList.size(); i++) {
            List<ParticipantsDto> participantsDtoList = new ArrayList<>();
            GamesResponseDto gamesResponseDto;
            //회원이 비었다면, 아직 대진 결과가 안나온 상태라서 빈 객체값을 담아야함
            if(gameList.get(i).getPlayer1_seq() == null){
                participantsDtoList.add(ParticipantsDto.builder().build());
                participantsDtoList.add(ParticipantsDto.builder().build());
            }else{
                ParticipantsDto apply1 = ParticipantsDto.builder()
                        .id(Long.toString(gameList.get(i).getPlayer1_seq().getApplySeq()))
                        .name(gameList.get(i).getPlayer1_seq().getUser().getUserName())
                        .status("NO_SHOW")
                        .build();
                ParticipantsDto apply2 = ParticipantsDto.builder()
                        .id(Long.toString(gameList.get(i).getPlayer2_seq().getApplySeq()))
                        .name(gameList.get(i).getPlayer2_seq().getUser().getUserName())
                        .status("NO_SHOW")
                        .build();
                participantsDtoList.add(apply1);
                participantsDtoList.add(apply2);

            }

            //마지막 index는 null처리
            Integer nextMatchId = i == gameList.size()-1 ? null : gameList.get((i/2) + (gameList.size() / 2) + 1).getGame_seq().intValue();

            gamesResponseDto = GamesResponseDto.builder()
                    .id(gameList.get(i).getGame_seq().intValue())
                    .name(Integer.toString(gameList.get(i).getMatGameNum()))
                    .nextMatchId(nextMatchId)
                    .tournamentRoundText(Integer.toString(gameList.get(i).getTournamentRoundText()))
                    .startTime(Integer.toString(gameList.get(i).getGame_seq().intValue()))
                    .participants(participantsDtoList)
                    .build();
            gamesResponseDtoList.add(gamesResponseDto);
        }
        return gamesResponseDtoList;
    }

    public void addApplicantDummyData(List<Apply> applies){
        int size = applies.size();
        if(size < 8){
            for (int i = 0; i < 8 - size; i++) {
                applies.add(null);
            }
        }else if(size > 8 && size < 16){
            for (int i = 0; i < 16 - size; i++) {
                applies.add(null);
            }
        }else if(size > 16 && size < 32)
            for (int i = 0; i < 32 - size; i++) {
                applies.add(null);
            }
    }
    /*
    autoMakeGame함수가 해야할 일
    대전 마감 버튼 클릭
    프론트에서 대회번호 전송
    백에서 모든 division을 조회해서 division리스트를 만듬
    디비전 리스트에서 요소 하나하나와 프론트에서 보낸 대회번호를 비교해서 같은 참가자리스트 생성
    대회 번호를 기준으로 (4강인지 8강인지 16강인지... 8강인 경우 7개) null값으로 7개의 game을 생성
    GameResponseDto도 game의 갯수인 7개만큼 생성
    4개의 GameResponseDto에는 참가자 정보 삽입, 3개의 GameResponseDto에는 gameSeq와 nextGameSeq만 채우고 나머지 null로 해서 전송


    다른 함수
    스태프가 경기종료 버튼을 누를 시 승자를 체크하고 경기 id값, 승자 id값, 승자 점수, 패자 id값, 패자 점수, 리그 id를 백으로 보냄
    백은 받은 경기 id로 경기를 조회하고 점수와 승리자를 등록함

    스코어 보드의 점수를 백에서 계산해서 프론트로 넘겨줌

     */
}
