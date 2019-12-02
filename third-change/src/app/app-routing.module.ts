import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './site/signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuardServiceService } from './services/AuthGuard-Service/auth-guard-service.service';
import { VendorSignupComponent } from './site/vendor-signup/vendor-signup.component';
import { ItemEditComponent } from './site/item-edit/item-edit.component';
import { ItemInfoComponent } from './site/item-info/item-info.component';
import { BillItemDetailsComponent } from './bill-item-details/bill-item-details.component';
import { SearchComponent } from './search/search.component';
import { VendorItemInfoComponent } from './vendor-item-info/vendor-item-info.component';
import { HelppageComponent } from './helppage/helppage.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';




const routes: Routes = [
{ path: 'signup', component: SignupComponent},
{ path: 'login',component: LoginComponent},
 { path: 'search',component: SearchComponent},
{ path: 'homepage',component:HomepageComponent},
{ path: 'helppage',component:HelppageComponent},
{path:'vendor-signup',component:VendorSignupComponent},
{path:'vendor-item-info',component:VendorItemInfoComponent, canActivate: [AuthGuardServiceService]},


{path:'item-edit',component:ItemEditComponent, canActivate: [AuthGuardServiceService]},
{path:'item-info',component:ItemInfoComponent},
{path:'bills/:username',component:BillItemDetailsComponent},
{path:'paymentgateway/:username',component:PaymentgatewayComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
