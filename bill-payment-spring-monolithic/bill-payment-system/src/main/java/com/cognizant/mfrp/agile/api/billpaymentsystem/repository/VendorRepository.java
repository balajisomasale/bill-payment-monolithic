package com.cognizant.mfrp.agile.api.billpaymentsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.mfrp.agile.api.billpaymentsystem.model.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Integer>{
	//@Query("From Vendor v where v.username=?1")
	Vendor findByUsername(String uname);
	
	@Query("From Vendor")
	List<Vendor> getVendor();
	
}
