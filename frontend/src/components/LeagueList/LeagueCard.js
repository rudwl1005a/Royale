import { React, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import games2 from "../../img/poster_reda_seminar.jpg";

function LeagueCard(props) {
  const [leagueSeq, setleagueSeq] = useState("");
  const [leagueName, setleagueName] = useState("");
  const [leaguePlace, setleaguePlace] = useState("");
  const [leagueDate, setleagueDate] = useState("");
  const [leagueDeadline, setleagueDeadline] = useState("");
  const [leaguePoster, setleaguePoster] = useState("");
  const [leagueInfo, setleagueInfo] = useState("");

  return (
    <>
      <Col lg={4} sm={6}>
        <div className="games-single-item img-contain-isotope">
          <div className="games-thumb">
            <div className="games-thumb-image">
              <Link to="/leaguedetail">
                <img src={games2} alt="games" />
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
              <Link to="/leaguedetail">Reda Mebtouche Seminar</Link>
            </h3>
            <p className="game-meta">
              date:<span> 2022.11.05 ~ 2022.11.13 </span>
            </p>
            <p className="game-meta">palce: 부산, 서면, 인천</p>
            <div className="game-action">
              <div className="game-price">
                <h4>₩50,000</h4>
                <p className="free">Comming Soon</p>
              </div>
              <div className="game-buy">
                <Link to="/leaguedetail" className="fag-btn-outline">
                  Participate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default LeagueCard;
