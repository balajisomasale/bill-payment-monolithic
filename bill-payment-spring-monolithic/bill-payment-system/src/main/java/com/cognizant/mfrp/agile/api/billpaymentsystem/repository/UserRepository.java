package com.cognizant.mfrp.agile.api.billpaymentsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.mfrp.agile.api.billpaymentsystem.model.User;


public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUserid(String userid);
	
	@Query("From User")
	List<User> getUser();


}
