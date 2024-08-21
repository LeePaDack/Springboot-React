import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChickenList from './component/ChickenList';
import ChickenDetail from './component/ChickenDetail';
/*
ChickenList path="/"

ChickenDetail.js path="/chicken-detail"
*/


function App () {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<ChickenList />}/> 
                <Route path='/chicken-detail/:id' element={<ChickenDetail />}/> 
            </Routes>
        </Router>
    )

}

export default App;