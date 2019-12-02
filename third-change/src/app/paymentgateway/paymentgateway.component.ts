import { Component, OnInit, Input } from '@angular/core';
import { vendor } from '../site/vendor-signup/vendor';
import { Bill } from '../Bill';
import { AuthServiceService } from '../services/Authentication-service/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BillServiceService } from '../services/Bill Service/bill-service.service';

@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.css']
})
export class PaymentgatewayComponent implements OnInit {

  Bills:Bill[];
  items:Bill;

 paid:Boolean=false;
  constructor(private authservice:AuthServiceService,private route:ActivatedRoute,private service:BillServiceService,private router:Router) { }

  ngOnInit() {
    


    const vendorId =this.route.snapshot.paramMap.get('username');
this.service.getBill(this.authservice.username).subscribe(((data)=>
{this.Bills=data;
  console.log(data)
  for(let i=0;i<this.Bills.length;i++){
    if(this.Bills[i].vendor.username==vendorId)
    this.items=this.Bills[i]
  }
console.log(this.items)}))


  }


  pay()
  {
    this.paid=true;
  //alert("Payment Succesfull");
  this.router.navigate[('login')]

  }

}
