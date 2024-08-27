import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Pizzaform.css';


const PizzaForm = () => {
    const [name, setPizzaName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate('');

    const 전달데이터 = {
        name,
        description,
        price
    }
    // 스프링부트 연결 후 input 에 작성한 데이터 전달
    const handleRegister = () => {
        axios.post("http://localhost:9090/api/pizza", 전달데이터)
        .then((response) => {
            alert("메뉴 등록 완료")
        })
        .catch((e) => {
            alert("메뉴 등록 실패");
        })

        setPizzaName("");
        setDescription("");
        setPrice("");
    }

    
    return(
        <div className="pizzaform-container">
            <label>
                메뉴 이름 : 
                <input type="text" value={name} onChange={(e) => setPizzaName(e.target.value)}/>
            </label>
            <label>
                메뉴 설명 : 
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </label>
            <label>
                메뉴 가격 : 
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </label>

            <button onClick={handleRegister}>등록하기</button>
        </div>
    )

}

export default PizzaForm;