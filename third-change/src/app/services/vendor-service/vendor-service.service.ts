import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../site/signup/User';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { vendor } from '../../site/vendor-signup/vendor';
import { AuthServiceService } from '../Authentication-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  constructor(private router:Router,private http:HttpClient,private authservice:AuthServiceService) { }
vendorExists:boolean=false;
  addVendor(vendor:any) {

let NewVendors:vendor={id:vendor["id"],name:vendor["name"],reg_no:vendor["reg_no"],vendor_type:vendor["vendor_type"], address: vendor['address'], country: vendor['country'], state:vendor['state'],vendor_email:vendor['vendor_email'],contact_number: vendor['contact_number'], website: vendor['website'],username:vendor['username'],password:vendor['password'],cert_issue_date:vendor['cert_issue_date'],cert_validity_date:vendor['cert_validity_date'],year_establishment:vendor['year_establishment'],payment_gateway:vendor['payment_gateway']};
this.addVendors(NewVendors).subscribe(data=>
  {

    this.vendorExists=data;
//console.log("User Existing details are "+data);
   
      this.vendorExists=false;
       console.log("inside if vendor serivce");
      this.router.navigate(['login']);
  
  },
  (error)=>{
    this.vendorExists=true;
    console.log(error);}
  )

}
  
addVendors(vendor1:vendor):Observable<any>
{

  return this.http.post<vendor>(environment.baseUrl+"bill-payment-system-service/vendor",vendor1)
}


}
