package com.ssafy.royale.domain.user.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long user_seq;

    @Column(name = "user_email", unique = true, nullable = false)
    private String userEmail;
    @Column(name = "user_password", unique = false, nullable = false)
    private String userPassword;
    @Column(name = "user_name", unique = false, nullable = false)
    private String userName;
    @Column(name = "user_phone", unique = false, nullable = false)
    private String userPhone;

    @CreationTimestamp
    @Column(name = "REG_DTM", nullable = false)
    private LocalDateTime REG_DTM;

    @UpdateTimestamp
    @Column(name = "MOD_DTM", nullable = true)
    private LocalDateTime MOD_DTM;

}

