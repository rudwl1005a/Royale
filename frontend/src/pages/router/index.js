import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../HomePage";
import ErrorPage from "../ErrorPage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import OurGamePage from "../OurGamePage";
import GameDetailsPage from "../GameDetailsPage";


const AllRoute = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* 메인 페이지 */}
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/error" element={<ErrorPage />} />

          {/* 로그인 / 회원가입 */}      
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />

          {/* 대회 리스트 페이지 */}
          <Route exact path="/games" element={<OurGamePage />} />

          {/* 랭킹 */}
          <Route exact path="/game-single" element={<GameDetailsPage />} />

          {/* 나머지 경로는 에러로 던짐 */}
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </Router>
    </div>
  );
};

export default AllRoute;
