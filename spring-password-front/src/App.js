import './App.css';
import {useState} from 'react'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    // FormData 는 기본으로 multipart 이미지를 사용한다는 전제조건
    const formData = new FormData;

    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);

    const user = {
      username:username,
      email:email,
      password:password
    };

    fetch('http://localhost:9011/api/mybatis/register',{
      method:'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(user)
      // body: formData -> multipart 이미지를 보낸다
    })

    /*  formData 대신 쓸수 있는 것
    body:{
      'username': username,
      'email': email,
      'password': password
    }
    */

    .then(response => response.text())
    
    // 데이터가 무사히 저장되었다고 사용자한테 알려줌
    .then(data => {
      alert("회원가입이 완료되었습니다.");
    })
    // 데이터 저장 실패되었다고 사용자한테 알려줌
    .catch(error => {
      alert("회원가입에 실패했습니다.");
    })
  }

  return (
    <div className="App">
      <h2>회원가입</h2>

      <label>닉네임 : </label>
      <input type='text' placeholder='닉네임 작성하기' value={username} onChange={(e) => setUsername(e.target.value)}/>

      <label>이메일 : </label>
      <input type='email' placeholder='이메일 작성하기' value={email} onChange={(e) => setEmail(e.target.value)}/>
      
      <label>비밀번호 : </label>
      <input type='password' placeholder='비밀번호 작성하기' value={password} onChange={(e) => setPassword(e.target.value)}/>
    
      {/* 
      <label>비밀번호 확인: </label>
      <input type='password' placeholder='비밀번호 작성하기' onChange={(e) => setPassword(e.target.value)}/>
      */}
      
      <button onClick={handleRegister}>가입하기</button>
    </div>
  );
}

export default App;
