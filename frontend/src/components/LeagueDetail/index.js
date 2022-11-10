// import React, { useState } from "react";
import { React, useEffect, useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
// import { FaPlay } from "react-icons/fa";
// import { BiLoaderAlt } from "react-icons/bi";
// import { MdClose } from "react-icons/md";
import img from "../../img/game-4.jpg";
// import game1 from "../../img/games-1.jpg";
// import game2 from "../../img/game-2.jpg";
// import game3 from "../../img/game-3.jpg";
// import game4 from "../../img/game-4.jpg";
import feature1 from "../../img/feature-1.png";
import feature2 from "../../img/feature-2.png";
import feature3 from "../../img/feature-3.png";
import feature4 from "../../img/feature-4.png";
import author1 from "../../img/4.jpg";
import author2 from "../../img/5.jpg";

import LeagueInfo from "../LeagueInfo";
import LeagueApply from "../LeagueApply";
import LeagueMatch from "../LeagueMatch";
import LeagueStatus from "../LeagueStatus";

import "./style.css";
import Daejin from "../Tournament/Tournament";
import { getLeagueApi } from "../../api/api";

function LeagueDetail(props) {
  let { leagueSeq } = useParams();

  const [leagueData, setLeagueData] = useState(null);

  useEffect(() => {
    async function getData() {
      const { data } = await getLeagueApi(leagueSeq);
      console.warn(data);
      setLeagueData(data);
    }
    getData();
  }, []);

  // const [modal, setModal] = useState(false);
  // const [videoLoading, setVideoLoading] = useState(true);

  // const closeModal = () => {
  //   setModal(false);
  // };
  // const openModal = () => {
  //   setModal(true);
  // };

  // const spinner = () => {
  //   setVideoLoading(!videoLoading);
  // };
  return (
    <>
      {leagueData ? (
        <section className="fag-breadcrumb-area">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="games-details-banner">
                  <Row>
                    <Col lg={3} sm={4}>
                      <div className="details-banner-thumb">
                        {/* <img src={img} alt="games" /> */}
                        <img src={leagueData.leaguePoster} alt="games" />
                      </div>
                    </Col>
                    <Col lg={6} sm={8}>
                      <div className="details-banner-info">
                        <h3>
                          {leagueData.leagueName}
                          <span className="single_rating">
                            <AiFillStar />
                            4.5
                          </span>
                        </h3>
                        <div className="single_game_meta">
                          <p className="details-genre">
                            Place: {leagueData.leaguePlace}
                          </p>
                          <p className="details-time-left">
                            <FaCalendarAlt />
                            DATE:{" "}
                            <span>
                              {leagueData.leagueDate[0]}/
                              {leagueData.leagueDate[1]}/
                              {leagueData.leagueDate[2]}
                            </span>
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="game-price single_game_price">
                        <h4>$28.99</h4>
                        <p className="off">
                          <del>$56.99</del>
                          <span />
                          50% OFF
                        </p>
                      </div>
                      <div className="details-banner-action">
                        <Link to="/" className="fag-btn">
                          Buy Now
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
        ""
      )}

      <section className="fag-games-details-page section_100">
        <Container>
          <Row className="justify-content-end">
            <Col lg={9}>
              <div className="games-details-page-box">
                {/* <ul>
                  <li>Biltong corned beef tongue </li>
                  <li>Beef short ribs leberkas cupim Drumstick </li>
                  <li>Fatback bacon picanha leberkas pork </li>
                  <li>Burgdoggen bresaola shankle </li>
                  <li>Beef short ribs leberkas cupim Drumstick </li>
                </ul> */}
                <div className="tv-panel-list">
                  <Tabs
                    defaultActiveKey="info"
                    id="uncontrolled-tab-example"
                    className="tv-tab"
                  >
                    <Tab eventKey="info" title="대회 소개">
                      <Row>
                        <Col md={12}>
                          <LeagueInfo />
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="applies" title="대회 신청">
                      <Row>
                        <Col md={12}>
                          <LeagueApply />
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="matches" title="대진표">
                      <Row>
                        <Col md={12}>
                          {/* <LeagueMatch /> */}
                          <Daejin />
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="status" title="대회 현황">
                      <Row>
                        <Col md={12}>
                          <LeagueStatus />
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="features" title="Features">
                      <div className="tab-gamess-details">
                        <Row>
                          <Col md={12}>
                            {/* <LeagueApply /> */}
                            <div className="tab-body">
                              <Row>
                                <Col lg={6} sm={6}>
                                  <div className="features-game">
                                    <div className="feature-image">
                                      <img src={feature1} alt="feature" />
                                    </div>
                                    <div className="feature-text">
                                      <h3>horor &amp; Adventure</h3>
                                      <p>
                                        Lorem ipsum is simply are many
                                        variations of pass of majority.
                                      </p>
                                    </div>
                                  </div>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <div className="features-game">
                                    <div className="feature-image">
                                      <img src={feature2} alt="feature" />
                                    </div>
                                    <div className="feature-text">
                                      <h3>Multi Players</h3>
                                      <p>
                                        Lorem ipsum is simply are many
                                        variations of pass of majority.
                                      </p>
                                    </div>
                                  </div>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <div className="features-game">
                                    <div className="feature-image">
                                      <img src={feature3} alt="feature" />
                                    </div>
                                    <div className="feature-text">
                                      <h3>Real GraphicHeroes</h3>
                                      <p>
                                        Lorem ipsum is simply are many
                                        variations of pass of majority.
                                      </p>
                                    </div>
                                  </div>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <div className="features-game">
                                    <div className="feature-image">
                                      <img src={feature4} alt="feature" />
                                    </div>
                                    <div className="feature-text">
                                      <h3>Smooth Controlling</h3>
                                      <p>
                                        Lorem ipsum is simply are many
                                        variations of pass of majority.
                                      </p>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab>
                    <Tab eventKey="reviews" title="reviews">
                      <div className="tab-gamess-details">
                        <Row>
                          <Col md={12}>
                            <div className="tab-body">
                              <div className="fag-comment-list">
                                <div className="single-comment-item">
                                  <div className="single-comment-box">
                                    <div className="main-comment">
                                      <div className="author-image">
                                        <img src={author1} alt="author" />
                                      </div>
                                      <div className="comment-text">
                                        <div className="comment-info">
                                          <h4>david kamal</h4>
                                          <ul>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                          </ul>
                                          <p>4 minitues ago</p>
                                        </div>
                                        <div className="comment-text-inner">
                                          <p>
                                            Ne erat velit invidunt his. Eum in
                                            dicta veniam interesset, harum lupta
                                            definitionem. Vocibus suscipit
                                            prodesset vim ei, equidem perpetua
                                            eu per.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="single-comment-box comment_reply">
                                    <div className="main-comment">
                                      <div className="author-image">
                                        <img src={author2} alt="author" />
                                      </div>
                                      <div className="comment-text">
                                        <div className="comment-info">
                                          <h4>Jerix Ablin</h4>
                                          <ul>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                          </ul>
                                          <p>12 minitues ago</p>
                                        </div>
                                        <div className="comment-text-inner">
                                          <p>
                                            orem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Velit
                                            omnis animi et iure laudantium
                                            vitae, praesentium optio, sapiente
                                            distinctio illo?{" "}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="single-comment-box">
                                    <div className="main-comment">
                                      <div className="author-image">
                                        <img src={author1} alt="author" />
                                      </div>
                                      <div className="comment-text">
                                        <div className="comment-info">
                                          <h4>david kamal</h4>
                                          <ul>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                            <li>
                                              <AiFillStar />
                                            </li>
                                          </ul>
                                          <p>4 minitues ago</p>
                                        </div>
                                        <div className="comment-text-inner">
                                          <p>
                                            Ne erat velit invidunt his. Eum in
                                            dicta veniam interesset, harum lupta
                                            definitionem. Vocibus suscipit
                                            prodesset vim ei, equidem perpetua
                                            eu per.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /end comment list */}
                              <div className="fag-leave-comment">
                                <form>
                                  <Row>
                                    <Col lg={12}>
                                      <div className="comment-field">
                                        <textarea
                                          className="comment"
                                          placeholder="Comment..."
                                          name="comment"
                                          defaultValue={""}
                                        />
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={12}>
                                      <div className="comment-field">
                                        <button
                                          type="submit"
                                          className="fag-btn"
                                        >
                                          Add Comment <span />
                                        </button>
                                      </div>
                                    </Col>
                                  </Row>
                                </form>
                              </div>
                              {/* /end comment form */}
                            </div>
                          </Col>
                        </Row>
                        {/* End Row */}
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* {modal ? (
        <section className="modal__bg">
          <div className="modal__align">
            <div className="modal__content">
              <span className="closeVideo" onClick={closeModal}>
                <MdClose />
              </span>
              <div className="modal__video-align">
                {videoLoading ? (
                  <div className="modal__spinner">
                    <BiLoaderAlt className="modal__spinner-style" />
                  </div>
                ) : null}
                <iframe
                  className="modal__video-style"
                  onLoad={spinner}
                  loading="lazy"
                  width="800"
                  height="500"
                  src="https://www.youtube.com/embed/3SAuuHCOkyI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      ) : null} */}
    </>
  );
}

export default LeagueDetail;
