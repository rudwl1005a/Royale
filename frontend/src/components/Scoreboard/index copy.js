import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useBeforeunload } from "react-beforeunload";
import io from 'socket.io-client'; // Client Socket
import "./style.css";
// import { gameLogInit, gameLogUpdate, gameLogGet } from "../../api/api";

import { gameGet, gameLogGet, gameLogUpdate } from "../../api/api";
import { Routes, Route, useParams } from 'react-router-dom';

function Scoreboard(props) {

  let { id } = useParams();

  const onClick = (e) => {
    e.preventDefault();
  };

  // 선수 변수
  const [playerInfo, setPlayerInfo] = useState({
    playerOneSeq: 0,
    playerOneName: "",
    playerOneTeam: "",
    playerTwoSeq: 0,
    playerTwoName: "",
    playerTwoTeam: "",
  });

  // const [playerOneSeq, setPlayerOneSeq] = useState(0);
  // const [playerTwoSeq, setPlayerTwoSeq] = useState(0);
  // const [playerOneName, setPlayerOneName] = useState("")
  // const [playerOneTeam, setPlayerOneTeam] = useState("")
  // const [playerTwoName, setPlayerTwoName] = useState("")
  // const [playerTwoTeam, setPlayerTwoTeam] = useState("")

  // 경기 변수
  // const [matchInfo, setMatchInfo] = useState({
  //   matchNum: '',
  //   divisionAge : '',
  //   divisionBelt: '',
  //   divisionGender: '',
  // })
  const [matchInfo, setMatchInfo] = useState(null);
  const [matchRound, setMatchRound] = useState(0);
  const [matchNum, setMatchNum] = useState(0);

  // 디비전 변수
  const [divisionAge, setDivisionAge] = useState('');
  const [divisionBelt, setdivisionBelt] = useState('');
  const [divisionGender, setdivisionGender] = useState('');
  const [divisionType, setDivisionType] = useState('');
  const [divisionWeight, setDivisionWeight] = useState('');
  
  // 스코어 변수
  const [isScoreChange, setScoreChange] = useState(false);
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
      // 게임 로그 업데이트
      const data = await gameLogGet(id);
      console.warn(data);

      setPlayerOneScore(data.score1);
      setPlayerTwoScore(data.score2);
      setPlayerOneAdvantage(data.advantage1);
      setPlayerTwoAdvantage(data.advantage2);
      setPlayerOnePenalty(data.penalty1);
      setPlayerTwoPenalty(data.penalty2);

      // 게임 정보 업데이트
      const gameData = await gameGet(id);
      console.warn(gameData)

      setPlayerInfo({
        playerOneName: gameData.player1Name,
        playerTwoName: gameData.player2Name,
        playerOneTeam: gameData.player1Team,
        playerTwoTeam: gameData.player2Team
      })

      setMatchInfo(gameData);

      // setPlayerOneName(gameData.player1Name);
      // setPlayerTwoName(gameData.player2Name);
      // setPlayerOneTeam(gameData.player1Team);
      // setPlayerTwoTeam(gameData.player2Team);

      setMatchNum(gameData.game.matGameNum);
      setDivisionAge(gameData.game.division.divisionAge);
      setdivisionBelt(gameData.game.division.divisionBelt);
      setdivisionGender(gameData.game.division.divisionGender);
      setDivisionType(gameData.game.division.divisionType);
      setDivisionWeight(gameData.game.division.divisionWeight);
    }

    getData();

  }, [])

  useEffect(() => {
    const gameData = {
      gameSeq: id,
      score1: playerOneScore,
      score2: playerTwoScore,
      advantage1: playerOneAdvantage,
      advantage2: playerTwoAdvantage,
      penalty1: playerOnePenalty,
      penalty2: playerTwoPenalty,
      dq: "",
      sub: ""
    }

    console.warn(gameData);

    gameLogUpdate(gameData);
  // }, [playerOneScore, playerTwoScore, playerOneAdvantage, playerTwoAdvantage, playerOnePenalty, playerTwoPenalty]);
  }, [isScoreChange]);

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
        setCount(c => c - 1 > 0 ? c - 1 : 0);
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
  
  const plusOnePlayer = (n) => {
    if (n === 'A') {
      setPlayerOneAdvantage(playerOneAdvantage + 1);
    } else if (n === 'P') {
      setPlayerOnePenalty(playerOnePenalty + 1);
    } else {
      setPlayerOneScore(playerOneScore + n);
    }
    setScoreChange(!isScoreChange);
  }

  const minusOnePlayer = (n) => {
    if (n === 'A') {
      setPlayerOneAdvantage(playerOneAdvantage - 1);
    } else if (n === 'P') {
      setPlayerOnePenalty(playerOnePenalty - 1);
    } else {
      setPlayerOneScore(playerOneScore - n);
    }
    setScoreChange(!isScoreChange);
  }

  const plusTwoPlayer = (n) => {
    if (n === 'A') {
      setPlayerTwoAdvantage(playerTwoAdvantage + 1);
    } else if (n === 'P') {
      setPlayerTwoPenalty(playerTwoPenalty + 1);
    } else {
      setPlayerTwoScore(playerTwoScore + n);
    }
    setScoreChange(!isScoreChange);
  }

  const minusTwoPlayer = (n) => {
    if (n === 'A') {
      setPlayerTwoAdvantage(playerTwoAdvantage - 1);
    } else if (n === 'P') {
      setPlayerTwoPenalty(playerTwoPenalty - 1);
    } else {
      setPlayerTwoScore(playerTwoScore - n);
    }
    setScoreChange(!isScoreChange);
  }


  // 새로고침, 뒤로가기, 종료 방지
  // useBeforeunload((event) => event.preventDefault());

  return (
    <>
      {matchInfo ? 
      <div className="scoreboard-block" Style="padding-left: 5vmin; background-color: black">
        <Row className="player">
          <Col xs={7} sm={7}>
            <Row className="playerInfo">
              <span className={`playerInfo-name ${matchInfo.playerOneName.length > 8 ? "Small" : ""}`}>{matchInfo.playerOneName}</span>
              <span className="playerInfo-team">{matchInfo.playerOneTeam}</span>
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
              <span className={`playerInfo-name ${playerInfo.playerTwoName.length > 8 ? "Small" : ""}`}>{playerInfo.playerTwoName}</span>
              <span className="playerInfo-team">{playerInfo.playerTwoTeam}</span>
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
                                  font-size: 3.5vmin;
                                  color: gray;
                                  cursor: default">
                      <span Style="color: #ED8B08; margin-right: 0.5vw">match{matchNum} </span>
                      - {divisionGender} / {divisionAge} / {divisionBelt} / {divisionWeight} / {divisionType}
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
      : null}
    </>
  );
}

export default Scoreboard;
