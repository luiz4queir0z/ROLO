package com.rolo.ROLO.model.dto;

import lombok.Getter;
import lombok.Setter;

public class CategoryRequest {
	@Getter @Setter public int id;
	@Getter @Setter public String name;
	@Getter @Setter public String description;
}
