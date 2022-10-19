package com.ssafy.royale.domain.user.dto;

import com.ssafy.royale.domain.user.domain.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserLoginResponseDto")
public class UserLoginResponseDto {

    @ApiModelProperty(name="JWT 인증 토큰", example="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN...")
    TokenDto tokenDto;

    @ApiModelProperty(name="유저 정보", example="...")
    User user;

    public static UserLoginResponseDto of(TokenDto tokenDto, User user) {
        UserLoginResponseDto res = new UserLoginResponseDto();
        res.setTokenDto(tokenDto);
        res.setUser(user);
        return res;
    }

}
