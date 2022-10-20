package com.ssafy.royale.domain.game.api;

import com.ssafy.royale.domain.game.dto.GamesResponseDto;
import com.ssafy.royale.domain.game.service.GameService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/game")
@RequiredArgsConstructor
public class GameController {
    private final GameService gameService;

    @GetMapping("/finish/{seq}")
    @ApiOperation(value = "대회 신청 마감, 자동 대진표 생성")
    public ResponseEntity<List<GamesResponseDto>> autoMakeGame(@PathVariable Long seq){
        List<GamesResponseDto> result = gameService.autoMakeGame(seq);
        System.out.println(result.get(0).toString());
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
