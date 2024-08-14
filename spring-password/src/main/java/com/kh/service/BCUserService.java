package com.kh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kh.dto.BCUser;
import com.kh.mapper.BCRegisterMapper;
import com.kh.repository.BCUserRepository;

@Service
public class BCUserService {
	
	@Autowired
	private BCUserRepository bcUserRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	// 패스워드 인코드를 저장
	public void saveUser(BCUser bcUser) {
		// 한 번 암호화 처리된 암호를 가져오는 것
		bcUser.setPassword(passwordEncoder.encode(bcUser.getPassword()));
		// JPA Repository 안에 save 가 이미 저장되어있기 때문에 굳이 작성 X
		bcUserRepository.save(bcUser);
	}

	// mapper 연결
	@Autowired
	private BCRegisterMapper bcRegisterMapper;
	
	public void insertBCRegister(BCUser User) {
		bcRegisterMapper.insertBCRegister(User);
	}
}
