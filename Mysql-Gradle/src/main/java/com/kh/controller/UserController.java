package com.kh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.dto.User;
import com.kh.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;
	
	@GetMapping // api 주소값 users , @RequestMapping("/users") 이기 때문   
	// @GetMapping("/~~") 이 있다면 users/~~ 이 api 가 됨
	public List<User> findAll() {
		return userService.findAll();
	}
	
	@PostMapping
	public void insertUser(@RequestBody User user) {
		userService.insertUser(user);
	}
}
