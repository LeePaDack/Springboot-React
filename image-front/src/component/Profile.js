import React, {useState} from 'react';


const Profile = () => {
    const [files, setFiles] = useState([]);
    const [username, setUsername] = useState('');

    // const 로 변수명을 설정하거나 기능명 설정
    const 파일변경기능 = (e) => {
        // 파일을 변경했을 때 프로필 썸네일에 이미지들 주소가 넘어갈 수 있도록 설정
        const 선택한파일들 = Array.from(e.target.files);
        setFiles(선택한파일들);
    };

    const 유저네임변경기능 = (e) => {
        setUsername(e.target.value);
    };

    return(
        <div>
            <h1>프로필 이미지 업로드</h1>
            {/* <input type="file" multiple onChange={(e) => setFiles(e.target.files)}/>
                <input type="file" multiple onChange={파일변경기능}/>

                같은 기능을 작동하지만 const 를 이용해서 기능을 구분 짓는 것과 기능을 한번에 작성해주는 차이
            */}
            <div className='profile-thumnail'>
                {files.length > 0 && files.map((file, index) => (
                    <div key={index}>
                        <img
                            src={URL.createObjectURL(file)}
                        />
                    </div>
                ))}

            </div>
            <input type="file" multiple onChange={파일변경기능}/>
            <input type='text' placeholder='닉네임을 입력하세요' value={username} onChange={유저네임변경기능}/>
        </div>
    )
}

export default Profile;