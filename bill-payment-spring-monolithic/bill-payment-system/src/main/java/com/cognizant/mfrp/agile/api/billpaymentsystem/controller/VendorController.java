package com.cognizant.mfrp.agile.api.billpaymentsystem.controller;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.mfrp.agile.api.billpaymentsystem.exception.VendorAlreadyExistsException;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.Vendor;
import com.cognizant.mfrp.agile.api.billpaymentsystem.repository.VendorRepository;
import com.cognizant.mfrp.agile.api.billpaymentsystem.service.AppVendorDetailsService;


@RestController
@RequestMapping("/vendor")
public class VendorController {

	@Autowired
	AppVendorDetailsService appVendorDetailsService;

	@Autowired
	VendorRepository vendorRepository;

	@GetMapping
	public List<Vendor> getVendor() {

		return (vendorRepository.getVendor());
	}

	@GetMapping("/{username}")
	public Vendor getOneVendor(@PathVariable String username) {
		return appVendorDetailsService.getVendorItem(username);
	}

	@PutMapping
	public void modifyVendorItem(@RequestBody Vendor vendor) {
		appVendorDetailsService.editVendor(vendor);
	}

	@PostMapping()
	public void signupvendor(@RequestBody @Valid Vendor newVendor) throws VendorAlreadyExistsException {
		appVendorDetailsService.signupvendor(newVendor);
	}

}
