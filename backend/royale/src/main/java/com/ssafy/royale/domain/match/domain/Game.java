package com.ssafy.royale.domain.match.domain;

import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.user.domain.User;
import lombok.*;

import javax.persistence.*;

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
    @JoinColumn(name = "player1_seq", nullable = false)
    private User player1_seq;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player2_seq", nullable = false)
    private User player2_seq;
}
