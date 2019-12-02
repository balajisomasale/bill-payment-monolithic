package com.cognizant.mfrp.agile.api.billpaymentsystem.exception;

public class UserAlreadyExistsException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UserAlreadyExistsException() {
		super("User already exists");
	}

}
