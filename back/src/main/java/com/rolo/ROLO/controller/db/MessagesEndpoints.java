package com.rolo.ROLO.controller.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.controller.BaseEndpoints;
import com.rolo.ROLO.model.dto.MessageRequest;

@RestController
@RequestMapping("/db/messages/")
public class MessagesEndpoints extends BaseEndpoints<MessageRequest> {
	
	public MessagesEndpoints() {
		super("MESSAGES", MessageRequest.class);
	}
	
}
