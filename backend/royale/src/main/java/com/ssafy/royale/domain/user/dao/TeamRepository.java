package com.ssafy.royale.domain.user.dao;

import com.ssafy.royale.domain.user.domain.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {
}
