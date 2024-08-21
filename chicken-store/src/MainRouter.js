import './App.css';
import ChickenList from './component/ChickenList';
import ChickenForm from './component/ChickenForm';
import Modal from './component/Modal';
import { useState } from 'react';

function MainRouter() {
  const[isModalOpen, setIsModalOpen] = useState(false);
  // 사용자가 보고싶을 때 볼 수 있도록 처음에는 false 보이지 않음 설정

  // 오픈 true    닫음 false
  // const 에서 동작하는 기능이 1 개 일 때 { } 생략 가능
  const openModal = () => setIsModalOpen(true); 

  const cloesModal = () => {
    setIsModalOpen(false);
  }
  

  return (
    <div className="app-container">
      <h1>치킨가게 메뉴 관리</h1>
      <button className='chicken-register-button' onClick={openModal}>메뉴 등록하기</button>
      <ChickenList/>
      <Modal isOpen={isModalOpen} onClose={cloesModal}>
        <ChickenForm/>
      </Modal>
    </div>
  );
}

export default MainRouter;
