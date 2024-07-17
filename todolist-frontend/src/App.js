import React, {useState} from 'react';
import LoginContext from './components/LoginContext';
import Signup from './components/SignUp';
import Login from './components/Login';
import './App.css';


function App() {
  const [signupView, setSignupView] = useState(false);
  const [loginMember, setLoginMember] = useState(null);
  
  return (
    
    <LoginContext.Provider value={{loginMember, setLoginMember}}>
      <button onClick={() => {setSignupView(!signupView)}}>
        {signupView ? ('회원가입 닫기') : ('회원가입 열기')}
      </button>

      <div className='signup-wrapper'>
        {signUpView === true && (<Signup/>)}
      </div>
      <h1>Todo List</h1>

      <Login/>

      <hr></hr>
    
    </LoginContext.Provider>

  );
}

export default App;
