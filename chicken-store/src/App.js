import logo from './logo.svg';
import './App.css';
import ChickenList from './component/ChickenList';
import ChickenForm from './component/ChickenForm';
import Modal from './component/Modal';
import { useState } from 'react';

function App() {
  const[isModalOpen, setIsModalOpen] = useState(false);
  // 사용자가 보고싶을 때 볼 수 있도록 처음에는 false 보이지 않음 설정

  // 오픈 true    닫음 false
  // const 에서 동작하는 기능이 1 개 일 때 { } 생략 가능
  const openModal = () => setIsModalOpen(true); 

  const cloesModal = () => {
    setIsModalOpen(false);
  }
  

  return (
    <div className="App">
      <ChickenList/>
      <button onClick={openModal}>메뉴 등록하기</button>
      <Modal isOpen={isModalOpen} onClose={cloesModal}>
        <ChickenForm/>
      </Modal>
    </div>
  );
}

export default App;
