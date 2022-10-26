package com.ssafy.royale.domain.league.api;

import com.ssafy.royale.domain.league.domain.League;
import com.ssafy.royale.domain.league.service.LeagueServiceImpl;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "리그", tags = {"League"})
@RestController
@RequestMapping("/api/leagues")
public class LeagueController {

    @Autowired
    LeagueServiceImpl leagueService;

    public ResponseEntity<?> createPrescription() {

    }
    /*
    @PostMapping("/regist")
	@ApiOperation(value = "처방전 생성", notes = "처방전을 생성한다.")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패(토큰 없음)"),
			@ApiResponse(code = 402, message = "생성 권한 없음"),
			@ApiResponse(code = 403, message = "생성 권한 없음"),
			@ApiResponse(code = 405, message = "생성 권한 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<?> createPrescription(
			@ApiIgnore Authentication authentication,
			@RequestBody @ApiParam(value="처방전 정보", required = true) CreatePrescriptionPostReq createPrescriptionPostReq) {

		// 토큰 확인
		if (authentication == null) {
			return new ResponseEntity<>("토큰이 없습니다", HttpStatus.valueOf(401));
		}

		// jwt 토큰에서 user 가져오기
		SsafyUserDetails userDetails = (SsafyUserDetails)authentication.getDetails();
		User user = userDetails.getUser();
		HospitalInfo hospitalInfo = hospitalService.getHospitalInfo(user.getUserSeq());

		// 의사(1)만 처방전 생성 가능
		if (hospitalInfo.getUserIdx() != 1) {
			return new ResponseEntity<>("처방전 생성 권한이 없습니다.", HttpStatus.valueOf(405));
		}

		if (!patientService.existsByPatientUserSeq(createPrescriptionPostReq.getPatientUserSeq())) {
			return new ResponseEntity<>("지정된 환자가 없습니다.", HttpStatus.valueOf(402));
		} else if (createPrescriptionPostReq.getTokenId() == null) {
			return new ResponseEntity<>("토큰 ID가 없습니다.", HttpStatus.valueOf(403));
		}

		prescriptionService.createPrescription(user.getUserSeq(), createPrescriptionPostReq);
		return new ResponseEntity<>("처방전 발행이 완료되었습니다", HttpStatus.valueOf(200));
	}

     */

}
