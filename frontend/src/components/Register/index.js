import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FaFacebookF, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
// import { Link } from "react-router-dom";

import "./style.css";

// 회원가입
import baseAxios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = baseAxios.create({
  // baseURL: 'https://k7e204.p.ssafy.io',
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export const regist = createAsyncThunk(
  "REGIST",
  async (UserCreateRequest, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/users/register.do", UserCreateRequest);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

function Register(props) {
  const [userEmail, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userPhone, setPhone] = useState("");

  const handleSubmit = (event) => {
    const UserCreateRequest = {
      userEmail,
      userName,
      userPassword,
      userPhone,
    };

    event.preventDefault();
  };

  // 폼 제출 함수
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const data = {
  //     userEmail,
  //     userNickname,
  //     userPassword,
  //     userGender,
  //     userBirthday,
  //     userName,
  //     userPhone,
  //   };
  //   dispatch(signup(data))
  //     .unwrap()
  //     .then(() => {
  //       history.push("/");
  //     })
  //     .catch((err) => {
  //       if (err.status === 401) {
  //         alert("입력하신 정보를 한번 더 확인해주세요");
  //       } else if (err.status === 500) {
  //         history.push("/error");
  //       }
  //     });
  // }

  // const handleSubmit = (event) => {

  // }
  // const onClick = (e) => {
  //   e.preventDefault();
  // };
  return (
    <>
      <div className="page-404 section--full-bg">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="page-404__wrap">
                <div className="login-wrapper">
                  <h3>Create Account</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <input
                        type="email"
                        placeholder="UserEmail"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="text"
                        placeholder="UserName"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="password"
                        placeholder="userPassword"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="tel"
                        placeholder="userTel"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <button className="fag-btn" type="submit">
                        Create your Account!
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Register;
