import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useBeforeunload } from "react-beforeunload";
import io from 'socket.io-client'; // Client Socket
import "./style.css";
// import { gameLogInit, gameLogUpdate, gameLogGet } from "../../api/api";

function Scoreboard(props) {

  const onClick = (e) => {
    e.preventDefault();
  };

  const [playerOneName, setPlayerOneName] = useState("조찬홍")
  const [playerOneTeam, setPlayerOneTeam] = useState("존 프랭클 주짓수랜드")
  const [playerTwoName, setPlayerTwoName] = useState("Dave Yusun Kim")
  const [playerTwoTeam, setPlayerTwoTeam] = useState("주짓수랜드HQ")
  
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerOneAdvantage, setPlayerOneAdvantage] = useState(0);
  const [playerOnePenalty, setPlayerOnePenalty] = useState(0);
  
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [playerTwoAdvantage, setPlayerTwoAdvantage] = useState(0);
  const [playerTwoPenalty, setPlayerTwoPenalty] = useState(0);
  
  const [isStart, setIsStart] = useState(false);
  
  // socket.io
  const socket = io('http://localhost:4000', {
		cors: {
      origin: "*",
		}
	});

  // 처음 랜더링 될 때 설정
  // useEffect(() => {
  //   const gameLogGetDto = gameLogGet(1);
  //   setPlayerOneScore(gameLogGetDto.score1);
  //   setPlayerTwoScore(gameLogGetDto.score2);
  //   setPlayerOneAdvantage(gameLogGetDto.advantage1);
  //   setPlayerTwoAdvantage(gameLogGetDto.advantage2);
  //   setPlayerOnePenalty(gameLogGetDto.penalty1);
  //   setPlayerTwoPenalty(gameLogGetDto.penalty2);
  // }, [])
  
  const plusOnePlayer = (n) => {
    if(n === 'A') {
      setPlayerOneAdvantage(playerOneAdvantage + 1);
    } else if(n === 'P') {
      setPlayerOnePenalty(playerOnePenalty + 1);
    } else {
      setPlayerOneScore(playerOneScore + n);
    }
  }

  const minusOnePlayer = (n) => {
    if(n === 'A') {
      setPlayerOneAdvantage(playerOneAdvantage - 1);
    } else if(n === 'P') {
      setPlayerOnePenalty(playerOnePenalty - 1);
    } else {
      setPlayerOneScore(playerOneScore - n);
    }
  }

  const plusTwoPlayer = (n) => {
    if(n === 'A') {
      setPlayerTwoAdvantage(playerTwoAdvantage + 1);
    } else if(n === 'P') {
      setPlayerTwoPenalty(playerTwoPenalty + 1);
    } else {
      setPlayerTwoScore(playerTwoScore + n);
    }
  }

  const minusTwoPlayer = (n) => {
    if(n === 'A') {
      setPlayerTwoAdvantage(playerTwoAdvantage - 1);
    } else if(n === 'P') {
      setPlayerTwoPenalty(playerTwoPenalty - 1);
    } else {
      setPlayerTwoScore(playerTwoScore - n);
    }
  }


  // 새로고침, 뒤로가기, 종료 방지
  // useBeforeunload((event) => event.preventDefault());

  return (
    <>
      <div className="scoreboard-block" Style="padding-left: 5vmin; background-color: black">
        <Row className="player">
          <Col xs={7} sm={7}>
            <Row className="playerInfo">
              <span className={`playerInfo-name ${playerOneName.length > 8 ? "Small" : ""}`}>{playerOneName}</span>
              <span className="playerInfo-team">{playerOneTeam}</span>
            </Row>
            <Row className="playerInfo-button">
              <table Style="width: 25vw; height: 80%; margin-left: 2vw; background-color: #0D0E1B">
                <tr Style="color: #3b973b; width: 3vw;">
                  <td onClick={() => {plusOnePlayer(1)}}><span>+1</span></td>
                  <td onClick={() => {plusOnePlayer(2)}}><span>+2</span></td>
                  <td onClick={() => {plusOnePlayer(3)}}><span>+3</span></td>
                  <td onClick={() => {plusOnePlayer('A')}}><span>+A</span></td>
                  <td onClick={() => {plusOnePlayer('P')}}><span>+P</span></td>
                </tr>
                <tr Style="color: #ba353d; width: 3vw;">
                  <td onClick={() => {minusOnePlayer(1)}}><span>-1</span></td>
                  <td onClick={() => {minusOnePlayer(2)}}><span>-2</span></td>
                  <td onClick={() => {minusOnePlayer(3)}}><span>-3</span></td>
                  <td onClick={() => {minusOnePlayer('A')}}><span>-A</span></td>
                  <td onClick={() => {minusOnePlayer('P')}}><span>-P</span></td>
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
                  {playerOnePenalty}
                </span>
              </span>
              <span>
                <span className="playerScore-tag" Style="color: #3b973b">
                  ADVANTAGE
                </span>
                <span className="playerScore-info" Style="color: #3b973b">
                  {playerOneAdvantage}
                </span>
              </span>
            </span>
            <span className="playerScore-score playerOne">
              {playerOneScore}
            </span> 
          </Col>
        </Row>

        <Row className="player">
        <Col xs={7} sm={7}>
            <Row className="playerInfo">
              <span className={`playerInfo-name ${playerTwoName.length > 8 ? "Small" : ""}`}>{playerTwoName}</span>
              <span className="playerInfo-team">{playerTwoTeam}</span>
            </Row>
            <Row className="playerInfo-button">
              <table Style="width: 25vw; height: 80%; margin-left: 2vw; background-color: #0D0E1B">
                <tr Style="color: #3b973b; width: 3vw;">
                  <td onClick={() => {plusTwoPlayer(1)}}><span>+1</span></td>
                  <td onClick={() => {plusTwoPlayer(2)}}><span>+2</span></td>
                  <td onClick={() => {plusTwoPlayer(3)}}><span>+3</span></td>
                  <td onClick={() => {plusTwoPlayer('A')}}><span>+A</span></td>
                  <td onClick={() => {plusTwoPlayer('P')}}><span>+P</span></td>
                </tr>
                <tr Style="color: #ba353d; width: 3vw;">
                  <td onClick={() => {minusTwoPlayer(1)}}><span>-1</span></td>
                  <td onClick={() => {minusTwoPlayer(2)}}><span>-2</span></td>
                  <td onClick={() => {minusTwoPlayer(3)}}><span>-3</span></td>
                  <td onClick={() => {minusTwoPlayer('A')}}><span>-A</span></td>
                  <td onClick={() => {minusTwoPlayer('P')}}><span>-P</span></td>
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
                  {playerTwoPenalty}
                </span>
              </span>
              <span>
                <span className="playerScore-tag" Style="color: #3b973b">
                  ADVANTAGE
                </span>
                <span className="playerScore-info" Style="color: #3b973b">
                  {playerTwoAdvantage}
                </span>
              </span>
            </span>
            <span className="playerScore-score playerTwo">
              {playerTwoScore}
            </span> 
          </Col>
        </Row>

        <Row>
          <span className="gameInfo">
            <span className="gameInfo-button">
              <table Style="width: 50vw; height: 80%; margin-left: 1vw; background-color: #0D0E1B">
                <tr>
                  <td colspan='5'>
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
                  { isStart === false
                   ? <td colspan='2'><span>SWITCH SIDES</span></td>
                   : <td><span>dp</span></td> }
                   { isStart === false
                   ? ''
                   : <td><span>sub</span></td> }
                </tr>
                <tr Style="color: white; width: 3vw;">
                  <td><span Style="color: #ba353d">-1 SEC</span></td>
                  <td><span Style="color: #ba353d">-10 SEC</span></td>
                  <td><span Style="color: #ba353d">-60 SEC</span></td>
                  { isStart === false
                   ? <td colspan='2' onClick={() => setIsStart(true)}><span>START GAME</span></td>
                   : <td colspan='2' onClick={() => setIsStart(false)}><span>END GAME</span></td> }
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
