import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceService } from './services/Authentication-service/auth-service.service';
import { Router } from '@angular/router';
import { vendor } from './site/vendor-signup/vendor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
  ngOnInit(){
    this.loggedIn();
    this.role=this.authService.role1;
    this.router.navigate(['homepage']);
  }
  constructor(private authService:AuthServiceService,public router: Router) {  
  }
  title = 'Bill Payment System';
  isLoggedIn:boolean = false;
  role:String;



  // @Input() vendor1:vendor;

  
 

  loggedIn():boolean {
    if(!this.authService.loggedInUser.loggedOut){
      this.isLoggedIn = true;
     // console.log(this.isLoggedIn)
     
      return true
    }
    else{
      this.isLoggedIn = false;
      return false;
    }
  }
  clickOnAddCart(){
    // this.foodService.clickedOnAdd = false;
    // this.foodService.addedToCart = false;
  }

}
