import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AuthServiceService } from 'src/app/services/Authentication-service/auth-service.service';

import { vendor } from '../vendor-signup/vendor';
import { FoodService } from '../../services/food.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent {

  isAdmin:boolean;
   cartAddedId:number;
   addedToCart:boolean;
role:any;
 disable:Boolean=false;

Vendors:vendor[]=[];

  constructor(private authservice:AuthServiceService,private foodService:FoodService,private router:Router){}
ngOnInit()
{

  
this.isAdmin=this.authservice.isAdmin;
this.role=this.authservice.role1;
console.log("Inside Item info .. role is "+this.role)



this.foodService.getAllVendors().subscribe((data:vendor[])=>{this.Vendors=data;
})
 this.foodService.getSubject().subscribe((data)=>{this.Vendors=data})
}


search(event:any)
{

//  this._foodservice.getItem(event.target.value).subscribe(filterlist=> this.filterlist=filterlist)

this.foodService.getSubject().next(event.target.value)
  
}

Disable()
{
  this.disable=true;
this.router.navigate[('homepage')];
}

displayAddToCart(id:number) {
  this.cartAddedId = id;
  console.log(this.cartAddedId)
}

// onAddToCart(itemId:number)
// {
//   console.log("From Clickedf");
//   this.addToCartClicked.emit(itemId);
// }

}
