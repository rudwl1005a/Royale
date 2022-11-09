import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useBeforeunload } from "react-beforeunload";
import io from 'socket.io-client'; // Client Socket
import "./style.css";
// import { gameLogInit, gameLogUpdate, gameLogGet } from "../../api/api";

import { gameLogGet, gameLogUpdate } from "../../api/api";

function Scoreboard(props) {

  const onClick = (e) => {
    e.preventDefault();
  };

  // 선수 변수
  const [playerOneSeq, setPlayerOneSeq] = useState(1);
  const [playerTwoSeq, setPlayerTwoSeq] = useState(2);
  const [playerOneName, setPlayerOneName] = useState("이형석")
  const [playerOneTeam, setPlayerOneTeam] = useState("존프랭클주짓수 버닝주짓수")
  const [playerTwoName, setPlayerTwoName] = useState("데이브김")
  const [playerTwoTeam, setPlayerTwoTeam] = useState("존프랭클 주짓수랜드")

  // 경기 변수
  const [matchRound, setMatchRound] = useState(8);
  const [matchNum, setMatchNum] = useState(23);
  
  // 스코어 변수
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerOneAdvantage, setPlayerOneAdvantage] = useState(0);
  const [playerOnePenalty, setPlayerOnePenalty] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [playerTwoAdvantage, setPlayerTwoAdvantage] = useState(0);
  const [playerTwoPenalty, setPlayerTwoPenalty] = useState(0);
  const [playerDq, setPlayerDq] = useState(null);
  const [playerSub, setPlayerSub] = useState(null);
  
  const [isStart, setIsStart] = useState(false);
  const [isStop, setIsStop] = useState(false);

  const [currentMinutes, setCurrentMinutes] = useState(5);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [count, setCount] = useState(5*60);

  // 처음 랜더링 될 때 설정
  useEffect(() => {
    async function getData() {
      const data = await gameLogGet(1);
      console.warn(data);

      setPlayerOneScore(data.score1);
      setPlayerTwoScore(data.score2);
      setPlayerOneAdvantage(data.advantage1);
      setPlayerTwoAdvantage(data.advantage2);
      setPlayerOnePenalty(data.penalty1);
      setPlayerTwoPenalty(data.penalty2);
    }

    getData();

  }, [])

  useEffect(() => {
    const gameData = {
      gameSeq: 1,
      score1: playerOneScore,
      score2: playerTwoScore,
      advantage1: playerOneAdvantage,
      advantage2: playerTwoAdvantage,
      penalty1: playerOnePenalty,
      penalty2: playerTwoPenalty,
      dq: "",
      sub: ""
    }

    gameLogUpdate(gameData);
  }, [playerOneScore, playerTwoScore, playerOneAdvantage, playerTwoAdvantage, playerOnePenalty, playerTwoPenalty]);

  // socket.io
  const socket = io('http://localhost:4000', {
    cors: {
      origin: "*",
    }
  });

  const useCounter = (ms) => {
    const intervalRef = useRef(null);
    const start = useCallback(() => {
      if (intervalRef.current !== null) {
        return;
      }
      setIsStop(false);
      intervalRef.current = setInterval(() => {
        setCount(c => c - 1);
      }, ms);
    }, []);
    const stop = useCallback(() => {
      if (intervalRef.current === null) {
        return;
      }
      setIsStop(true);
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }, []);
    return { start, stop };
  }

  const { start, stop } = useCounter(1000);

  // 끝났을 때 타이머 초기화
  const end = () => {
    setCount(0);
    stop();
  }

  const timer = () => {
    const checkMinutes = Math.floor(count / 60);
    const minutes = checkMinutes % 60;
    const seconds = count % 60;
    setCurrentSeconds(seconds)
    setCurrentMinutes(minutes)
  }

  useEffect(timer, [count]);

  const changeTime = (n) => {
    if(isStart) return; // 시작되었으면 작동하지 않는다

    if (n === 60) {
      setCount(count + 60);
    } else if (n === -60) {
      setCount(count - 60);
    } else {
      setCount(count + n);
    }
  }

  // 처음 랜더링 될 때 설정
  useEffect(() => {
    const gameLogGetDto = gameLogGet(1);
    setPlayerOneScore(gameLogGetDto.score1);
    setPlayerTwoScore(gameLogGetDto.score2);
    setPlayerOneAdvantage(gameLogGetDto.advantage1);
    setPlayerTwoAdvantage(gameLogGetDto.advantage2);
    setPlayerOnePenalty(gameLogGetDto.penalty1);
    setPlayerTwoPenalty(gameLogGetDto.penalty2);
  }, [])
  
  const plusOnePlayer = (n) => {
    if (n === 'A') {
      setPlayerOneAdvantage(playerOneAdvantage + 1);
    } else if (n === 'P') {
      setPlayerOnePenalty(playerOnePenalty + 1);
    } else {
      setPlayerOneScore(playerOneScore + n);
    }
  }

  const minusOnePlayer = (n) => {
    if (n === 'A') {
      setPlayerOneAdvantage(playerOneAdvantage - 1);
    } else if (n === 'P') {
      setPlayerOnePenalty(playerOnePenalty - 1);
    } else {
      setPlayerOneScore(playerOneScore - n);
    }
  }

  const plusTwoPlayer = (n) => {
    if (n === 'A') {
      setPlayerTwoAdvantage(playerTwoAdvantage + 1);
    } else if (n === 'P') {
      setPlayerTwoPenalty(playerTwoPenalty + 1);
    } else {
      setPlayerTwoScore(playerTwoScore + n);
    }
  }

  const minusTwoPlayer = (n) => {
    if (n === 'A') {
      setPlayerTwoAdvantage(playerTwoAdvantage - 1);
    } else if (n === 'P') {
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
                  <td onClick={() => { plusOnePlayer(1) }}><span>+1</span></td>
                  <td onClick={() => { plusOnePlayer(2) }}><span>+2</span></td>
                  <td onClick={() => { plusOnePlayer(3) }}><span>+3</span></td>
                  <td onClick={() => { plusOnePlayer('A') }}><span>+A</span></td>
                  <td onClick={() => { plusOnePlayer('P') }}><span>+P</span></td>
                </tr>
                <tr Style="color: #ba353d; width: 3vw;">
                  <td onClick={() => { minusOnePlayer(1) }}><span>-1</span></td>
                  <td onClick={() => { minusOnePlayer(2) }}><span>-2</span></td>
                  <td onClick={() => { minusOnePlayer(3) }}><span>-3</span></td>
                  <td onClick={() => { minusOnePlayer('A') }}><span>-A</span></td>
                  <td onClick={() => { minusOnePlayer('P') }}><span>-P</span></td>
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
                  <td onClick={() => { plusTwoPlayer(1) }}><span>+1</span></td>
                  <td onClick={() => { plusTwoPlayer(2) }}><span>+2</span></td>
                  <td onClick={() => { plusTwoPlayer(3) }}><span>+3</span></td>
                  <td onClick={() => { plusTwoPlayer('A') }}><span>+A</span></td>
                  <td onClick={() => { plusTwoPlayer('P') }}><span>+P</span></td>
                </tr>
                <tr Style="color: #ba353d; width: 3vw;">
                  <td onClick={() => { minusTwoPlayer(1) }}><span>-1</span></td>
                  <td onClick={() => { minusTwoPlayer(2) }}><span>-2</span></td>
                  <td onClick={() => { minusTwoPlayer(3) }}><span>-3</span></td>
                  <td onClick={() => { minusTwoPlayer('A') }}><span>-A</span></td>
                  <td onClick={() => { minusTwoPlayer('P') }}><span>-P</span></td>
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
                      <span Style="color: #ED8B08; margin-right: 0.5vw">16강</span> match 15 ( Men / Adult / Black / -88kg )
                    </span>
                  </td>
                </tr>
                <tr Style="color: white; width: 3vw;">
                  <td><span Style="color: #3b973b" onClick={() => changeTime(1)}>+1 SEC</span></td>
                  <td><span Style="color: #3b973b" onClick={() => changeTime(10)}>+10 SEC</span></td>
                  <td><span Style="color: #3b973b" onClick={() => changeTime(60)}>+60 SEC</span></td>
                  {isStart === false
                    ? <td colspan='2'><span>SWITCH SIDES</span></td>
                    : <td><span>dp</span></td>}
                  {isStart === false
                    ? ''
                    : <td><span>sub</span></td>}
                </tr>
                <tr Style="color: white; width: 3vw;">
                  <td><span Style="color: #ba353d" onClick={() => changeTime(-1)}>-1 SEC</span></td>
                  <td><span Style="color: #ba353d" onClick={() => changeTime(-10)}>-10 SEC</span></td>
                  <td><span Style="color: #ba353d" onClick={() => changeTime(-60)}>-60 SEC</span></td>
                  {isStart === false
                    ? <td colspan='2' onClick={() => { setIsStart(true); start(); }}><span>START GAME</span></td>
                    : <td colspan='2' onClick={() => { setIsStart(false); end(); }}><span>END GAME</span></td>}
                </tr>
              </table>
            </span>
            {isStop === false 
              ? <span onClick={stop} className="gameInfo-time"> {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}:{currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds} </span>
              : <span onClick={start} className="gameInfo-time"> {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}:{currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds} </span>
            }
          </span>
        </Row>
      </div>
    </>
  );
}

export default Scoreboard;
