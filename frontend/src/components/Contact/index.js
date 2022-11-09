// 일단 컨택트 페이지에 임시로 관리자 카테고리를 만듬
import React, { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import "./style.css";
import styled from "styled-components";


// 11월 5일 이후 디비전별로 검색 기능 구현 시 필요한 드롭박스
// 드롭박스는 style.css에서 디자인하기 힘들어 styled-component사용
// export const Select = styled.select`
//   width:200px;
//   height: 63px;
//   font-size: 1.77rem;
//   line-height: 1.5;
//   background: gray;
//   color: white;
//   border: 2px solid;
//   align-items: center;
// `;
// const SelectBox = () => {
// 	return (
// 		<Select>
// 			<option key="name" value="name">이름으로 검색</option>
// 			<option key="mail" value="mail">메일로 검색</option>
// 			<option key="phonenumber" value="phonenumber">연락처로 검색</option>
//       <option key="phonenumber" value="belt">벨트로 검색</option>
//       <option key="phonenumber" value="bodyscale">체급으로 검색</option>
//       <option key="phonenumber" value="type">종목으로 검색</option>
// 		</Select>
// 	);
// };

// 검색한 선수의 데이터를 서버에서 받아와서 여기 넣어서...
let SearchResult = [
  {
    name: "이태엽",
    mail: "이태엽",
    belt: "이태엽",
    bodyscale: "이태엽",
    kind: "이태엽",
    phonenumber: "000-0000-0000",
    pass: "비통과",
  },
  {
    name: "이태엽",
    mail: "이태엽동명이인",
    belt: "이태엽동명이인",
    bodyscale: "이태엽동명이인",
    kind: "이태엽동명이인",
    phonenumber: "000-0000-0000",
    pass: "통과",
  },
  {
    name: "조찬홍",
    mail: "조찬홍",
    belt: "조찬홍",
    bodyscale: "조찬홍",
    kind: "조찬홍",
    phonenumber: "000-0000-0000",
    pass: "통과",
  },
  {
    name: "민경대",
    mail: "조찬홍",
    belt: "조찬홍",
    bodyscale: "조찬홍",
    kind: "조찬홍",
    phonenumber: "000-0000-0000",
    pass: "통과",
  },
  {
    name: "안세영",
    mail: "조찬홍",
    belt: "조찬홍",
    bodyscale: "조찬홍",
    kind: "조찬홍",
    phonenumber: "000-0000-0000",
    pass: "통과",
  },
  {
    name: "Vladimir Putin",
    mail: "조찬홍",
    belt: "조찬홍",
    bodyscale: "조찬홍",
    kind: "조찬홍",
    phonenumber: "000-0000-0000",
    pass: "통과",
  },
  {
    name: "安倍晋三",
    mail: "조찬홍",
    belt: "조찬홍",
    bodyscale: "조찬홍",
    kind: "조찬홍",
    phonenumber: "000-0000-0000",
    pass: "통과",
  },
];

// 리액트 채팅방 사람들이 styled-components를 요즘엔 더 많이 쓴다고 해서... style.css에 들어간 것 외에 일부는 styled-components로
const StyledButton = styled.button`
  color: ${(props) => props.color || "white"};
  background: ${(props) => props.background || "orange"};
  height: 66px;
  width: 300px;
  font-size: 2rem;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 50px;
`;
const Label = styled.label`
  position: relative;

  input {
    border: none;
    padding: 0 15px;
    height: 55px;
  }
  button {
    position: absolute;
    top: 35px;
  }
`;

function Contact(props) {
  // 대회명, 대회일, 신청마감일, 대회장소, 포스터, 대회 간략 설명 기본값
  const [title, setTitle] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [deadlineDate, setDeadlineDate] = useState(null);
  const [place, setPlace] = useState(null);
  // ---------------

  // 검색창 input 기본값
  const [searchInput, setSearchInput] = useState("");
  // ---------------

  // 검색창 onChange하면 실행되는 함수. 
  const filtered = SearchResult.filter((itemList) => {
    return itemList.name.toUpperCase().includes(searchInput.toUpperCase());
  });
  // ---------------

  //렌더링용 함수
  const [yesOrNo, setYesOrNo] = useState(false);
  const Rerendering = () => setYesOrNo(!yesOrNo);
  // ---------------

  // Register 탭의 SUBMIT NOW 버튼을 누르면 이하를 실행
  const message = function () {
    // 이 요소들에 전부 값이 있다면
    if (title && startDate && deadlineDate && place) {
        alert("pass");
    } else {
      alert("대회명, 대회일, 신청마감일, 대회장소는 필수 입력사항입니다.");
    }
  };
  // ---------------

  return (
    
    <>
      {/* Contact Area Start */}
      {/* section과 container와 div 중에 무엇을 쓰면 더 구조적으로 합리적인지... */}
      <section className="fag-contact-details-area">
        <div className="button-area">
          <Tabs defaultActiveKey="registration" className="product-tab">
            <Tab eventKey="registration" title={<h1>REGISTRATION</h1>}>
              <Container className="container-style-last">
                <StyledButton onClick={message}>SUBMIT NOW</StyledButton>
              </Container>
            </Tab>
            <Tab eventKey="search" title={<h1>SEARCH</h1>}>
              <br />
              {/* section요소는 HTML문서의 독립적인 구획을 나타내며, 보통 제목을 포함하지만 항상 그런 것은 아니다 */}
              <Container className="container-style">
                {/* Container도 react 패키지의 Component를 물려받는 컴포넌트의 일종인데 Container는 앱의 상태를 담당한다. */}
                <input
                  placeholder='검색하고자 하는 참가자의 이름을 입력하시오'
                  className="input-style"
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                ></input>
                {/* 추후 디비전별 검색 기능 구현...? */}
                {/* <SelectBox></SelectBox> */}
              </Container>
              <br />
              <section>
                <table className="table-style">
                  <tr className="th-style">
                    <th className="th-subject-style">이름 (Name)</th>
                    <th className="th-subject-style">메일 (e-Mail)</th>
                    <th className="th-subject-style">벨트 (Belt)</th>
                    <th className="th-subject-style">체급 (BodyScale)</th>
                    <th className="th-subject-style">종목 (Type)</th>
                    <th className="th-subject-style">연락처 (Phone Number)</th>
                    <th className="th-subject-style">계체 여부 (Body Measurements)</th>
                  </tr>
                  {/* searchInput이 True일때 이하를 보여줘 */}
                  {searchInput && filtered.map((key) => (
                    <tr className="th-style">
                      <th className="th-style">{key.name}</th>
                      <th className="th-style">{key.mail}</th>
                      <th className="th-style">{key.belt}</th>
                      <th className="th-style">{key.bodyscale}</th>
                      <th className="th-style">{key.kind}</th>
                      <th className="th-style">{key.phonenumber}</th>
                      {/* 검색 결과에서 계체 통과 여부 상태를 알 수 있음 */}
                      <th className="th-style">
                        <div>
                          {key.pass === "통과" ? (
                            // 버튼을 누르면 각 선수의 key.pass 값 즉 계체 통과 여부가 바뀌고, 위에 정의해 놓은 강제렌더링용 함수인 Rerendering을 사용해 재렌더링
                            <p>
                              <button
                                className="button-style-second"
                                onClick={() => (
                                  (key.pass = "비통과"),
                                  Rerendering()
                                )}
                              >
                                계체 통과
                              </button>
                            </p>
                          ) : (
                            <p>
                              <button
                                className="button-style-third"
                                onClick={() => (
                                  (key.pass = "통과"),
                                  Rerendering()
                                )}
                              >
                                계체 비통과
                              </button>
                            </p>
                          )}
                        </div>
                      </th>
                    </tr>
                  ))}
                </table>
              </section>
            </Tab>
            <Tab
              eventKey="edit"
              title={<h1>EDIT</h1>}
            ></Tab>
            <Tab
              eventKey="administration"
              title={<h1>ADMINISTRATION</h1>}
            ></Tab>

          </Tabs>
        </div>
      </section>
    </>
  );
}

export default Contact;

