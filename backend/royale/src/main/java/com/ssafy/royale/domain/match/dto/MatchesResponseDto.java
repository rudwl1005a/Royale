package com.ssafy.royale.domain.match.dto;

import com.ssafy.royale.domain.user.dto.ParticipantsDto;
import io.swagger.annotations.ApiOperation;
import lombok.Builder;
import lombok.ToString;

import java.util.List;

@Builder
@ApiOperation(value = "MatchesResponseDto")
@ToString
public class MatchesResponseDto {
    private Integer id;
    private String name;
    private Integer nextMatchId;
    private String tournamentRoundText;
    private String startTime;
    private String state;
    private List<ParticipantsDto> participants;

    public static MatchesResponseDto from(){
        return null;
    }
}
