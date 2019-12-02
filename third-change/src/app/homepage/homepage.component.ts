import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/Authentication-service/auth-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private authService:AuthServiceService) { }

  ngOnInit() {



    
  }

}
