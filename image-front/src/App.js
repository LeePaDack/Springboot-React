import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Board from './component/Board';
import Profile from './component/Profile';
import Header from './component/layouy/Header';
import Main from './component/Main';
import Footer from './component/layouy/Footer';
import Banner from './component/layouy/Banner';
// front end api url 설정
// -> react router dom Router

// front emd api url
// Board path = "/board"
// Profile path = "/profile"

function App () {
    return(
        <div>
            <Router>
                <Banner/>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}></Route>
                    <Route path='/board' element={<Board/>}></Route>
                    <Route path='/profile' element={<Profile/>}></Route>
                </Routes>
                <Footer/>
            </Router>
        </div>
    )

}

export default App;