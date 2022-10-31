package com.ssafy.royale.domain.game.dao;

import com.ssafy.royale.domain.game.domain.Division;
import com.ssafy.royale.domain.game.domain.Game;
import com.ssafy.royale.domain.league.domain.League;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GameRepository extends JpaRepository<Game, Long> {

    List<Game> findAllByLeagueAndDivision(League league, Division division);
}
