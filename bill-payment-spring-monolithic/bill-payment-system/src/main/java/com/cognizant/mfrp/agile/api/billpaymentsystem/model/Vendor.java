package com.cognizant.mfrp.agile.api.billpaymentsystem.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "vendor")
public class Vendor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "vr_id")
	private int id;
	
	@NotNull
	@Column(name = "vr_uname")
	private String username;
	
	@NotNull
	@Column(name = "vr_password")
	private String password;
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@NotNull
	@Column(name = "vr_name")
	private String name;
	
	@NotNull
	@Column(name = "vr_reg_no")
	private String reg_no;
	
	@NotNull
	@Column(name = "vr_type")
	private String vendor_type;
	
	@NotNull
	@Column(name = "vr_address")
	private String address;
	
	@NotNull
	@Column(name = "vr_country")
	private String country;
	
	@NotNull
	@Column(name = "vr_state")
	private String state;
	
	@NotNull
	@Column(name = "vr_email")
	private String vendor_email;
	
	@NotNull
	@Column(name = "vr_contact")
	private long contact_number;
	
	@NotNull
	@Column(name = "vr_website")
	private String website;

	@NotNull
	@Column(name = "vr_cert_issue_date")
	private Date cert_issue_date;
	
	@NotNull
	@Column(name = "vr_cert_validity_date")
	private Date cert_validity_date;
	
	@NotNull
	@Column(name = "vr_year")
	private int year_establishment;
	
	@NotNull
	@Column(name = "vr_payment")
	private String payment_gateway;
	
	@JsonIgnore
	@ManyToMany
	@JoinTable(name = "vendor_role", joinColumns = @JoinColumn(name = "vrr_vr_id"), inverseJoinColumns = @JoinColumn(name = "vrr_ro_id"))
	private List<Role> roles;

	
	@OneToMany(mappedBy="vendor",cascade=CascadeType.ALL)
	private List<Bill> bills;
	
//	public List<Bill> getBills() {
//		return bills;
//	}

	public void setBills(List<Bill> bills) {
		this.bills = bills;
	}

	public int getId() {
		return id;
	}



	@Override
	public String toString() {
		return "Vendor [id=" + id + ", username=" + username + ", password=" + password + ", name=" + name + ", reg_no="
				+ reg_no + ", vendor_type=" + vendor_type + ", address=" + address + ", country=" + country + ", state="
				+ state + ", vendor_email=" + vendor_email + ", contact_number=" + contact_number + ", website="
				+ website + ", cert_issue_date=" + cert_issue_date + ", cert_validity_date=" + cert_validity_date
				+ ", year_establishment=" + year_establishment + ", payment_gateway=" + payment_gateway + ", roles="
				+ roles + "]";
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

//	@Override
//	public String toString() {
//		return "Vendor [id=" + id + ", username=" + username + ", password=" + password + ", name=" + name + ", reg_no="
//				+ reg_no + ", vendor_type=" + vendor_type + ", address=" + address + ", country=" + country + ", state="
//				+ state + ", vendor_email=" + vendor_email + ", contact_number=" + contact_number + ", website="
//				+ website + ", cert_issue_date=" + cert_issue_date + ", cert_validity_date=" + cert_validity_date
//				+ ", year_establishment=" + year_establishment + ", payment_gateway=" + payment_gateway + ", role="
//				+ role + "]";
//	}



	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getReg_no() {
		return reg_no;
	}

	public void setReg_no(String reg_no) {
		this.reg_no = reg_no;
	}

	public String getVendor_type() {
		return vendor_type;
	}

	public void setVendor_type(String vendor_type) {
		this.vendor_type = vendor_type;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getVendor_email() {
		return vendor_email;
	}

	public void setVendor_email(String vendor_email) {
		this.vendor_email = vendor_email;
	}

	public long getContact_number() {
		return contact_number;
	}

	public void setContact_number(long contact_number) {
		this.contact_number = contact_number;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public Date getCert_issue_date() {
		return cert_issue_date;
	}

	public void setCert_issue_date(Date cert_issue_date) {
		this.cert_issue_date = cert_issue_date;
	}

	public Date getCert_validity_date() {
		return cert_validity_date;
	}

	public void setCert_validity_date(Date cert_validity_date) {
		this.cert_validity_date = cert_validity_date;
	}

	public int getYear_establishment() {
		return year_establishment;
	}

	public void setYear_establishment(int year_establishment) {
		this.year_establishment = year_establishment;
	}

	public String getPayment_gateway() {
		return payment_gateway;
	}

	public void setPayment_gateway(String payment_gateway) {
		this.payment_gateway = payment_gateway;
	}

}

