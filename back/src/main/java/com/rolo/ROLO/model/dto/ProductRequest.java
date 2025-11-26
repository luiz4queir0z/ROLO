package com.rolo.ROLO.model.dto;

import java.sql.Timestamp;

import lombok.Getter;
import lombok.Setter;

public class ProductRequest {
	@Getter @Setter public int id;
	@Getter @Setter public int user_id;
	@Getter @Setter public String title;
	@Getter @Setter public String description;
	@Getter @Setter public double price;
	@Getter @Setter public int category_id;
	@Getter @Setter public String condition;
	@Getter @Setter public String offer_type;
	@Getter @Setter public String status;
	@Getter @Setter public Timestamp created_at;
	@Getter @Setter public Timestamp updated_at;
}
