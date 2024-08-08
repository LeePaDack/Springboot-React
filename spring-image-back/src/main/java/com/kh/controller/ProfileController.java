package com.kh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kh.dto.UserProfile;
import com.kh.service.ProfileService;


@RestController
@RequestMapping("/profile")
public class ProfileController {

	@Autowired
	private ProfileService service; 
	// private ProfileServiceImpl profileServiceImpl; 둘다 상관 없음
	
	/* 
	@Autowired 를 쓰지 않을 경우 작성해야하는 코드 ↓
	public ProfileController(ProfileService profileService) {
		this.profileServiceImpl = profileServiceImpl;
	}
	*/
	
	@GetMapping("/watching")
	public ResponseEntity<List<UserProfile>> getProfile() {
		return ResponseEntity.ok(service.getProfile());
	}

	
	/*
	parameter Type error
	@RequestParam 안에 React 에서 값을 가져올 때 값을 가져온 변수명을 작성하지 않이면
	에러가 발생
	@RequestParam("React 에서 가져올 변수명")
	 */
	@PostMapping("/upload")
	public ResponseEntity<String> insertProfile(@RequestParam("file") MultipartFile[] files,
												@RequestParam("username") String username,
												@RequestParam("profileImageUrl") String profileImageUrl) {
		service.uploadProfile(files, username, profileImageUrl);
		return ResponseEntity.ok("프로필 이미지 업로드 성공");
	}
	
}
