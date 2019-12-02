import { Component, OnInit } from '@angular/core';
import { vendor } from '../site/vendor-signup/vendor';
import { FoodService } from '../services/food.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:FoodService) { }
  
  searchKey:string;

  FilteredVendors:vendor[];
  
  //filterlist:fooditem[];
Vendors: vendor[] =[];


  ngOnInit() {
 // this._foodservice.getAllMenuItems().subscribe(data => this._foodservice.fooditem=data)
  console.log("From Search")

  this.service.getAllVendors().subscribe((data:vendor[])=>{this.Vendors=data;
  
  
  console.log(this.Vendors)   })



  }
  search()
  {
    this.FilteredVendors=this.Vendors.filter(vendor => vendor.vendor_type.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()))

this.service.getSubject().next(this.FilteredVendors)
    
  }
  
  }


