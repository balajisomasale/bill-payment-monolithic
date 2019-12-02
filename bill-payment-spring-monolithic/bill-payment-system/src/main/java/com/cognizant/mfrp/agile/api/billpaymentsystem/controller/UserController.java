package com.cognizant.mfrp.agile.api.billpaymentsystem.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.mfrp.agile.api.billpaymentsystem.exception.UserAlreadyExistsException;
import com.cognizant.mfrp.agile.api.billpaymentsystem.exception.VendorAlreadyExistsException;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.User;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.Vendor;
import com.cognizant.mfrp.agile.api.billpaymentsystem.repository.UserRepository;
import com.cognizant.mfrp.agile.api.billpaymentsystem.repository.VendorRepository;
import com.cognizant.mfrp.agile.api.billpaymentsystem.service.AppUserDetailsService;

@RestController
@RequestMapping("/")
public class UserController {


	@Autowired
	AppUserDetailsService appUserDetailsService;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	VendorRepository vendorRepository;

	
	
	@GetMapping("users")
	public List<User> getMenuItem() {

		return (userRepository.getUser());

	}
	
	@PostMapping("users")
	public void signup(@RequestBody @Valid User newUser) throws UserAlreadyExistsException {
		appUserDetailsService.signup(newUser);
	}
	
	

}
