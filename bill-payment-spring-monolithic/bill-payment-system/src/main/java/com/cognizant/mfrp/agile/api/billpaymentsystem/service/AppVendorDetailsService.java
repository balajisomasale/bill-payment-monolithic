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

import com.cognizant.mfrp.agile.api.billpaymentsystem.exception.VendorAlreadyExistsException;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.AppVendor;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.Role;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.User;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.Vendor;
import com.cognizant.mfrp.agile.api.billpaymentsystem.repository.RoleRepository;
import com.cognizant.mfrp.agile.api.billpaymentsystem.repository.UserRepository;
import com.cognizant.mfrp.agile.api.billpaymentsystem.repository.VendorRepository;

@Service
public class AppVendorDetailsService implements UserDetailsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(AppVendorDetailsService.class);

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	VendorRepository vendorRepository;

	@Override
	public UserDetails loadUserByUsername(String uname) throws UsernameNotFoundException {
		Vendor vendor = vendorRepository.findByUsername(uname);
		if (vendor == null) {
			throw new UsernameNotFoundException("Vendor not found!");
		} else {
			LOGGER.info("user is:" + vendor);
			AppVendor appVendor = new AppVendor(vendor);
			LOGGER.info("userDetails is: " + appVendor);
			System.out.println(vendor);
			return appVendor;
		}

	}

	public AppVendorDetailsService(VendorRepository vendorRepository) {
		super();
		this.vendorRepository = vendorRepository;
	}

	public void signupvendor(Vendor newVendor) throws VendorAlreadyExistsException {
		LOGGER.info("NEW VENDOR IS: " + newVendor);
		Vendor vendor = vendorRepository.findByUsername(newVendor.getUsername());
		User user = userRepository.findByUserid(newVendor.getUsername());
		if (vendor != null || user != null) {
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

	public List<Vendor> getVendorListAdmin() {
		List<Vendor> li = new ArrayList<Vendor>();

		vendorRepository.findAll().forEach(li::add);
		return li;
	}

	public Vendor getVendorItem(String username) {

		Vendor vendor = vendorRepository.findByUsername(username);
		if (vendor.getUsername().equalsIgnoreCase(username)) {

			return vendor;
		}

		return null;
	}

	public boolean editVendor(Vendor vendor) {
		Vendor vendor1 = vendorRepository.findByUsername(vendor.getUsername());

		if (vendor1 != null)

		{
			Role role = roleRepository.findById(3).get();
			// LOGGER.info("NEW ROLE IS: " + role);
			List<Role> roles = new ArrayList<Role>();
			roles.add(role);
			vendor.setRoles(roles);

			BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
			String encodedPassword = bCryptPasswordEncoder.encode(vendor.getPassword());
			vendor.setPassword(encodedPassword);
			vendorRepository.save(vendor);
			return true;
		} else
			return false;

	}

}
