import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);

    const Java에업로드 = () => {
        // Form 특정값을 가져와서 넘겨줄 때 사용하는 객체
        // files 에서 파일이 하나가 아니라 여러개이기 때문에 여러개를 담을 배열 설정
        const formData = new FormData();
        Array.from(files).forEach(file =>{
           // return formData.append("files", file);
            formData.append("files", file);
        });
        formData.append("title", title);
        formData.append("content", content);

        // Java Controller 에 데이터 전송  Post 이용해서
        axios.post("/gallery/upload", formData, {
            headers:{
                'Content-Type' : 'multipart/form-data'
            }
        });
        alert("자바로 이미지 전송했습니다.");
    }

    const [selectedImage, setSelectedImage] = useState(null);
    const 이미지변경하기 = (event) => {
      const file = event.target.files[0];
      if(file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setSelectedImage(reader.result);
          };
          reader.readAsDataURL(file); 
      }
    }

    const 사진불러오기 = () => {
        
    }

    return (
        <div className="App">
                <div>
                    <label>제목:</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>내용:</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="imgSelect">이미지선택:</label>
                    <input multiple className='image-inputs' id="imgSelect" type="file" accept="image.*" 
                    onChange={(e) => setFiles(e.target.files)}/>
                </div>
                {selectedImage && (
                  <div>
                  <h2>미리보기</h2>
                  <img src={selectedImage}/>
                  </div>
                )}
                <button onClick={Java에업로드}>Submit</button>

                <button onClick={사진불러오기}>불러오기</button>
        </div>
    );
}

export default App;