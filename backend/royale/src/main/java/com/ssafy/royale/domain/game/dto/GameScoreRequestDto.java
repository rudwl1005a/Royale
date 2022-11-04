package com.ssafy.royale.domain.game.dto;

import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GameScoreRequestDto {
    private Long gameSeq;
    private int player1Score;
    private int player2Score;
    private Long gameWinner;
}
