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
    const res = await axios.get(`/leagues/pages/${page}`);
    return res;
  } catch (err) {
    return err.response;
  }
};
