package com.rolo.ROLO.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class Endpoints {

	@GetMapping("/ping")
	public String ping() {
		return "pong";
	}
}
