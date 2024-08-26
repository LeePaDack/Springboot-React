package com.kh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kh.entity.Kh_pizza;

// mapper 와 mybatis 를 합쳐놓은 기능
// 기본으로 SELECT, INSERT 특정 단어 찾기는 JpaRepository 안에 작성이 되어있기 때문에
// 검색과 같이 특수한 작업만 작성
// mapper 와 같이 interface 임
// mapper 와 다른점은 mybatis 와 같은 기능을 포함한 interface
@Repository
public interface PizzaRepository extends JpaRepository<Kh_pizza, Integer> {
	// 검색과 같이 보는 것이 여러개일 때 List 
	// find = where 어떤 컬럼 기준으로 검색을 들어갈 것인가? 이름으로 검색하겠다 -> name
	// Containing = Like % % 특정 단어 앞 뒤로 상관없이 검색
	// Like %name   - name 앞에  (문자열 끝이 name 으로 끝나는 모든 값 찾기)  
	// Like %name%  - name 을 포함한 (문자열에 name 이 들어간 모든 값 찾기)
	// Like name%   - name 뒤에  (문자열 앞이 name 으로 시작하는 모든 값 찾기)
	// IgnoreCase = 대소문자 구분 X
	List<Kh_pizza> findByNameContainingIgnoreCase(String query);
}
