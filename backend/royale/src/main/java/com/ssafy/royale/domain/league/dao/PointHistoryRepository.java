package com.ssafy.royale.domain.league.dao;

import com.ssafy.royale.domain.league.domain.PointHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PointHistoryRepository extends JpaRepository<PointHistory, Long> {
}
