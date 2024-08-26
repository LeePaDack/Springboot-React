import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



const PizzaResult = () => {
    // 검색된 피자들을 담을 변수명 설정
    const [pizzas, setPizzas] = useState('');

    // useLocation = 현재 페이지 정보를 가지고 있음  경로나 검색된 문자들
    // useLocation 안에는 pathname, search, hash, state, key 존재함
    const location = useLocation(); // 컴퓨터 상에서 내 위치 정보를 변수에 담음
    const query = new URLSearchParams(location.search).get("query");
    // 정보가 담긴 변수 안에서 특정 키의 값을 가지고 오는 것

    // 검색에 대한 정보가 바로 보여야하고, 검색어가 수정되면 재 검색을 해야함
    // query = 검색어 = keyword, searchTerm
    useEffect(() => { /* query 값이 바뀔 때마다 다시 DB 에서 검색된 내용 불러오기 */
        // 만약에 쿼리가 존재하면
        if(query) {
            axios.get(`http://localhost:9090/api/pizza/search?query=${query}`)
            .then((response) => setPizzas(response.data))
            .catch((e) => console.error("문제가 발생하여 검색을 가져오지 못합니다."));
        }
    }, [query])




    return(
        <div className="pizza-search-list">
            <h1>검색 결과 : </h1>
            {/* 검색된 피자들을 map 을 이용해서 모두 보기, 검색은 length 가 0 초과일 때만 검색 가능하게 설정 */}
            {pizzas.length > 0 ? (
            <div>
                {pizzas.map((p) => (
                    <div key={p.id}>
                        <h3>{p.name}</h3>    
                        <p>{p.description}</p>    
                        <p>{p.price.toLocaleString()}</p>    
                    </div>
                ))} 
            </div> 
            ):( 
            <div>
                <p>검색결과가 존재하지 않습니다.</p>
            </div>
            )}
        </div>
    )
}

export default PizzaResult;