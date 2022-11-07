import axios from "./axios";
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

// export default signUpApi;

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
