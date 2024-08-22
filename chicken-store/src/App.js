import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChickenList from './component/ChickenList';
import ChickenDetail from './component/ChickenDetail';
import MainRouter from './MainRouter';
/*
ChickenList path="/"

ChickenDetail.js path="/chicken-detail"
*/


function App () {

    return (
        <Router>
            
            <Routes>
                <Route path='/' element={<MainRouter/>}/> 
                {/* Routes 안에는 Route 로 설정된 태그만 들어올 수 있음  <MainRouter/> */}
                <Route path='/chicken-detail/:id' element={<ChickenDetail />}/> 
            </Routes>
        </Router>
    )

}

export default App;