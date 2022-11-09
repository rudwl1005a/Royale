import { axios, MultipartFileAxios } from "./axios";
import { saveToken, saveRefreshToken } from "./JWT";

// 회원 가입 API
export const signUpApi = async (UserCreateRequest) => {
  try {
    const res = await axios.post(
      "/users/register.do",
      // JSON.stringify(UserCreateRequest)
      UserCreateRequest
    );
    console.log(res);
    return res;
  } catch (err) {
    return err.response;
  }
};

// 로그인 API
export const loginApi = async (UserLoginRequestDto) => {
  try {
    const res = await axios.post("/users/login.do", UserLoginRequestDto);
    const {
      data: { accessToken, refreshToken },
    } = res;
    saveToken(accessToken);
    saveRefreshToken(refreshToken);
    console.log("로그인 성공");
    return res;
  } catch (err) {
    return err.response; //err안에 response로 담겨있음
  }
};

// 경기 로그 초기화 API
export const gameLogInit = async (gameSeq) => {
  try {
    console.log("기록 초기화");
    return await axios.post(`/game-log/${gameSeq}`);
  } catch (err) {
    return err.response;
  }
};

// 경기 로그 업데이트 API
export const gameLogUpdate = async (GameLogUpdateRequestDto) => {
  try {
    console.log("기록 업데이트");
    console.log(GameLogUpdateRequestDto);
    const res = await axios.patch("/game-log", GameLogUpdateRequestDto);
    console.log(res);
    return res;
    // return await axios.patch('/game-log', GameLogUpdateRequestDto);
  } catch (err) {
    return err.response;
  }
};

// 경기 로그 조회 API
export const gameLogGet = async (gameSeq) => {
  try {
    console.log("기록 조회");
    const res = await axios.get(`/game-log/${gameSeq}`);
    console.log(res.data);
    return res.data;
    // return await axios.get(`/game-log/${gameSeq}`);
  } catch (err) {
    return err.response;
  }
};

// 리그 생성 API
export const createLeagueApi = async (createLeagueRequestDto) => {
  try {
    const res = await axios.post("/leagues", createLeagueRequestDto);
    console.log(res);
    return res;
  } catch (err) {
    return err.response;
  }
};

// 리그 포스터 추가 API
export const updateLeaguePosterApi = async (leagueSeq, leaguePoster) => {
  const formData = new FormData();
  formData.append("poster", leaguePoster);
  try {
    const res = await MultipartFileAxios.post(
      `/leagues/updatePoster/${leagueSeq}`,
      formData
    );
    // console.log("리그 포스터 추가");
    console.warn(res);
    return res;
  } catch (err) {
    return err.response;
  }
};

// 페이지별 리그 리스트 호출 API
export const getLeagueListApi = async (page) => {
  try {
    // console.log("페이지별 리그 리스트 호출");
    const res = await axios.get(`/leagues/pages/${page}`);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    return err.response;
  }
};
