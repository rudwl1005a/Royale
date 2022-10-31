package com.ssafy.royale.domain.game.service;

import com.ssafy.royale.domain.game.dto.GamesResponseDto;

import java.util.List;

public interface GameService {
    Boolean autoMakeGame(Long seq);
    List<GamesResponseDto> getTournament(Long leagueSeq, Long divisionSeq);
}
