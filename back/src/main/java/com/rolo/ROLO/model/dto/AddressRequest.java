package com.rolo.ROLO.model.dto;

import java.sql.Timestamp;

import lombok.Getter;
import lombok.Setter;

public class AddressRequest {
	@Getter @Setter public int id;
	@Getter @Setter public int user_id;
	@Getter @Setter public String zipcode;
	@Getter @Setter public String street;
	@Getter @Setter public String number;
	@Getter @Setter public String neighborhood;
	@Getter @Setter public String city;
	@Getter @Setter public String state;
	@Getter @Setter public String complement;
	@Getter @Setter public Timestamp created_at;
}
