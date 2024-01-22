import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { RegisterComponent } from './registration-flow/register/register.component';

import { GetOtpComponent } from './registration-flow/get-otp/get-otp.component';
import { VerifiedComponent } from './registration-flow/verified/verified.component';
import { AdharComponent } from './registration-flow/adhar/adhar.component';
import { TakePhotoComponent } from './registration-flow/take-photo/take-photo.component';
import { PreviewComponent } from './registration-flow/preview/preview.component';
import { VehicleSelectionComponent } from './E-booking-flow/vehicle-selection/vehicle-selection.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',pathMatch:"full",redirectTo:'/register'},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'t&c',component:TermsConditionsComponent},
  {path:'register',component:RegisterComponent},
  {path:'get-otp',component:GetOtpComponent},
  {path:'verified',component:VerifiedComponent},
  {path:'adhar',component:AdharComponent},
  {path:'take-photo',component:TakePhotoComponent},
  {path:'preview',component:PreviewComponent},
  {path:'vehicle-selection',component:VehicleSelectionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
