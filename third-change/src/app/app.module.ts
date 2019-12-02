import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './site/signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { VendorSignupComponent } from './site/vendor-signup/vendor-signup.component';
import { ItemEditComponent } from './site/item-edit/item-edit.component';
import { ItemInfoComponent } from './site/item-info/item-info.component';

import { BillItemDetailsComponent } from './bill-item-details/bill-item-details.component';
import { VendorItemInfoComponent } from './vendor-item-info/vendor-item-info.component';
import { SearchComponent } from './search/search.component';
import { HelppageComponent } from './helppage/helppage.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
   
    LoginComponent,
   
    HomepageComponent,
   
    VendorSignupComponent,
    ItemEditComponent,
    ItemInfoComponent,
    
    BillItemDetailsComponent,
    VendorItemInfoComponent,SearchComponent, HelppageComponent, PaymentgatewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
