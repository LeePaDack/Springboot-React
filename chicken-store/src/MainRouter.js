import './App.css';
import ChickenList from './component/ChickenList';
import ChickenForm from './component/ChickenForm';
import Modal from './component/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainRouter() {
  const[isModalOpen, setIsModalOpen] = useState(false);
  // 사용자가 보고싶을 때 볼 수 있도록 처음에는 false 보이지 않음 설정

  // 검색어 상태 추가
  const [searchTerm, setSearchTerm] = useState('');

  // 오픈 true    닫음 false
  // const 에서 동작하는 기능이 1 개 일 때 { } 생략 가능
  const openModal = () => setIsModalOpen(true); 

  const cloesModal = () => {
    setIsModalOpen(false);
  }
  
  const navigate = useNavigate(); // 페이지 이동을 위한 hook

  const handle검색 = () => {
    navigate(`/search?query=${searchTerm}`);
  }

  return (
    <div className="app-container">
      <h1>치킨가게 메뉴 관리</h1>
      <div className='search-container'>
        <input type='text' placeholder='검색할 치킨 메뉴 작성' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='search-input'/>
        <button className='search-button' onClick={handle검색}>검색하기</button>
      </div>
      <button className='chicken-register-button' onClick={openModal}>메뉴 등록하기</button>
      <ChickenList/>
      <Modal isOpen={isModalOpen} onClose={cloesModal}>
        <ChickenForm/>
      </Modal>
    </div>
  );
}

export default MainRouter;
