package com.rolo.ROLO.model.dto;

import java.sql.Timestamp;

import lombok.Getter;
import lombok.Setter;

public class MessageRequest {
	@Getter @Setter public int id;
	@Getter @Setter public int chat_id;
	@Getter @Setter public int sender_id;
	@Getter @Setter public String content;
	@Getter @Setter public String status;
	@Getter @Setter public Timestamp created_at;
	@Getter @Setter public Timestamp updated_at;
}
