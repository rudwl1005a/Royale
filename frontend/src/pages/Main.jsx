import { useParams } from "react-router-dom";
import React from "react";
//이런방식으로 컴포넌트 임포트해옵니다
import Login from "../components/login";

export default function Main(props){
    

    return(
        <div>
            <div>메인페이지</div>
            <div>로그인</div>
            <Login/>
        </div>
    )
}

