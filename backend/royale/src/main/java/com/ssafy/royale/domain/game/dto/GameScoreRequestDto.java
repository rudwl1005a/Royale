package com.ssafy.royale.domain.game.dto;

import lombok.*;

import javax.validation.constraints.NotNull;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GameScoreRequestDto {
    @NotNull
    private Long gameSeq;
    @NotNull
    private int player1Score;
    @NotNull
    private int player2Score;
    @NotNull
    private Long gameWinner;
}
