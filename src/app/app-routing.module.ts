import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthserviceService } from './services/authservice.service';
import { PatlistComponent } from './reservations/patlist/patlist.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { DoctorregistrationComponent } from './doctorregistration/doctorregistration.component';


const routes: Routes = [
{ path: ''  , redirectTo: 'signin' , pathMatch: 'full'},
{path: 'signup', component: SignupComponent} ,
{path: 'signin', component: SigninComponent} ,
{path: 'homed', component: DoctorInfoComponent, canActivate: [AuthserviceService]},
{path: 'homep', component: PatientInfoComponent, canActivate: [AuthserviceService]},
{path: 'reservations', component: PatlistComponent, canActivate: [AuthserviceService]},
{path: 'appointments', component: DoctorAppointmentsComponent, canActivate: [AuthserviceService]},
{path: 'bookings', component: DoctorregistrationComponent, canActivate: [AuthserviceService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
