/*
is = 주로 true 인지 false 인지를 나타낼 때 많이 사용

on = 이벤트(e, event)를 처리하기 위한 함수 이름으로 사용
   = 특정 사건이 발생했을 때 대처할 기능
   = 닫기 사건이 발생했음 -> 메인에서 특정 기능이 안보이게 닫는다.
*/

// [] 변수 선언 {} 외부에서 가져온 값 사용
const Modal = ({isOpen, onClose, children}) => {

    if(!isOpen) { // Modal 을 열기 전이라면
        return null; // 다시 돌려보내기, 화면에 닫기 버튼이 보이지 않도록 설정하는 트릭
    }

    return (
        <div>
            <div>
                <button onClick={onClose}>닫기</button>
            </div>
            {children}
        </div>
    )
}

export default Modal;