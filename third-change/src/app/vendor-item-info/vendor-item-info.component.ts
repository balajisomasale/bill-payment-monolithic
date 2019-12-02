import { Component, OnInit, Input } from '@angular/core';
import { vendor } from '../site/vendor-signup/vendor';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/Authentication-service/auth-service.service';

@Component({
  selector: 'app-vendor-item-info',
  templateUrl: './vendor-item-info.component.html',
  styleUrls: ['./vendor-item-info.component.css']
})
export class VendorItemInfoComponent implements OnInit {

  constructor(private router:Router,private authservice:AuthServiceService) { }



  @Input() vendors:vendor;
  ngOnInit() {
  }


  showDetails()
  {
    this.router.navigate(['bills'])


   // console.log(this.vendors)
  }

}
