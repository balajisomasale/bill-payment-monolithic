import { Component, OnInit, Input } from '@angular/core';
import { vendor } from '../site/vendor-signup/vendor';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../services/Authentication-service/auth-service.service';
import { FoodService } from '../services/food.service';
import { Bill } from '../Bill';
import { BillServiceService } from '../services/Bill Service/bill-service.service';

@Component({
  selector: 'app-bill-item-details',
  templateUrl: './bill-item-details.component.html',
  styleUrls: ['./bill-item-details.component.css']
})
export class BillItemDetailsComponent implements OnInit {

Bills:Bill[];
items:Bill;


  constructor(private router:Router,private route:ActivatedRoute,private authservice:AuthServiceService,private service:BillServiceService ) { }

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

  myfn()
  {

    this.router.navigate[("'/paymentgateway',this.items.vendor.username")]

  }


}
