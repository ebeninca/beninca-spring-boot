package com.test.beninca.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

	@RequestMapping("/api")
	String home() {
		return "rest controller hello TTTT!!!!";

	}
	
}
