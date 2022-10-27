import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useBeforeunload } from "react-beforeunload";

import "./style.css";

function Scoreboard(props) {

  const onClick = (e) => {
    e.preventDefault();
  };

  const tempText = "존 프랭클 (존 프랭클 주짓수랜드)"
  const tempPlayerName = "조찬홍"
  const tempPlayerTeam = "존 프랭클 주짓수랜드"

  const tempPlayerName2 = "Pembrook Anastasia L"
  // const tempPlayerName2 = "안세영"
  const tempPlayerTeam2 = "야레야레 주짓수랜드"

  var tempScore = 13
  var tempAdvantage = 0
  var tempPenalty = 0

  // 새로고침, 뒤로가기, 종료 방지
  // useBeforeunload((event) => event.preventDefault());

  return (
    <>
      <div className="scoreboard-block" Style="padding-left: 5vmin; background-color: black">
        <Row className="player">
          <Col xs={7} sm={7}>
            <Row className="playerInfo">
              <span className={`playerInfo-name ${tempPlayerName.length > 8 ? "Small" : ""}`}>{tempPlayerName}</span>
              <span className="playerInfo-team">{tempPlayerTeam}</span>
            </Row>
            <Row className="playerInfo-button">
              <table Style="width: 25vw; height: 80%; margin-left: 2vw; background-color: #0D0E1B">
                <tr Style="color: #3b973b; width: 3vw;">
                  <td onClick={()=>alert('+1')}><span>+1</span></td>
                  <td onClick={()=>alert('+2')}><span>+2</span></td>
                  <td onClick={()=>alert('+3')}><span>+3</span></td>
                  <td onClick={()=>alert('+A')}><span>+A</span></td>
                  <td onClick={()=>alert('+P')}><span>+P</span></td>
                </tr>
                <tr Style="color: #ba353d; width: 3vw;">
                  <td onClick={()=>alert('-1')}><span>-1</span></td>
                  <td onClick={()=>alert('-2')}><span>-2</span></td>
                  <td onClick={()=>alert('-3')}><span>-3</span></td>
                  <td onClick={()=>alert('-A')}><span>-A</span></td>
                  <td onClick={()=>alert('-P')}><span>-P</span></td>
                </tr>
              </table>
            </Row>
          </Col>
          <Col xs={5} sm={5} className="playerScore">
            <span className="playerScore-pa">
              <span>
                <span className="playerScore-tag" Style="color: #ba353d">
                  PENALTY
                </span>
                <span className="playerScore-info" Style="color: #ba353d">
                  0
                </span>
              </span>
              <span>
                <span className="playerScore-tag" Style="color: #3b973b">
                  ADVANTAGE
                </span>
                <span className="playerScore-info" Style="color: #3b973b">
                  1
                </span>
              </span>
            </span>
            <span className="playerScore-score playerOne">
              {tempScore}
            </span> 
          </Col>
        </Row>

        <Row className="player">
        <Col xs={7} sm={7}>
            <Row className="playerInfo">
              <span className={`playerInfo-name ${tempPlayerName2.length > 8 ? "Small" : ""}`}>{tempPlayerName2}</span>
              <span className="playerInfo-team">{tempPlayerTeam2}</span>
            </Row>
            <Row className="playerInfo-button">
              <table Style="width: 25vw; height: 80%; margin-left: 2vw; background-color: #0D0E1B">
                <tr Style="color: #3b973b; width: 3vw;">
                  <td><span>+1</span></td>
                  <td><span>+2</span></td>
                  <td><span>+3</span></td>
                  <td><span>+A</span></td>
                  <td><span>+P</span></td>
                </tr>
                <tr Style="color: #ba353d; width: 3vw;">
                  <td><span>-1</span></td>
                  <td><span>-2</span></td>
                  <td><span>-3</span></td>
                  <td><span>-A</span></td>
                  <td><span>-P</span></td>
                </tr>
              </table>
            </Row>
          </Col>
          <Col className="playerScore">
            <span className="playerScore-pa">
              <span>
                <span className="playerScore-tag" Style="color: #ba353d">
                  PENALTY
                </span>
                <span className="playerScore-info" Style="color: #ba353d">
                  2
                </span>
              </span>
              <span>
                <span className="playerScore-tag" Style="color: #3b973b">
                  ADVANTAGE
                </span>
                <span className="playerScore-info" Style="color: #3b973b">
                  3
                </span>
              </span>
            </span>
            <span className="playerScore-score playerTwo">
              1
            </span> 
          </Col>
        </Row>

        <Row>
          <span className="gameInfo">
            <span className="gameInfo-button">
              <table Style="width: 50vw; height: 80%; margin-left: 1vw; background-color: #0D0E1B">
                <tr>
                  <td colspan='4'>
                    <span Style="background-color: black;
                                  border: 1px solid black;
                                  align-content: center;
                                  justify-content: flex-start;
                                  display: flex;
                                  font-weight: bold;
                                  font-size: 4vmin;
                                  color: gray">
                      <span Style="color: #ED8B08; margin-right: 0.5vw">8강</span> match 23 ( Men / Adult / Black / -100.5kg )
                    </span>
                  </td>
                </tr>
                <tr Style="color: white; width: 3vw;">
                  <td><span Style="color: #3b973b">+1 SEC</span></td>
                  <td><span Style="color: #3b973b">+10 SEC</span></td>
                  <td><span Style="color: #3b973b">+60 SEC</span></td>
                  <td><span>SWITCH SIDES</span></td>
                </tr>
                <tr Style="color: white; width: 3vw;">
                  <td><span Style="color: #ba353d">-1 SEC</span></td>
                  <td><span Style="color: #ba353d">-10 SEC</span></td>
                  <td><span Style="color: #ba353d">-60 SEC</span></td>
                  <td><span>END GAME</span></td>
                </tr>
              </table>
            </span>
            <span className="gameInfo-time">10:00</span>
          </span>
        </Row>
      </div>
    </>
  );
}

export default Scoreboard;
