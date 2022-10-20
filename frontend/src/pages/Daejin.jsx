import { React, useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { SingleEliminationBracket, Match } from '@g-loot/react-tournament-brackets';
import axios from "axios";


export default function Daejin(props){
    //대진표입니다 개별 경기의 왼쪽 위 값을 누르면 해당 경기의 상세페이지로 이동합니다
    //이미 만들어진 대진표를 import 해와서 개별 태그에 접근할 수 없어서 class 이름을 통해서 구분하도록 해두었습니다.
    //사람 이름을 누르면 console.log로 출력되도록 해놓았습니다
    //이후에 선수 스왑같은 기능을 구현하려면 사용해 주세요


    const params = useParams()
    const navigate = useNavigate()

    //matches에는 해당 Division에 속한 경기들이 객체의 형태로 배열에 담겨서 들어옵니다.
    const [matches,setMatches] = useState('')
    const URL = `http://localhost:8080/api/game/finish/${params.id}/`

    useEffect(()=>{
        axios.get(URL)
        .then(res=>{
            setMatches(res.data)
            console.log(res.data)
        })
    },[])

    function A(e){
        if (e.target.className==='sc-gswNZR bsxbPA'){
            navigate(`../match/${e.target.innerText}`)
            console.log(e.target.innerText)
        }
        else if (e.target.className==='sc-eDvSVe'){
            console.log(e.target.innerText)
        }
    }
    

    return(
        <div >
            <div>{params.id}경기 {params.num}부문 대진표</div>
            {matches ? 
            <div onClick = {A}>
                <SingleEliminationBracket
                    matches={matches}
                    matchComponent={Match}
                    />
            </div> 
            : ''}
        </div>
    )
}

