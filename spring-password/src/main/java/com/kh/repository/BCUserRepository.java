package com.kh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kh.dto.BCUser;

/*
JpaRepository
	mybatis 와 mapper 를 생략해서 작성하는 방법
	
	SQL 알아서 작성
 */
public interface BCUserRepository extends JpaRepository<BCUser, Integer> {
	// save 나 select 특정적으로 무언가를 검색하거나 하지 않는한 기본적은 SQL 은 작성 X
	// BCUser saveUser();
	
	// 이메일 찾기 기능
	BCUser findByEmail(String email);
	// -> SQL  SELECT * FROM BCUser WHERE email = ? ;
}
