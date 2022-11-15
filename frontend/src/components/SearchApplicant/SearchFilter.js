// // 일단 컨택트 페이지에 임시로 관리자 카테고리를 만듬
// import React, { useState } from "react";
// import { Container} from "react-bootstrap";
// import "./style.css";
// import styled from "styled-components";
// import SearchIcon from '@mui/icons-material/Search'




// // 11월 5일 이후 디비전별로 검색 기능 구현 시 필요한 드롭박스
// // 드롭박스는 style.css에서 디자인하기 힘들어 styled-component사용
// // export const Select = styled.select`
// //   width:200px;
// //   height: 63px;
// //   font-size: 1.77rem;
// //   line-height: 1.5;
// //   background: gray;
// //   color: white;
// //   border: 2px solid;
// //   align-items: center;
// // `;
// // const SelectBox = () => {
// // 	return (
// // 		<Select>
// // 			<option key="name" value="name">이름으로 검색</option>
// // 			<option key="mail" value="mail">메일로 검색</option>
// // 			<option key="phonenumber" value="phonenumber">연락처로 검색</option>
// //       <option key="phonenumber" value="belt">벨트로 검색</option>
// //       <option key="phonenumber" value="bodyscale">체급으로 검색</option>
// //       <option key="phonenumber" value="type">종목으로 검색</option>
// // 		</Select>
// // 	);
// // };

// // 검색한 선수의 데이터를 서버에서 받아와서 여기 넣어서...
// let SearchResult = [
//     {
//         name: "이태엽",
//         mail: "이태엽",
//         belt: "이태엽",
//         bodyscale: "이태엽",
//         kind: "이태엽",
//         phonenumber: "000-0000-0000",
//         pass: "비통과",
//     },
// ];

// // 리액트 채팅방 사람들이 styled-components를 요즘엔 더 많이 쓴다고 해서... style.css에 들어간 것 외에 일부는 styled-components로
// const StyledButton = styled.button`
//   color: ${(props) => props.color || "white"};
//   background: ${(props) => props.background || "orange"};
//   height: 66px;
//   width: 300px;
//   font-size: 2rem;
//   border-top-right-radius: 30px;
//   border-bottom-left-radius: 30px;
//   cursor: pointer;
//   font-weight: bold;
//   margin-left: 50px;
// `;

// const SearchBox = styled.div`
//   width: 96%;
//   position: relative;
//   padding: 2%;
// `

// const Label = styled.label`
//   position: relative;

//   input {
//     border: none;
//     padding: 0 15px;
//     height: 55px;
//   }
//   button {
//     position: absolute;
//     top: 35px;
//   }
// `;

// const SearchIconBox = styled.div`
//   position: absolute;
//   top: 1.7rem;
//   right: 3.0rem;
//   height: calc(100% - 2rem);
//   aspect-ratio: 1/1;
//   cursor: pointer;
// `

// const SearchIcon1 = styled(SearchIcon)`
//   width: 75% !important;
//   height: 75% !important;
//   padding: 5%;
//   color: #ffffff;
// `

// function SearchFilter({
//     changeKeyword,
//     searchClick,
//     setSearch,
//     search,
// }) {
//     // ---------------
//     const t = useStore();
//     return (
//         <Container className="fag-contact-details-area">
//             <div className="button-area">
//                 <h1>Search</h1>
//                 <SearchBox className="container-style">
//                     <input className="input-style" placeholder='검색어를 입력하세요'
//                         value={search}
//                         onChange={(e) => {
//                             setSearch(e.target.value);
//                         }}
//                         onKeyDown={(e) => {
//                             if (e.code === "Enter") {searchClick};
//                         }}
//                     />
//                     <SearchIconBox>
//                         <SearchIcon1 onClick={searchClick} />
//                     </SearchIconBox>
//                 </SearchBox>
//             </div>
           
//         </Container>
//     );
// }

// export default SearchFilter;

