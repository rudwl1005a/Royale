package com.ssafy.royale.domain.user.domain;


import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.match.domain.Division;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@ToString
@Entity
public class Apply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "apply_seq")
    private Long apply;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "league_seq", nullable = false)
    private League league;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_seq", nullable = false)
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_seq", nullable = false)
    private Team team;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "division_seq", nullable = false)
    private Division division;
    private boolean weightCheck;
    private boolean moneyCheck;
    @CreationTimestamp
    @Column(name = "REG_DTM", nullable = false)
    private LocalDateTime REG_DTM;

    @UpdateTimestamp
    @Column(name = "MOD_DTM", nullable = true)
    private LocalDateTime MOD_DTM;

}
