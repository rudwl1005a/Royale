import { React, useEffect, useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { FaPlaceOfWorship, FaCalendarAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import LeagueInfo from "../LeagueInfo";
import LeagueApply from "../LeagueApply";
import LeagueStatus from "../LeagueStatus";
import SelectDivision from "../SelectDivision";
import SearchApplicant from "../SearchApplicant";

import "./style.css";
import Daejin from "../Tournament/Tournament";
import { getLeagueApi } from "../../api/api";


function LeagueDetail(props) {
  let { leagueSeq } = useParams();

  const [leagueData, setLeagueData] = useState(null);

  const userRole = sessionStorage.getItem("userRole");
  
  useEffect(() => {
    async function getData() {
      const { data } = await getLeagueApi(leagueSeq);
      console.warn(data);
      setLeagueData(data);
    }
    getData();
  }, []);

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
                            <FaPlaceOfWorship /> PLACE: {leagueData.leaguePlace}
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
        <br/>
        <Container>
          <Row className="justify-content-end">
            <Col lg={12}>
              <div className="games-details-page-box">
                <br />
                <div className="tv-panel-list">
                  <Tabs
                    defaultActiveKey="info"
                    id="uncontrolled-tab-example"
                    className="tv-tab"
                  >
                    <Tab eventKey="info" title="대회 소개">
                      <Row>
                        <Col md={12}>
                          {leagueData ? (
                            <LeagueInfo leagueInfo={leagueData.leagueInfo} />
                          ) : (
                            ""
                          )}
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="applies" title="대회 신청">
                      <Row>
                        <Col md={12}>
                          <LeagueApply leagueSeq={leagueSeq}/>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="matches" title="대진표">
                      <Row>
                        <Col md={12}>
                          <SelectDivision/>
                          <br />
                          <br />
                          <Daejin leagueSeq={leagueSeq} />
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
                    {userRole === "admin" &&
                    <Tab eventKey="search" title="참가자 조회">
                      <Row>
                        <Col md={12}>
                        <SearchApplicant/>
                          {/* <LeagueStatus /> */}
                        </Col>
                      </Row>
                    </Tab>}
                    
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LeagueDetail;
