import { Injectable } from '@angular/core';
import { UserServiceService } from '../user service/user-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  loggedInUser={loggedOut:true};
  validCredentials:boolean = true;
  accessToken: string; // JWT token
  redirectUrl = '/';
  loggedIn:boolean = false;


  name:string;
  baseUrl = environment.baseUrl;
  private token: string;
  error: string = "Login Failed";
 public  role:string;
 role1:string;
  isAdmin:boolean=false;
  clickedOnAdd:boolean=false;
  addedToCart:boolean=false;

  userName:string="null";


  username:string;
 
admin:string;
user:string;
vendor:string;

  
  authenticateSpring(user:string,password:string):Observable<any> {
    let credentials = btoa(user+':'+password);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic '+credentials)
    return this.httpClient.get(this.baseUrl+"auth-service/authenticate", {headers})
  }
  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }


  constructor(private userService:UserServiceService,public router: Router,private httpClient:HttpClient) { }






  authenticateUser(user) {

    this.authenticateSpring(user.username,user.password).subscribe(
      (data)=>{


        console.log("Role is "+data.role)
        this.role=data.role;
this.role1=data.role;


        this.loggedInUser = user.username;

        this.username=user.username;
console.log("Username from auth "+this.username)

        this.validCredentials = true;
        if(data.role == 'ADMIN')
        this.isAdmin=true;
        this.loggedIn = true;

     this.accessToken=data.token;
     console.log("Token generated is")
     console.log(this.accessToken);

           this.router.navigate(['item-info']);
      },
      (error)=>{
        this.validCredentials = false;
        console.log(error);
        console.log("ERROR:Not Correct Credentials");
   
      }
      )
  }

  




  logout() {


    this.loggedInUser = {loggedOut:true};

this.isAdmin=false;
this.loggedIn=false;


    
   
    this.clickedOnAdd = false;
    this.addedToCart = false;




    this.router.navigate(['homepage']);
  
  }



}
