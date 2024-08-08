package com.kh.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 필수생성자
@ToString // DB 에서 값이 제대로 넘어왔는지 체크용
public class UserProfile {

	private int userId;
	private String username;
	private String profileImageUrl;
	private LocalDateTime createdAt;
	// Localhost = 현재 내 주소
	// LocalDateTime = 현재 날짜와 시간
}
