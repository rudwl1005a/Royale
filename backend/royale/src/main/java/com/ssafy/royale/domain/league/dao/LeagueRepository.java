package com.ssafy.royale.domain.league.dao;

import com.ssafy.royale.domain.league.domain.League;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeagueRepository extends JpaRepository<League, Long> {
}
