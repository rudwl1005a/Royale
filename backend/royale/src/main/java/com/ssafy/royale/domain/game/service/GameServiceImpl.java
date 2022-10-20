package com.ssafy.royale.domain.game.service;

import com.ssafy.royale.domain.game.dao.DivisionRepository;
import com.ssafy.royale.domain.game.dao.GameRepository;
import com.ssafy.royale.domain.game.domain.Division;
import com.ssafy.royale.domain.game.domain.Game;
import com.ssafy.royale.domain.game.dto.GamesResponseDto;
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
    public List<GamesResponseDto> autoMakeGame(Long seq) {
        List<Division> divisions = divisionRepository.findAll();
        League league = leagueRepository.findById(seq).orElseThrow(LeagueNotFoundException::new);
        //8강인 경우 7개의 경기를 담아야함, 1라운드(4경기)는 참가자를 다 채워서 담음
        List<GamesResponseDto> gamesResponseDtoList = new ArrayList<>();

        for (Division division: divisions) {
            List<Apply> applies = applyRepository.findAllByLeagueAndDivision(league, division);
            //applies에는 한 대진에 있는 모든 유저값이 들어있다.
            //대진표 순서 -> 같은 체육관은 멀리 등 알고리즘은 짯다고 치고 수행
            //더미 삽입 후 해당 함수 수행
            int matCount = 1;
            int tournamentDepthCount = 1;
            //8강일경우 8개
            int applySize = applies.size();
            //8강인경우 7개의 경기 생성
            while (applySize > 0){
                applySize /= 2;

                for (int i = 0; i < applySize; i++) {
                    Game game = Game.builder()
                            .league(league)
                            .division(division)
                            .matGameNum(matCount++)
                            .tournamentRoundText(tournamentDepthCount)
                            .build();
                    gameRepository.save(game);
                }
                tournamentDepthCount++;
            }

            //gameList는 8강인 경우 길이가 7임
            List<Game> gameList = gameRepository.findAllByLeagueAndDivision(league, division);
            int gameIndex = 0;
            //1라운드 참가자 생성
            for (int i = 0; i < applies.size()-1; i++) {
                Apply apply1 = applies.get(i++);
                List<ParticipantsDto> participantsList = new ArrayList<>();
                ParticipantsDto player1 = ParticipantsDto.builder()
                        .id(Long.toBinaryString(apply1.getApplySeq()))
                        .name(apply1.getUser().getUserName())
                        .status(NOSHOW)
                        .build();

                Apply apply2 = applies.get(i);
                ParticipantsDto player2 = ParticipantsDto.builder()
                        .id(Long.toBinaryString(apply2.getApplySeq()))
                        .name(apply2.getUser().getUserName())
                        .status(NOSHOW)
                        .build();

                participantsList.add(player1);
                participantsList.add(player2);

                //게임 엔티티를 받아서 gameResponseDto에 삽입
                Game game = gameList.get(gameIndex);
                GamesResponseDto gamesResponseDto = GamesResponseDto.builder()
                        .id(game.getGame_seq().intValue())
                        .name(Integer.toString(game.getMatGameNum()))
                        .startTime(Integer.toString(game.getGame_seq().intValue()))
                        .tournamentRoundText(Integer.toString(game.getTournamentRoundText()))
                        .participants(participantsList)
                        .nextMatchId(gameList.get((gameIndex/2) + (applies.size() / 2)).getGame_seq().intValue())
                        .state(null)
                        .build();
                gamesResponseDtoList.add(gamesResponseDto);
                gameIndex++;
            }

            //2라운드부터 현재 참가자가 없는 라운드 gamesListponseDto 생성
            for (int i = 0; i < (applies.size()-1) / 2; i++) {
                Game game = gameList.get(gameIndex);
                //i가 마지막값에 도달한 경우 nextMatchId를 null로 넣음
                Integer nextMatchId = gameList.get((gameIndex/2) + (applies.size() / 2)).getGame_seq().intValue();
                if(i == ((applies.size()-1) / 2)-1) {
                    nextMatchId = null;
                }
                List<ParticipantsDto> list = new ArrayList<>();
                list.add(ParticipantsDto.builder().build());
                list.add(ParticipantsDto.builder().build());

                GamesResponseDto gamesResponseDto = GamesResponseDto.builder()
                        .id(game.getGame_seq().intValue())
                        .name(Integer.toString(game.getMatGameNum()))
                        .startTime(Integer.toString(game.getGame_seq().intValue()))
                        .tournamentRoundText(Integer.toString(game.getTournamentRoundText()))
                        .participants(list)
                        .nextMatchId(nextMatchId)
                        .state(null)
                        .build();
                gamesResponseDtoList.add(gamesResponseDto);
                gameIndex++;
            }
        }
        return gamesResponseDtoList;
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
