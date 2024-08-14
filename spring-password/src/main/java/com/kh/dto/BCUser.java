package com.kh.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity // MySQL 매핑
@Getter
@Setter
@ToString
public class BCUser {

	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 자동으로 id 값 올라가는 Sequence NextVal
	private int id;
	private String username;
	private String email;
	private String password;
}
