package com.ssafy.royale.domain.user.api;

import com.ssafy.royale.domain.user.dto.ApplyResponseDto;
import com.ssafy.royale.domain.user.service.ApplyService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "참가자 API", tags = {"Apply"})
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/applies")
public class ApplyController {

    private final ApplyService applyService;
    @GetMapping("/{name}")
    public ResponseEntity<List<ApplyResponseDto>> getApplyList(@PathVariable String name){
        return new ResponseEntity<>(applyService.getApplyList(name), HttpStatus.OK);
    }

    @PatchMapping("/{userSeq}")
    public ResponseEntity<Void> weightCheck(@PathVariable Long userSeq){
        applyService.weightCheck(userSeq);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
