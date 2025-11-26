package com.rolo.ROLO.model.dto;

import java.sql.Timestamp;

import lombok.Getter;
import lombok.Setter;

public class UserRequest {
	@Getter @Setter public int id;
	@Getter @Setter public String name;
	@Getter @Setter public String email;
	@Getter @Setter public String cpf;
	@Getter @Setter public String username;
	@Getter @Setter public String password;
	@Getter @Setter public Timestamp created_at;
}
