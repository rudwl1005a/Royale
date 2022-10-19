package com.ssafy.royale.domain.game.domain;

import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.user.domain.Apply;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
@ToString
@Entity
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "game_seq")
    private Long game_seq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "league_seq", nullable = false)
    private League league;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "division_seq", nullable = false)
    private Division division;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player1_seq")
    private Apply player1_seq;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player2_seq")
    private Apply player2_seq;
    private int matNum;
    private int matGameNum;
    private String player1_score;
    private String player2_score;
    private Long gameWinner;
    private int tournamentRoundText;
    @CreationTimestamp
    @Column(name = "REG_DTM", nullable = false)
    private LocalDateTime REG_DTM;
    @UpdateTimestamp
    @Column(name = "MOD_DTM", nullable = true)
    private LocalDateTime MOD_DTM;
}
