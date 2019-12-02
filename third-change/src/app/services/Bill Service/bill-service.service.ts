import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Authentication-service/auth-service.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Bill } from 'src/app/Bill';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  constructor(private authservice:AuthServiceService,private httpClient:HttpClient) { }
  isLoggedIn:boolean = false;


  getAllBills():Observable<any>{

    if(this.authservice.loggedIn){
    this.isLoggedIn=true;
      const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.authservice.accessToken });
      return this.httpClient.get<Bill>(`${environment.baseUrl}`+'bill-payment-system-service/bill',{headers})}

    }
    
    
    
    getBill(username:string):Observable<any>
    {
      const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.authservice.accessToken });
      return this.httpClient.get<Bill[]>(`${environment.baseUrl}`+'bill-payment-system-service/bill'+"/"+username,{headers});
    }


}
