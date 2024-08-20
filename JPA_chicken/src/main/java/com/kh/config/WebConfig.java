package com.kh.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// 3000 포트와 연결하는 webConfig 설정
@Configuration
public class WebConfig implements WebMvcConfigurer{
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**") // 3000 다음에 오는 api url 모두 허용
				.allowedOrigins("http://localhost:3000") // localhost:3000 주소 접속허용
				.allowedMethods("GET","POST","PUT","DELETE","OPTIONS") // httpMethod 와 기타 옵션 모두 허용
				.allowedHeaders("*"); // 데이터, 이미지, 파일 다중파일등 모두 허용
	}
}
