package com.ssafy.royale.domain.league.service;

import com.ssafy.royale.domain.league.dao.LeagueRepository;
import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.league.dto.CreateLeagueRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("leagueService")
@RequiredArgsConstructor
@Transactional
public class LeagueServiceImpl implements LeagueService{

    @Autowired
    LeagueRepository leagueRepository;

    /**
     * 대회 생성
     */
    @Override
    public League createLeague(CreateLeagueRequestDto createLeagueRequestDto) {

        League league = League.builder()
                .leagueName(createLeagueRequestDto.getLeagueName())
                .leaguePlace(createLeagueRequestDto.getLeaguePlace())
                .leagueDate(createLeagueRequestDto.getLeagueDate())
                .leagueDeadline(createLeagueRequestDto.getLeagueDeadline())
                .leaguePoster(createLeagueRequestDto.getLeaguePoster())
                .leagueInfo(createLeagueRequestDto.getLeagueInfo())
                .build();

        return leagueRepository.save(league);
    }

    /**
     * 대회 조회(leagueSeq로 검색)
     */
    @Override
    public League findLeagueByLeagueSeq(Long leagueSeq) {
        return leagueRepository.findById(leagueSeq).get();
    }

    /**
     * 대회 정보 수정
     */
    @Override
    public League updateLeague(CreateLeagueRequestDto updateLeagueRequestDto, Long leagueSeq) {
        // 리그 정보 가져오기
        League updateLeague = leagueRepository.findById(leagueSeq).get();

        System.out.println(updateLeagueRequestDto.getLeagueName());

        // 리그 정보 수정
        updateLeague.updateLeague(
                updateLeagueRequestDto.getLeagueName(), updateLeagueRequestDto.getLeaguePlace(),
                updateLeagueRequestDto.getLeagueDate(), updateLeagueRequestDto.getLeagueDeadline(),
                updateLeagueRequestDto.getLeaguePoster(), updateLeagueRequestDto.getLeagueInfo());

        return leagueRepository.save(updateLeague);
    }

    /**
     * 대회 정보 삭제
     */
    @Override
    public void deleteLeague(League league) {
        leagueRepository.delete(league);
    }
}