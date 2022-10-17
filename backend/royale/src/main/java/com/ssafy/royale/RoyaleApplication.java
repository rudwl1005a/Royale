package com.ssafy.royale;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class RoyaleApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoyaleApplication.class, args);
	}

}
