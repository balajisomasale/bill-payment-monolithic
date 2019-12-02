package com.cognizant.billpaymentsystem;

import static org.junit.Assert.assertEquals;

import java.sql.Date;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cognizant.mfrp.agile.api.billpaymentsystem.BillPaymentSystemApplication;
import com.cognizant.mfrp.agile.api.billpaymentsystem.exception.UserAlreadyExistsException;
import com.cognizant.mfrp.agile.api.billpaymentsystem.exception.VendorAlreadyExistsException;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.Bill;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.User;
import com.cognizant.mfrp.agile.api.billpaymentsystem.model.Vendor;
import com.cognizant.mfrp.agile.api.billpaymentsystem.repository.BillRepository;
import com.cognizant.mfrp.agile.api.billpaymentsystem.repository.UserRepository;
import com.cognizant.mfrp.agile.api.billpaymentsystem.repository.VendorRepository;
import com.cognizant.mfrp.agile.api.billpaymentsystem.service.AppUserDetailsService;
import com.cognizant.mfrp.agile.api.billpaymentsystem.service.AppVendorDetailsService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = BillPaymentSystemApplication.class)
public class BillPaymentSystemApplicationTests {

	@Autowired
	private UserRepository userrepository;
	
	
	@Autowired
	private VendorRepository vendorrepo;
	@Autowired
	private AppUserDetailsService userservice;;

       @Mock
       AppVendorDetailsService vendorService;

       @Before
       public void init() {
              MockitoAnnotations.initMocks(this);
       }
       
       @Autowired
       private BillRepository billrepo;

          
     @Autowired
     private UserRepository urepository;
    
     
     
     @Test
     public void testUserID() throws UserAlreadyExistsException{
          User dr= new User();
          dr.setUserid("user");
          dr.setAadhar_number("asada");
          dr.setContact(1234);
          dr.setFirstName("dsada");
          dr.setGender("male");
          dr.setLastName("ashdkasjd");
          dr.setPan("sadasd");
          dr.setPassword("pwd");
          User u=urepository.findByUserid("user");
          assertEquals(u.getUserid(),dr.getUserid());
     }


@Test
public void testVendorID() throws VendorAlreadyExistsException{
     Vendor dr= new Vendor();
      String str="2019-11-11";
     Date d= Date.valueOf(str);
     dr.setUsername("vendor");
     dr.setAddress("asdsad");
     dr.setCert_issue_date(d);
     dr.setCert_validity_date(d);
     dr.setContact_number(123);
     dr.setCountry("india");
     dr.setName("balaji");
dr.setReg_no("asdasd");
dr.setPayment_gateway("Paytm");
dr.setState("andhra");
dr.setVendor_email("sadasd");
dr.setVendor_type("DTH");
dr.setWebsite("asdd");
dr.setYear_establishment(2312);
dr.setPassword("pwd");

     
     Vendor v1=vendorrepo.findByUsername("vendor");
    // User u=urepository.findByUserid("user");
     assertEquals(v1.getUsername(),dr.getUsername());
}



@Test
public void testBillID() {
     Bill dr= new Bill();
      String str="2019-11-11";
     Date d= Date.valueOf(str);
     dr.setAmt(123);
     dr.setConsumerid("1213");
     dr.setId(1);
     User u=urepository.findByUserid("user");
     dr.setUser(u);

   
     Vendor v1=vendorrepo.findByUsername("vendor");
     dr.setVendor(v1);
     
     
     Bill bill =billrepo.findById(1);
    // User u=urepository.findByUserid("user");
     assertEquals(dr.getId(),bill.getId());
}
}
