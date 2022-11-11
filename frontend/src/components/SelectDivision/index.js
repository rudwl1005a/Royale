import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import styled from "styled-components";

function SelectDivision(props) {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [belt, setBelt] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");

  //Select는 styledcomponents로 정의, 선택한 값이 바뀔 때마다 상단의 기본값들을 변경하라

  // 성별 선택
  const GenderSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setGender(e.target.value);
        }}
        value={gender}
      >
        <option value="" hidden>
          Gender
        </option>
        <option value="male">남성부 (Male)</option>
        <option value="female">여성부 (Female)</option>
      </Select>
    );
  };

  // 연령 선택
  const AgeSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setAge(e.target.value);
        }}
        value={age}
      >
        <option value="" hidden>
          Age
        </option>
        <option value="초등부">초등부 (Elementary)</option>
        <option value="중등부">중등부 (Middle School)</option>
        <option value="고등부">고등부 (High School)</option>
        <option value="adult">Adult</option>
        <option value="master1">Master 1 (만 30세부터)</option>
        <option value="master2">Master 2 (만 35세부터)</option>
        <option value="master3">Master 3 (만 40세부터)</option>
      </Select>
    );
  };

  // 벨트 선택
  const BeltSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setBelt(e.target.value);
        }}
        value={belt}
      >
        <option value="" hidden>
          Belt
        </option>
        <option value="white beginner">White 비기너</option>
        <option value="white">White</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
        <option value="brown">Brown</option>
        <option value="black">Black</option>
      </Select>
    );
  };

  // 종목 선택
  const TypeSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setType(e.target.value);
        }}
        value={type}
      >
        <option value="" hidden>
          Type
        </option>
        <option value="adlut">기 (gi)</option>
        <option value="master1">기 앱솔 (gi-absol)</option>
        <option value="master2">노기 (nogi)</option>
        <option value="master3">노기 앱솔 (nogi-absol)</option>
      </Select>
    );
  };
  const BeginnerTypeSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setType(e.target.value);
        }}
        value={type}
      >
        <option value="">선택하여 주세요</option>
        <option value="adlut">기 (gi)</option>
        <option value="master2">노기 (nogi)</option>
      </Select>
    );
  };

  const BeginnerAgeSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setAge(e.target.value);
        }}
        value={age}
      >
        <option value="">선택하여 주세요</option>
        <option value="adult">Adult</option>
        <option value="고등부">고등부 (High School)</option>
      </Select>
    );
  };

  const AdultMasterSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setWeight(e.target.value);
        }}
        value={weight}
      >
        <option value="">선택하여 주세요</option>
        <option value="-57.5kg">-57.5kg</option>
        <option value="-64kg">-64kg</option>
        <option value="-70kg">-70kg</option>
        <option value="-76kg">-76kg</option>
        <option value="-82.3kg">-82.3kg</option>
        <option value="-88.3kg">-88.3kg</option>
        <option value="-94.3kg">-94.3kg</option>
        <option value="+94.3kg">+94.3kg</option>
      </Select>
    );
  };

  const FemaleMiddleHighSelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setWeight(e.target.value);
        }}
        value={weight}
      >
        <option value="">선택하여 주세요</option>
        <option value="-47.5kg">-47.5kg</option>
        <option value="-53.5kg">-53.5kg</option>
        <option value="-58.5kg">-58.5kg</option>
        <option value="-64.0kg">-64.0kg</option>
        <option value="-69.0kg">-69.0kg</option>
        <option value="-74.0kg">-74.0kg</option>
        <option value="-79.3kg">-79.3kg</option>
        <option value="+79.3kg">+79.3kg</option>
      </Select>
    );
  };
  const ElemantarySelectBox = () => {
    return (
      <Select
        onChange={(e) => {
          setWeight(e.target.value);
        }}
        value={weight}
      >
        <option value="">선택하여 주세요</option>

        <option value="-30kg">-30kg</option>
        <option value="-35kg">-35kg</option>
        <option value="-40kg">-40kg</option>
        <option value="-45kg">-45kg</option>
        <option value="-50kg">-50kg</option>
        <option value="-55kg">-55kg</option>
        <option value="+55kg">+55kg</option>
      </Select>
    );
  };
  // ----------------------------------------------------------------

  // 버튼을 누르면 이하를 실행
  // const message = function () {
  //   // 이 요소들에 전부 값이 있다면
  //   if (
  //     payee &&
  //     association &&
  //     gymName &&
  //     belt &&
  //     gender &&
  //     age &&
  //     type &&
  //     weight
  //   ) {
  //     // 상단의 요소에 전부 값이 있고 동의체크를 전부 눌렀다면
  //     if (agreeOne && agreeTwo && agreeThree) {
  //       // pass
  //       {
  //         alert("pass");
  //       }
  //     } else {
  //       alert("전부 동의해주세요");
  //     }
  //   } else {
  //     alert("입력하지 않은 부분이 있습니다.");
  //   }
  // };
  // // ---------------

  return (
    <>
      <section className="checkout-page-area">
        <br />
        <br />
        <Container>
          <Row>
            <Col lg={2}>
              <GenderSelectBox />
            </Col>
            <Col lg={2}>
              <AgeSelectBox />
            </Col>
            <Col lg={2}>
              <BeltSelectBox />
            </Col>
            <Col lg={2}>
              <TypeSelectBox />
            </Col>
            <Col lg={2}>
              <TypeSelectBox />
            </Col>
            <Col lg={2}>
              <button> Search </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SelectDivision;

export const Label = styled.label`
  font-size: 10px;
`;

const StyledButton = styled.button`
  color: ${(props) => props.color || "white"};
  background: ${(props) => props.background || "orange"};
  font-size: 2rem;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  cursor: pointer;
  font-weight: bold;
`;
export const Select = styled.select`
  font-size: 1.5rem;
  line-height: 1.5;
  background: black;
  color: white;
  border: 2px solid;

  option {
    color: white;
    background: black;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
const DropDownBox = styled.ul`
  font-size: 1.5rem;
  color: #ffffff;
  background-color: #251414;
  padding: 16 16px;
`;

const DropDownItem = styled.li`
  padding: 16 16px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
`;
