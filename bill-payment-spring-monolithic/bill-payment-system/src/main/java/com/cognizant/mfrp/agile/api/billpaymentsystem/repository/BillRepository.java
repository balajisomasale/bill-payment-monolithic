package com.cognizant.mfrp.agile.api.billpaymentsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.mfrp.agile.api.billpaymentsystem.model.Bill;


public interface BillRepository extends JpaRepository<Bill,Integer>{



	Bill findById(int id);
	
	@Query("From Bill")
	List<Bill> getBill();
	
	
	@Query("SELECT u.bills from User u WHERE u.userid=?1")
	List<Bill> getuserBill(String id);

	
	
}
