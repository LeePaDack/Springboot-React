import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);

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


    return (
        <div className="App">
            <form>
                <div>
                    <label>제목:</label>
                    <input type='text' value={title}/>
                </div>
                <div>
                    <label>내용:</label>
                    <textarea value={content} />
                </div>
                <div>
                    <label htmlFor="imgSelect">이미지선택:</label>
                    <input multiple className='image-input' id="imgSelect" type="file" accept="image.*" value={files} onChange={이미지변경하기}/>
                </div>
                {selectedImage && (
                  <div>
                  <h2>미리보기</h2>
                  <img src={selectedImage}/>
                  </div>
                )}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;