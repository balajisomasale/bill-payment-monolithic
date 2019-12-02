import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { vendor } from '../vendor-signup/vendor';
import { FoodService } from '../../services/food.service';
import { AuthServiceService } from '../../services/Authentication-service/auth-service.service';
import { VendorServiceService } from 'src/app/services/vendor-service/vendor-service.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

// foodItem:fooditem={id:1,name:"",price:99.00,active:true,date_of_Launch:new Date('03/15/2017'),category:"Main Course",free_delivery:true,image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"};

 Vendor:vendor={id:1,name:"",reg_no:"123",vendor_type:"Electricity", address: "manikonda", country: "india", state:"Telangana",vendor_email:"balu9198",contact_number: 123, website: "asdf",username:"vendor",password:"$2a$10$BFhXZ4NyXXM.oYFVLccY7e3jbptEti0z2iW3j3EMm9y/d7lAUXzNK",cert_issue_date:new Date('03/15/2017'),cert_validity_date:new Date('03/15/2017'),year_establishment:2019,payment_gateway:"paytm"};
 bills=["Electricity","Telephone","DTH","Insurance","Tax","Credit Card","Loan account","Others"];

role:String;
 form:FormGroup;
 bool:boolean=false;

 

  constructor(private fb:FormBuilder,private foodService:FoodService,private route:ActivatedRoute,private router:Router,private authservice:AuthServiceService,private vendorservice:VendorServiceService) { }

 ngOnInit() {


  this.role=this.authservice.role1;
    this.bool=true;
   // const username1=this.route.snapshot.paramMap.get('username');



console.log("Username from authservice is "+this.authservice.username)
   this.foodService.getVendorItem(this.authservice.username).subscribe(data=>{this.Vendor=data
    
    this.Vendor.cert_issue_date=new Date(this.Vendor.cert_issue_date)
    this.Vendor.cert_issue_date.setDate(this.Vendor.cert_issue_date.getDate()+1);

    this.Vendor.cert_validity_date=new Date(this.Vendor.cert_validity_date)
    this.Vendor.cert_validity_date.setDate(this.Vendor.cert_validity_date.getDate()+1);




this.form=this.fb.group({

  username:[this.Vendor.username,[Validators.required]],
 password:['',[Validators.required]],
  name:[this.Vendor.name,[Validators.required]],
  reg_no:[this.Vendor.reg_no,[Validators.required]],
  vendor_type:[this.Vendor.vendor_type,[Validators.required]],
  address:[this.Vendor.address,[Validators.required]],
  country:[this.Vendor.country,[Validators.required]],
  state:[this.Vendor.state,[Validators.required]],
  vendor_email:[this.Vendor.vendor_email,[Validators.required]],
  contact_number:[this.Vendor.contact_number,[Validators.required]],
  website:[this.Vendor.website,[Validators.required]],
  cert_issue_date:[this.Vendor.cert_issue_date.toISOString().substring(0,10),[Validators.required]],
  cert_validity_date:[this.Vendor.cert_validity_date.toISOString().substring(0,10),[Validators.required]],
  year_establishment:[this.Vendor.year_establishment,[Validators.required]],
  payment_gateway:[this.Vendor.payment_gateway,[Validators.required]],

  confirmPassword: ['', [Validators.required,
    this.matchConfirmPassword.bind(this)]],



})
}
    
    );


   }
   matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.form) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.form.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }

get username()
{  return this.form.get('username');}

get password(){
  return this.form.get('password');
}

get name()
{  return this.form.get('name');}

get reg_no()
{  return this.form.get('reg_no');}


get vendor_type()
{  return this.form.get('vendor_type');}

get address()
{  return this.form.get('address');}

get country()
{  return this.form.get('country');}

get state(){
  return this.form.get('state');
}


get vendor_email()
{  return this.form.get('vendor_email');}


get contact_number()
{  return this.form.get('contact_number');}

get website()
{  return this.form.get('website');}

get cert_issue_date()
{  return this.form.get('cert_issue_date');}

get cert_validity_date(){
  return this.form.get('cert_validity_date');
}
get year_establishment()
{  return this.form.get('year_establishment');}

get payment_gateway(){
  return this.form.get('payment_gateway');
}

get confirmPassword() {
  return this.form.get('confirmPassword');
}



OnSubmit()
{

  let newItem:vendor=
  {
       
    id:this.Vendor.id,
    username:this.form.value["username"],
    password:this.form.value["password"],
    name:this.form.value["name"],
    reg_no:this.form.value["reg_no"],
    vendor_type:this.form.value["vendor_type"],
    address:this.form.value["address"],
    country:this.form.value["country"],
    state:this.form.value["state"],
    vendor_email:this.form.value["vendor_email"],
    contact_number:this.form.value["contact_number"],
    website:this.form.value["website"],
    cert_issue_date:new Date(this.form.value["cert_issue_date"]),
    cert_validity_date:new Date(this.form.value["cert_validity_date"]),
    year_establishment:this.form.value["year_establishment"],
    payment_gateway:this.form.value["payment_gateway"]};


console.log(newItem)
 // this.foodService.updateVendorItem(newItem,this.Vendor.username).subscribe(data=>{
   
 this.foodService.updateVendor(newItem).subscribe(data=>{
  window.alert("Editing done")
  this.router.navigate(['homepage']);
  
 })
 
  
}
  


  
}





