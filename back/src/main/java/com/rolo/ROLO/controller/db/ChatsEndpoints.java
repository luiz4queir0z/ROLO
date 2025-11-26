package com.rolo.ROLO.controller.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.controller.BaseEndpoints;
import com.rolo.ROLO.model.dto.ChatRequest;

@RestController
@RequestMapping("/db/chats/")
public class ChatsEndpoints extends BaseEndpoints<ChatRequest> {

	public ChatsEndpoints() {
		super("CHATS", ChatRequest.class);
	}

}
