import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { DoctorAccountComponent } from './doctor-account/doctor-account.component';
import { PatientAccountComponent } from './patient-account/patient-account.component';
import { AuthserviceService } from './services/authservice.service';

const routes: Routes = [
{ path: ''  , redirectTo: 'signin' , pathMatch: 'full'},
{path: 'signup', component: SignupComponent} ,
{path: 'signin', component: SigninComponent} ,
{path: 'homed', component: DoctorAccountComponent, canActivate: [AuthserviceService]},
{path: 'homep', component: PatientAccountComponent, canActivate: [AuthserviceService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
