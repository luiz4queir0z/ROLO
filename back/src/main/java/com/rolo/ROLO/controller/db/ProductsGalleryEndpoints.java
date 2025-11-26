package com.rolo.ROLO.controller.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.controller.BaseEndpoints;
import com.rolo.ROLO.model.dto.ProductGalleryRequest;

@RestController
@RequestMapping("/db/products-gallery/")
public class ProductsGalleryEndpoints extends BaseEndpoints<ProductGalleryRequest> {
	
	public ProductsGalleryEndpoints() {
		super("PRODUCTGALLERY", ProductGalleryRequest.class);
	}
	
}
