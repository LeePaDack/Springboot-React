import React, {useState} from "react";
import '../App.css';

/*
F12 를 누르고 console(콘솔) 창에서
error 가 없는지 확인
만약 error 가 뜬다면
백엔드 서버와 연결이 안됐을 가능성이 높음

*/

const Signup = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');
    const [result, setResult] = useState('');

    // 아이디중복검사
    const [idValidation, setIdValidation] = useState(false);
    // false = 사용 불가  true = 사용 가능

    // 아이디 중복검사 이벤트핸들러
    const 아이디중복검사 = (eventId) => {
        // eventId : 현재 입력하는 이벤트가 발생한 Id
        setId(eventId);

        // 4 글자 미만이면 중복 검사 X
        // 입력받은 아이디 공백제거 하고
        // 공백 제거한 총 길이가 4 보다 적다면 
        // trim() 양쪽 옆에 있는 공백 제거 length = 길이
        if(eventId.trim().length < 4) {  
            setIdValidation(false);
            return;
        }

        // DB 에 중복되는 아이디가 있는지  비동기로 아이디 중복검사 수행
        // axios 나 fetch 를 사용할 수 있음
        fetch("/idCheck?id=" + eventId) // SpringBoot Controller 와 연결할 Mapping url
        .then(response => response.text())
        .then(result => {
            // 중복이 아닐 때 true, 중복이면 false
            // Number(result) === 0 나중에 Spring Boot 에서 
            // 아이디가 중복되지 않았으면 0 을 전달,   아이디가 중복이면 0 이외의 값을 전달
            // 결과 전달을 0 사용하지 않고 "중복아님" 글자 전달 => if(result) === "중복아님"  - 한글은 깨질 위험이 있으므로 0 or 1 등 숫자로 사용
            if(Number(result) === 0) {
                setIdValidation(true);
            } else {
                setIdValidation(false);
            }
        })
    }
    
    // 회원가입버튼
    const 회원가입버튼 = () => {
        // 아이디 유효하지 않으면 가입 X
        if(!idValidation){
            alert('아이디가 유효하지 않습니다');
            return;
        }
        // 비밀번호, 비밀번호 확인이 일치하지 않으면 가입 X
        if(pw !== pwCheck){
            alert('비밀번호가 같지 않습니다.');
            return;
        }




        // 회원가입 비동기 요청
        const input값들 = {};  // 처음엔 들어온 값이 없으니 빈공간으로 설정
        input값들.id = id; // id 값이 들어오면 input 값들에 id 값을 작성해달라 설정
        input값들.pw = pw; // pw 값이 들어오면 input 값들에 pw 값을 작성해달라 설정
        input값들.name = name;
        // 만약 input 에 id 값으로 khT 를 작성하고, pw 값으로 khT1234 를 작성하면
        /* 
        const input값들 = {            };  에서 아래와 같이 변경됨
              input값들 = {khT, khT1234}
        */

        fetch("/signup", {
            // Spring Boot Container 에 @PostMapping("/signUp") 에 전달하겠다는 표시
            method : "Post", 
            // headers : 메일로 치면 메일 주소, 메일 제목 처럼 초기에 어떤 것을 보내는지 값 설정
            headers : {"Content-Type" : "application/json"}, 
            // <form> 태그에는 "Content-Tpye" : "application/json" 기본으로 생략돼서 작성
            // Content-Type 은 왜 작성해야 하는가?
            // 데이터를 전달할 때 이미지파일, 동영상 파일인지, 다중이미지파일인지 글자만 있는지 정보 전달
            // application/json : application = 코딩하는 폴더 자체를 의미,  폴더 1 개 = 어플리케이션 1 개
            //                           json = 사용자나 개발자가 작성한 여러값을 key-value 형태로 대아토룰 1 개 이상 주고 받을 수 있는 형태
            
            // body : 내용 본문 작성
            body : JSON.stringify(input값들) // 사용자가 작성한 모든 값을 보내기

        })
        // 결과 응답 받아서 저장해놓고
        .then(response => response.text()) 
        .then(result => {
            if(Number(result) > 0) { // 결과가 0 보다 크다면   결과가 == 1 이면 회원가입 완료 처리
                setResult('회원가입 성공');
                // input 값들 모두 초기화
                setId('');
                setPw('');
                setPwCheck('');
                setName('');
                // setResult('');
            } else {
                setResult('회원가입 실패');
            }
        })
    }

    return (
        <div className="signup-container">
            {/* 
                label 태그 안에 for 값을 작성하고 싶지 않다면 
                <label for="input에 작성된 id 값과 일치하는 값을 작성"> </label>
                <label><input/></label> 
                작성해주면 for 를 작성한 것과 동일하게 설정
                
                <label for="abc"> </label> <input id = "abc"/>
                == 똑같음 == 
                <label><input/></label/>
            */}
            <label>
                ID : 
                <input type="text" 
                    onChange={e => 아이디중복검사(e.target.value)}
                    value={id}
                    className={idValidation ? '' : 'id-err'}
                />
            </label>

            <label>
                PW :
                <input type="password"
                    onChange={e => {setPw(e.target.value)}}
                    value={pw}
                />
            </label>

            <label>
                PW CHECK : 
                <input type="password"
                    onChange={e => {setPwCheck(e.target.value)}}
                    value={pwCheck}
                />
            </label>

            <label>
                NAME : 
                <input type="text"
                    onChange={e => {setName(e.target.value)}}
                    value={name}
                />
            </label>

            <button onClick={회원가입버튼}>가입하기</button>
            <hr></hr>

            {/* 회원가입이 무사히 완료됐는지 결과 표시 */}
            <h3>{result}</h3>
        </div>
    )
}

export default Signup;