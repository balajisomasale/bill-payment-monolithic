package com.cognizant.mfrp.agile.api.billpaymentsystem.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.mfrp.agile.api.billpaymentsystem.exception.UserAlreadyExistsException;
import com.cognizant.mfrp.agile.api.billpaymentsystem.exception.VendorAlreadyExistsException;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.AppUser;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.AppVendor;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.Role;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.User;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.Vendor;
import com.cognizant.mfrp.agile.api.billpaymentsystem.repository.RoleRepository;
import com.cognizant.mfrp.agile.api.billpaymentsystem.repository.UserRepository;
import com.cognizant.mfrp.agile.api.billpaymentsystem.repository.VendorRepository;


@Service
public class AppUserDetailsService implements UserDetailsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(AppUserDetailsService.class);

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	VendorRepository vendorRepository;

	@Override
	public UserDetails loadUserByUsername(String userid) throws UsernameNotFoundException {
		User user = userRepository.findByUserid(userid);
		
		
		Vendor vendor = vendorRepository.findByUsername(userid);
		if (user == null) {
			throw new UsernameNotFoundException("User not found!");
		} else {
			LOGGER.info("user is:" + user);
			AppUser appUser = new AppUser(user);
			LOGGER.info("userDetails is: " + appUser);
			System.out.println(user);
			return appUser;
		}
	
	}

	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public void signup(User newUser) throws UserAlreadyExistsException {
		LOGGER.info("NEW USER IS: " + newUser);
		User user = userRepository.findByUserid(newUser.getUserid());
		Vendor vendor=vendorRepository.findByUsername(newUser.getUserid());
		if (user != null || vendor !=null) {
			throw new UserAlreadyExistsException();
		} else {
			Role role = roleRepository.findById(1).get();
			LOGGER.info("NEW ROLE IS: " + role);
			List<Role> roles = new ArrayList<Role>();
			roles.add(role);
			newUser.setRoles(roles);
			BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
			String encodedPassword = bCryptPasswordEncoder.encode(newUser.getPassword());
			newUser.setPassword(encodedPassword);
			userRepository.save(newUser);
		}

	}
	
	public void signupvendor(Vendor newVendor) throws VendorAlreadyExistsException {
		LOGGER.info("NEW USER IS: " + newVendor);
		Vendor vendor = vendorRepository.findByUsername(newVendor.getUsername());
		if (vendor != null) {
			throw new VendorAlreadyExistsException();
		} else {
			Role role = roleRepository.findById(3).get();
			LOGGER.info("NEW ROLE IS: " + role);
			List<Role> roles = new ArrayList<Role>();
			roles.add(role);
			newVendor.setRoles(roles);
			BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
			String encodedPassword = bCryptPasswordEncoder.encode(newVendor.getPassword());
			newVendor.setPassword(encodedPassword);
			vendorRepository.save(newVendor);
		}

	}

}
