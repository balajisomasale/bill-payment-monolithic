package com.cognizant.mfrp.agile.api.billpaymentsystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;



@Entity
@Table(name = "bill")
public class Bill {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bill_id")
	private int id;
	
	@NotNull
	@Column(name = "consumer_id")
	private String consumerid;
	
	@NotNull
	@Column(name = "amt")
	private int amt;
	
	
	@ManyToOne
    @JoinColumn
    private User user;
	

	@ManyToOne
    @JoinColumn
    private Vendor vendor;
	
	
	public Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getConsumerid() {
		return consumerid;
	}

	public void setConsumerid(String consumerid) {
		this.consumerid = consumerid;
	}

	public int getAmt() {
		return amt;
	}

	public void setAmt(int amt) {
		this.amt = amt;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Bill [id=" + id + ", consumerid=" + consumerid + ", amt=" + amt + ", user=" + user + ", vendor="
				+ vendor + "]";
	}


	
	
}
