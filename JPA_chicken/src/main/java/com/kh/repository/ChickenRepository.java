package com.kh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kh.dto.Chicken;

// repository 
// mybatis - mapper 이 두가지를 설정

// @Repository, @Mapper 는 interface 로 시작
@Repository
public interface ChickenRepository extends JpaRepository<Chicken, Integer> {
	// 검색은 sql 문이 예외적이기 때문에 필수로 작성
	/*
	findByChickenName : 어떤 컬럼에서 검색   where chickenName = "?"
	
	Containing  : 부분 일치 허용   Like %...% 해당
	
	IgnoreCase  : 대소문자 구분 없이 검색   사용같음
	 */
	List<Chicken> findByChickenNameContainingIgnoreCase(String query);
	
	
	// 전체보기 전체넣기 전체수정 전체삭제 와 같은 기본 기능은
	// JpaRepository 안에 모두 들어있음
	
	// 특정 값을 찾을 때 쓰는 기능
	// findById(Integer id);  -> where 대신 find 
	// 만약에 where 로 이메일 = '' 비밀번호 = '' 로그인을 한다 
	// 래포지토리에 findByEmailPassword -> where 절
}
