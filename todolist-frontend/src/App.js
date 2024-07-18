import React, {useState} from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import TodoList from './components/TodoList';
import TodoListContext from './components/TodoListContext';
import LoginContext from './components/LoginContext';
import './App.css';


function App() {
  const [signupView, setSignupView] = useState(false);
  const [loginMember, setLoginMember] = useState(null);
  const [todoList, setTodoList] = useState([]);
  return (
    
    <TodoListContext.Provider value={{loginMember, setLoginMember, todoList, setTodoList}}>
      <button onClick={() => {setSignupView(!signupView)}}>
        {signupView ? ('회원가입 닫기') : ('회원가입 열기')}
      </button>

      <div className='signup-wrapper'>
        {signupView === true && (<Signup/>)}
      </div>
      <h1>Todo List</h1>

      <Login/>

      <hr></hr>
      {loginMember && (<TodoList/>)}
    </TodoListContext.Provider>

  );
}

export default App;
