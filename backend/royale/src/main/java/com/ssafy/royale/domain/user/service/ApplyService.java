package com.ssafy.royale.domain.user.service;

import com.ssafy.royale.domain.user.dao.UserRepository;
import com.ssafy.royale.domain.user.domain.Apply;
import com.ssafy.royale.domain.user.domain.User;
import com.ssafy.royale.domain.user.dto.ApplyResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@Slf4j
@RequiredArgsConstructor
public class ApplyService {

    private final UserRepository userRepository;

    public List<ApplyResponseDto> getApplyList(String name){
        List<User> users = userRepository.findAllByUserName(name);
        List<ApplyResponseDto> result = new ArrayList<>();
        Set<String> duplicateCheck = new HashSet<>();
        for (User user: users) {
            for (Apply apply: user.getApplies()) {
                if(duplicateCheck.add(user.getUserPhone())){
                    ApplyResponseDto responseDto = ApplyResponseDto.builder()
                            .applySeq(apply.getApplySeq())
                            .name(user.getUserName())
                            .phoneNumber(user.getUserPhone())
                            .isBodyMeasurements(apply.isWeightCheck())
                            .build();
                    result.add(responseDto);
                }
            }
        }

        return result;
    }
}
