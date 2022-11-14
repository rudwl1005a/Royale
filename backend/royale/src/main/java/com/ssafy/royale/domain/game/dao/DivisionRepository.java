package com.ssafy.royale.domain.game.dao;

import com.ssafy.royale.domain.game.domain.Division;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.validation.constraints.NotNull;

public interface DivisionRepository extends JpaRepository<Division, Long> {
    Division findDivisionSeqByDivisionAgeAndDivisionBeltAndDivisionGenderAndDivisionTypeAndDivisionWeight(String divisionAge, String divisionBelt, String divisionGender, String divisionType, String divisionWeight);
}
