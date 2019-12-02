import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';

import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from './Authentication-service/auth-service.service';
import { vendor } from '../site/vendor-signup/vendor';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  vendorList:vendor[];

  subject=new Subject<vendor[]>();
  
  isAdmin:boolean = false;
  addedToCart:boolean = false;
  cartAddedId:number;
  isLoggedIn:boolean = false;
 
 
  clickedOnAdd:boolean = false;

  constructor(private router:Router,private httpClient:HttpClient,private authservice:AuthServiceService) { 

  
  this.getAllVendors().subscribe(data=>this.vendorList=data)



  console.log("inside food service after subscribing")

  }



  
getAllVendors():Observable<any>{

if(this.authservice.loggedIn){
this.isLoggedIn=true;
  const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.authservice.accessToken });
  return this.httpClient.get<vendor[]>(`${environment.baseUrl}`+'bill-payment-system-service/vendor',{headers})}
}
getVendorItem(username:string):Observable<any>
{
  const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.authservice.accessToken });
  return this.httpClient.get<vendor>(`${environment.baseUrl}`+'bill-payment-system-service/vendor'+"/"+username,{headers});
}


updateVendorItem(Vendor:vendor,username:String): Observable<void> {
  console.log("update menu")
  const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.authservice.accessToken });
  return this.httpClient.put<void>(`${environment.baseUrl}`+'bill-payment-system-service/vendor'+"/"+username,Vendor,{headers});

}

updateVendor(Vendor:vendor): Observable<any> {
  console.log("From update vendor fn")
  const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.authservice.accessToken });
  return this.httpClient.put<vendor>(`${environment.baseUrl}`+'bill-payment-system-service/vendor'+"/",Vendor,{headers});
window.alert("MOdified Successfully")
}

  getSubject():Subject<vendor[]>
  {

return  this.subject

  }



}
