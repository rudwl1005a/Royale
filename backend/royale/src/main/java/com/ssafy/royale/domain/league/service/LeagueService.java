package com.ssafy.royale.domain.league.service;

import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.league.dto.CreateLeagueRequestDto;
import com.ssafy.royale.domain.league.dto.UpdateLeagueRequestDto;

public interface LeagueService {
    League createLeague(CreateLeagueRequestDto createLeagueRequestDto);

    League findLeagueByLeagueSeq(Long leagueSeq);

    League updateLeague(UpdateLeagueRequestDto updateLeagueRequestDto);

    void deleteLeague(League league);
}
