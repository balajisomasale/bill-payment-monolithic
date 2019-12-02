package com.cognizant.mfrp.agile.api.billpaymentsystem.service;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.mfrp.agile.api.billpaymentsystem.exception.UserAlreadyExistsException;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.Bill;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.Role;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.User;
import com.cognizant.mfrp.agile.api.billpaymentsystem.repository.BillRepository;

@Service
public class AppBillDetailsService {
	
	
	@Autowired
	BillRepository billRepository;

	public void addBill(@Valid Bill newBill) {
		
		Bill bill = billRepository.findById(newBill.getId());		
		billRepository.save(newBill);

	}
	
	

}
