package com.kh.entity;
/*
 *  model = dto, entity, vo 
기존의 DB 에 테이블이 존재하는 것을 연결 = dto
기존에 테이블이 존재하는지 알 수는 없지만 DB 와 Java 에서 객체로 사용 entity
기존 DB 에 테이블이 없어서 설정해줘야할 때 = entity
DB 랑 관계 없음 = vo
 */
import jakarta.persistence.Entity;  // lombok 에도 Entity 가 존재하기 때문에 jakarta 로 확실히 해야함
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter // 만약에 DB 에는 pizzas 로 테이블을 저장하길 원한다면 @Table 에 이름 명시를 해주면 됨
public class Kh_pizza {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String description;
	private double price;
}
