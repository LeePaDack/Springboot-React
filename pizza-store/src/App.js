
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom';
import PizzaList from './component/PizzaList';
import PizzaForm from './component/PizzaForm';
import PizzaRouter from './component/PizzaRouter';
import PizzaResult from './component/PizzaResult';

function App() {
  return (
    <Router>
      <PizzaRouter/>
      <Routes>
        <Route path='/' element={<PizzaList/>}/>
        {/* 
        <Route path='/pizza-detail' element={<PizzaList/>}/>
        <Route path='/search' element={<PizzaList/>}/>
        */}
        <Route path='/pizzaform' element={<PizzaForm/>}/>
        <Route path='/pizzaresult' element={<PizzaResult/>}/>
        
      </Routes>
    </Router>
  )
}

export default App;
