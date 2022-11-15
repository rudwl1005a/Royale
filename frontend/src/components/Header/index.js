import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu";
// import logo from "../../img/Logo_LeagueRoyale_black.png";
import logo from "../../img/Logo_Royale_black.png";
import admin from "../../img/admin.jpg";

import "./style.css";

function Header(props) {
  // const [show, setShow] = useState(false);

  // const SubmitHandler = (e) => {
  //   e.preventDefault();
  // };

  const onClick = (e) => {
    e.preventDefault();
  };

  const [state, setstate] = useState(false);
  const changeClass = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 100) {
      setstate(true);
    } else {
      setstate(false);
    }
  };
  window.addEventListener("scroll", changeClass);
  return (
    <>
      <header className={state ? "header-area scroll" : "header-area "}>
        <Container>
          <div className="header-inn d-flex align-items-center justify-content-between">
            <div className="site-logo">
              <Link to="/">
                <img src={logo} alt="img" width={"200px"} />
              </Link>
            </div>
            <div className="header-navigation d-flex align-items-center justify-content-between">
              <div className="mainmenu">
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      {" "}
                      {/* <li className="has-sub"> */}
                      <Link to="/" onClick={onClick}>
                        League
                      </Link>
                      <ul>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/leaguelist">Leagues</Link>
                        </li>
                        <li>
                          <Link to="/rule">Rule</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        Rank
                      </Link>
                      <ul>
                        <li>
                          <Link to="/personalRank">Personal</Link>
                        </li>
                        <li>
                          <Link to="/teamRank">Team</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="http://jiujitsuroyale.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Store
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCeSQZrz7nc-ABi9W7xqSpnA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Video
                      </a>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right d-flex align-items-center justify-content-between">
                <div className="header-auth">
                  <Link to="/" onClick={onClick} className="lang-btn">
                    <img src={admin} alt="admin" />
                    Dave
                  </Link>
                  <ul className="user_menu">
                    <li>
                      <Link to="/competition/:id">Competition</Link>
                    </li>
                    <li>
                      <Link to="/match/finish/:id">Daejin</Link>
                    </li>
                    <li>
                      <Link to="/tournament/:leagueSeq/:divisionSeq">
                        Tournament
                      </Link>
                    </li>
                    <li>
                      <Link to="/searchApplicant">선수 검색</Link>
                    </li>
                    <li>
                      <Link to="/createLeague">league</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <MobileMenu />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
