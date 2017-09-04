package com.test.beninca;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@EnableAutoConfiguration
@SpringBootApplication
public class Example extends SpringBootServletInitializer {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(Example.class, args);
	}

}