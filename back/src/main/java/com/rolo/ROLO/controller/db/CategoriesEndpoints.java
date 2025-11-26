package com.rolo.ROLO.controller.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.controller.BaseEndpoints;
import com.rolo.ROLO.model.dto.CategoryRequest;

@RestController
@RequestMapping("/db/categories/")
public class CategoriesEndpoints extends BaseEndpoints<CategoryRequest> {

	public CategoriesEndpoints() {
		super("CATEGORIES", CategoryRequest.class);
	}
	
}
