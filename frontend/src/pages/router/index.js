import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../HomePage";
import ErrorPage from "../ErrorPage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import AboutPage from "../AboutPage";
import RulePage from "../RulePage";
import LeagueListPage from "../LeagueListPage";
import LeagueDetailPage from "../LeagueDetailPage";
import PersonalRankPage from "../PersonalRankPage";
import TeamRankPage from "../TeamRankPage";
import ContactPage from "../ContactPage";

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

          {/* 대회 소개 페이지 */}
          <Route exact path="/about" element={<AboutPage />} />
          {/* 대회 리스트 페이지 */}
          <Route exact path="/leaguelist" element={<LeagueListPage />} />
          {/* 대회 정보 페이지 */}
          <Route exact path="/leaguedetail" element={<LeagueDetailPage />} />
          {/* 대회 규칙 페이지 */}
          <Route exact path="/rule" element={<RulePage />} />

          {/* 랭킹 */}
          <Route exact path="/personalRank" element={<PersonalRankPage />} />
          <Route exact path="/teamRank" element={<TeamRankPage />} />

          {/* Contact */}
          <Route exact path="/contact" element={<ContactPage />} />

          {/* 나머지 경로는 에러로 던짐 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoute;
