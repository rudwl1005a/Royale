package com.ssafy.royale.domain.league.service;

import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.league.dto.CreateLeagueRequestDto;

public interface LeagueService {
    League createLeague(CreateLeagueRequestDto createLeagueRequestDto);

    League findLeagueByLeagueSeq(Long leagueSeq);

    League updateLeague(CreateLeagueRequestDto updateLeagueRequestDto, Long leagueSeq);

    void deleteLeague(League league);
}
