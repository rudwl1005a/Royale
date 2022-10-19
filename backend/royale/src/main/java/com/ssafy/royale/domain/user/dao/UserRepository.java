package com.ssafy.royale.domain.user.dao;

import com.ssafy.royale.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
