package com.kh.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.kh.dto.BCUser;

@Mapper
public interface BCRegisterMapper {

	void insertBCRegister(BCUser User);
}
