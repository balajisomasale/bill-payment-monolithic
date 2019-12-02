import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user service/user-service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from './User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  user: User;
  userCreated: boolean;
  error: string;


  gender1=["Male","Female"];
  
  constructor(private formBuilder: FormBuilder,private userService:UserServiceService) { }
  get userid() {
    return this.signUpForm.get('userid');
  }
  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get gender() {
    return this.signUpForm.get('gender');
  }
  get age() {
    return this.signUpForm.get('age');
  }

  get contact() {
    return this.signUpForm.get('contact');
  }

  get pan() {
    return this.signUpForm.get('pan');
  }

  get aadhar_number() {
    return this.signUpForm.get('aadhar_number');
  }

  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      userid: ['', [
        Validators.required,
        this.isuseridTaken
      ]],
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [
        Validators.required
      ]],
      age: ['', [
        Validators.required
      ]],
      gender: ['', [
        Validators.required
      ]],
      contact: ['', [
        Validators.required
      ]],
      pan: ['', [
        Validators.required
      ]],
      aadhar_number: ['', [
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

  isuseridTaken(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value === 'admin') {
      return { 'useridTaken': true };
    } else {
      return null;
    }
  }


}
