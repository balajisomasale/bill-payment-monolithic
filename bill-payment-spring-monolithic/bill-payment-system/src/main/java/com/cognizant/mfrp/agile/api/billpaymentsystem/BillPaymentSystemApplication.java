package com.cognizant.mfrp.agile.api.billpaymentsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BillPaymentSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(BillPaymentSystemApplication.class, args);
		System.out.println("From Main Class");
	}

}
