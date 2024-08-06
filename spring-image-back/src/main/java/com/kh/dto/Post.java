package com.kh.dto;

import java.util.List;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Post {
	private int id;
	private String title;
	private String content;
	private String imageUrl;
	// id 와 createdAt 같은 경우 MySQL 에서 자동으로 숫자와 날짜를 생성해주기 때문에
	// mapper.xml 에 작성하지 않음
	private String createdAt; // 게시판에 작성한 글과 이미지가 MySQL 에 들어온 시간
}
