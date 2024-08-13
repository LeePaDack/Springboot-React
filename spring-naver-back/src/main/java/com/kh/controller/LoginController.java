package com.kh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kh.dto.NaverUser;
import com.kh.service.LoginService;

@RestController
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	/*
	로그인했을 때
	값이 있으면 total : 1
	값이 없으면 total : 0
	
	Total: 1 = 로그인 조회했을 때 존재하는 컬럼이 1 개 발견
	
	맞지 않는 아이디 비밀번호를 조회했을 때 컬럼이 0 개 발견 
	 */
	
	@PostMapping("/login")
	// login @RequestParam -> @RequesBody 로  Map<String, String> loginData 전달
	public ResponseEntity<String> login(@RequestParam("id") String id, @RequestParam("password") String password) {
		NaverUser user = loginService.login(id, password);
		if(user != null) { // 유저정보가 존재하면 null 이 아닐 것
			return ResponseEntity.ok("로그인 성공");
		} else { // 유저정보가 존재하지 않아 null 로 전달
			// ResponseEntity.status = DB 나 어떤 값에 대한 결과 상태
			// HttpStatus = GET POST 와 같은 메서드 기능이 잘 동작했느냐
			// UNAUTHORIZED = 인증 실패 주로 로그인실패
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
					.body("로그인 실패");
		}
	}
	
}
