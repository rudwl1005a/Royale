package com.ssafy.royale.domain.user.service;

import com.ssafy.royale.domain.user.dao.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;


@DataJpaTest
class ApplyServiceTest {
    @Autowired
    public UserRepository userRepository;
    @Autowired
    public ApplyService applyService;

    @Test
    @DisplayName("유저 검색 테스트")
    public void 유저검색테스트(){
        String name = "김근영";
        System.out.println(applyService.getApplyList(name));

    }
}