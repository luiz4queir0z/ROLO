package com.rolo.ROLO.model.dto;

import java.sql.Timestamp;

import lombok.Getter;
import lombok.Setter;

public class ProductGalleryRequest {
	@Getter @Setter public int id;
	@Getter @Setter public int product_id;
	@Getter @Setter public String image_url;
	@Getter @Setter public boolean is_title;
	@Getter @Setter public Timestamp created_at;
}
