import { React, useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../../store";

import games2 from "../../img/poster_reda_seminar.jpg";

const LeagueComponent = ({ leagueData }) => {

  return (
    <>
      <Col Col lg={4} sm={6}>
      <div className="games-single-item img-contain-isotope">
        <div className="games-thumb">
          <div className="games-thumb-image">
            <Link to="/leaguedetail">
              <img src={leagueData.leaguePoster} alt="games" />
            </Link>
          </div>
          <div className="game-overlay">
            {/* <div onClick={openModal} className="popup-youtube">
              <span>
                <FaPlay />
              </span>
            </div> */}
          </div>
        </div>
        <div className="games-desc">
          <h3>
            <Link to="/leaguedetail">{leagueData.leagueName}</Link>
          </h3>
          <p className="game-meta">
            date:<span> {leagueData.leagueDate} </span>
          </p>
          <p className="game-meta">{leagueData.leaguePlace}</p>
          <div className="game-action">
            <div className="game-price">
              <h4>₩50,000 ~ </h4>
              <p className="free">Comming Soon</p>
            </div>
            <div className="game-buy">
              <Link
                to={`/leaguedetail/${leagueData.leagueSeq}`}
                className="fag-btn-outline"
              >
                Participate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Col>
    </>
  );
};

export default LeagueComponent;
