import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { User } from '../../site/signup/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private router:Router,private http:HttpClient) { }
userExists:boolean=false;
  addUser(user:any) {

let NewUsers:User={firstName:user["firstName"],lastName:user["lastName"],password:user["password"], gender: user['gender'], age: user['age'], contact:user['contact'],pan:user['pan'],aadhar_number: user['aadhar_number'], userid: user['userid'] };
this.addUsers(NewUsers).subscribe(data=>
  {

    this.userExists=data;
//console.log("User Existing details are "+data);
   
      this.userExists=false;
       console.log("inside if user serivce"+this.userExists);
      this.router.navigate(['login']);
    
  },
  (error)=>{
    this.userExists=true;
    console.log(error);}
  )

}
  


addUsers(user:User):Observable<any>
{

  return this.http.post<User>(environment.baseUrl+"auth-service/users",user)
}

}
