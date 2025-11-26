package com.rolo.ROLO.controller.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.controller.BaseEndpoints;
import com.rolo.ROLO.model.dto.ProductRequest;

@RestController
@RequestMapping("/db/products/")
public class ProductsEndpoints extends BaseEndpoints<ProductRequest>{
	
	public ProductsEndpoints() {
		super("PRODUCTS", ProductRequest.class);
	}

}
