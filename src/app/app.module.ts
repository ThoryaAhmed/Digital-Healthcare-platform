import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PatlistComponent } from './reservations/patlist/patlist.component';
import { PatviewComponent } from './reservations/patview/patview.component';
import { PatitemComponent } from './reservations/patlist/patitem/patitem.component';
import { HeaderComponent } from './header/header.component';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { DoctorAccountComponent } from './doctor-account/doctor-account.component';
import { PatientAccountComponent } from './patient-account/patient-account.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PatlistComponent,
    PatviewComponent,
    PatitemComponent,
    HeaderComponent,
    DoctorAccountComponent,
    PatientAccountComponent,
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
