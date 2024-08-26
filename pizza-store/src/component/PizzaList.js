import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PizzaList = () => {
    const [pizzas, setPizzas] = useState([]);
    const navigate = useNavigate('');

    // useEffect 활용해서 피자 리스트 가져오기 연결
    useEffect(() => {
        axios.get("http://localhost:9090/api/pizza")
        .then(response => {
            setPizzas(response.data)
        })
        
        .catch(e => alert("문제 발생"));
    },[])

    const 등록하러가기 = () => {
        navigate("/pizzaform")
    } 

    return (
        <div className="pizza-container">
            <h1>피자 메뉴</h1>
            <ul>
                {pizzas.map(pizza => (
                    <li key={pizza.id}>
                        <div className="pizza-name">{pizza.name}</div>
                        <div className="pizza-description">{pizza.description}</div>
                        <div className="pizza-price">{pizza.price.toLocaleString()}</div>
                        <button>상세보기</button>
                    </li>
                ))}
            </ul>
            <button onClick={등록하러가기}>등록하러가기</button>
        </div>
    )
}

export default PizzaList;