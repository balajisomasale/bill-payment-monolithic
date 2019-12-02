import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from '../signup/User';
import { UserServiceService } from '../../services/user service/user-service.service';
import { VendorServiceService } from 'src/app/services/vendor-service/vendor-service.service';

@Component({
  selector: 'app-vendor-signup',
  templateUrl: './vendor-signup.component.html',
  styleUrls: ['./vendor-signup.component.css']
})
export class VendorSignupComponent implements OnInit {

  signUpForm: FormGroup;
  user: User;
  userCreated: boolean;
  error: string;
  bills=["Electricity","Telephone","DTH","Insurance","Tax","Credit Card","Loan account","Others"];
  payment=["Google Pay","Paytm","Internet Banking","Credit/Debit Card"];
  countries=["India","USA","China","Japan","Australia"];
  State=["Andhra","Goa","Karnataka","Tamilnadu","Madya Pradesh","Telangana"];
  
  constructor(private formBuilder: FormBuilder,private vendorService:VendorServiceService) { }
  get username() {
    return this.signUpForm.get('username');
  }
  
  get password() {
    return this.signUpForm.get('password');
  }
  get name() {
    return this.signUpForm.get('name');
  }
  get reg_no() {
    return this.signUpForm.get('reg_no');
  }
  get vendor_type() {
    return this.signUpForm.get('vendor_type');
  }
  get vendor_email() {
    return this.signUpForm.get('vendor_email');
  }
  get address() {
    return this.signUpForm.get('address');
  }

  get country() {
    return this.signUpForm.get('country');
  }

  get state() {
    return this.signUpForm.get('state');
  }

  get contact_number() {
    return this.signUpForm.get('contact_number');
  }
  get website() {
    return this.signUpForm.get('website');
  }
  get cert_issue_date() {
    return this.signUpForm.get('cert_issue_date');
  }
  get cert_validity_date() {
    return this.signUpForm.get('cert_validity_date');
  }
  get year_establishment() {
    return this.signUpForm.get('year_establishment');
  }
  get payment_gateway() {
    return this.signUpForm.get('payment_gateway');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        this.isusernameTaken
      ]],
      name: ['', [
        Validators.required
      ]],
      reg_no: ['', [
        Validators.required
      ]],
      age: ['', [
        Validators.required
      ]],
      vendor_type: ['', [
        Validators.required
      ]],
      address: ['', [
        Validators.required
      ]],
      country: ['', [
        Validators.required
      ]],
      state: ['', [
        Validators.required
      ]],
      vendor_email: ['', [
        Validators.required
      ]],
      contact_number: ['', [
        Validators.required
      ]],
      website: ['', [
        Validators.required
      ]],
      cert_issue_date: ['', [
        Validators.required
      ]],
      cert_validity_date: ['', [
        Validators.required
      ]],
      year_establishment: ['', [
        Validators.required
      ]],
      payment_gateway: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]],
      confirmPassword: ['', [
        Validators.required,
        this.matchConfirmPassword.bind(this)
      ]]
    })
  }

  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.signUpForm) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signUpForm.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }

  isusernameTaken(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value === 'admin') {
      return { 'useridTaken': true };
    } else {
      return null;
    }
  }
}