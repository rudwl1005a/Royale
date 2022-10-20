import {React,useState} from "react";

export default function Login(){
    //하나의 대회에 대한 정보를 보여줍니다
    //그 대회 내의 개별 Division을 보여주고 클릭 할 시 해당 Division 의 대진표나 신청화면으로 이동하게 합니다.


    //로그인 창 만드는 예시
    const [id,setId] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [passcon,setPasscon] = useState('')

    function push(){
        //비밀번호 일치검사
        //정규식이용해서 다른 항목도 유효성 검사 하면 됩니다.
        if (pass===passcon){
            //axios통해서 전달
            console.log('id',id)
            console.log('email',email)
            console.log('pass',pass)
            //필요하다면 로그인 성공후 navigate를 사용해서 바로 원하는 페이지로 이동시킬수 있습니다
        }
        else {
            alert('비밀번호와 비밀번호 확인이 일치하지 않습니다')
        }
    }


    return(
        <div>
            <div>로그인</div>
            <div>
                <label>아이디</label>
                <input onChange={(e)=>{setId(e.target.value)}}></input>
            </div>
            <div>
                <label>이메일</label>
                <input onChange={(e)=>{setEmail(e.target.value)}}></input>
            </div>
            <div>
                <label>비밀번호</label>
                <input type = 'password' onChange={(e)=>{setPass(e.target.value)}}></input>
            </div>
            <div>
                <label>비밀번호확인</label>
                <input type = 'password' onChange={(e)=>{setPasscon(e.target.value)}}></input>
            </div>
            <button onClick={push}>확인</button>
        </div>
    )
}

