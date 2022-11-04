package com.ssafy.royale.domain.game.service;

import com.ssafy.royale.domain.game.domain.Game;
import com.ssafy.royale.domain.game.dto.GameScoreRequestDto;
import com.ssafy.royale.domain.game.dto.GamesResponseDto;

import java.util.List;

public interface GameService {
    Boolean autoMakeGame(Long seq);
    List<GamesResponseDto> getTournament(Long leagueSeq, Long divisionSeq);
    Game insertCurrentGameScore(GameScoreRequestDto dto);
}
