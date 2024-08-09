package com.kh.service;

import java.io.File;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.kh.dto.UserProfile;
import com.kh.mapper.ProfileMapper;

// 서비스 상세 기능 작성
@Service
public class ProfileServiceImpl implements ProfileService {

	@Value("${file.upload-dir}")
	private String profileDir;
	
	@Autowired
	private ProfileMapper profileMapper;
	
	/*
	CTRL + SPACE 와 특정 변수명 뒤에 . 작성해서 어떤 기능이 나오는지 살펴보기
	 */
	
	@Override
	public List<UserProfile> getProfile() {
		return profileMapper.getProfile();
	}
	
	@Override
	public void insertProfile(UserProfile userProfile) {
		profileMapper.insertProfile(userProfile);
	}
	
	@Override
	public void uploadProfile(MultipartFile[] files, String username) {
		// 폴더 존재하는지 확인 후 폴더 없으면 생성
		// 폴더도 하나의 파일이므로 파일로 폴더 확인
		// 글자 이외 모두 파일
		File uploadDirFile = new File(profileDir);
		// 만약에 폴더가 존재하지 않으면 폴더들 생성하기
		if(!uploadDirFile.exists()) {
			System.out.println("폴더가 존재하지 않아 폴더를 생성");
			if (!uploadDirFile.mkdirs()) {
				System.out.println("디렉토리 폴더에 대한 설정완료");
				// throw new Exception("폴더 생성 실패");
			}
		} 
		// 프로필을 업데이트 하기 위해 받은 이미지가 없기 때문에 처음 이미지들 이름은 null 로 줌
		// 없음 = null
		List<String> fileNames = null;
		
		fileNames = List.of(files).stream().map(file -> {
			String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
			File df = new File(profileDir + File.separator + fileName);
			try {
				file.transferTo(df);
			}catch (Exception e) {
				e.printStackTrace();
			}
			
			return fileName;
		}).collect(Collectors.toList());
		
		// UserProfile 객체 생성, 각 객제체 현재 작성한 값들 넣는 set 작성
		// image = join ,
		UserProfile up = new UserProfile();
		up.setUsername(username);
		up.setProfileImageUrl(String.join(",", fileNames));
		insertProfile(up); // set 으로 추가된 값을 DB 에 넣어주기
	}
	
}
