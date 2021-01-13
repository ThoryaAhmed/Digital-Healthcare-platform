import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PatlistComponent } from './reservations/patlist/patlist.component';
import { PatitemComponent } from './reservations/patlist/patitem/patitem.component';
import { HeaderComponent } from './header/header.component';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { DoctorheaderComponent } from './doctorheader/doctorheader.component';
import { PatientheaderComponent } from './patientheader/patientheader.component';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { DoctorregistrationComponent } from './doctorregistration/doctorregistration.component';
import { PaymentComponent } from './payment/payment.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PatlistComponent,
    PatitemComponent,
    HeaderComponent,
    DoctorheaderComponent,
    PatientheaderComponent,
    DoctorAppointmentsComponent,
    DoctorInfoComponent,
    PatientInfoComponent,
    DoctorregistrationComponent,
    PaymentComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
