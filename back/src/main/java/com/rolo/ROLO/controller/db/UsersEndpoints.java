package com.rolo.ROLO.controller.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.controller.BaseEndpoints;
import com.rolo.ROLO.model.dto.UserRequest;

@RestController
@RequestMapping("/db/users/")
public class UsersEndpoints extends BaseEndpoints<UserRequest> {

	public UsersEndpoints() {
		super("USERS", UserRequest.class);
	}
	
}
