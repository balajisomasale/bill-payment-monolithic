import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/Authentication-service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup

  constructor(private formBuild:FormBuilder,private authService:AuthServiceService,private router:Router) { }

  ngOnInit() {
   // this.authService.username=this.Username();

    this.loginForm = this.formBuild.group({
      username: ['',[
        Validators.required
      ]],
      password: ['',[
        Validators.required
      ]]
    });

   
  }
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
  Username(){
    return this.loginForm.value['username'];
  }
 
  toSignup() {
  
    this.router.navigate(['signup'])
  }

  onSubmit() 
  {
  
  }


}
