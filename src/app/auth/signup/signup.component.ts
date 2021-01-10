import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { LoginService } from 'src/app/services/login.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
chosepat = 0 ;
 constructor(private signUp: SignupService, private signInService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onclick(form: NgForm){
    const data = form.form.value;
    delete data.user;
    console.log(data);
    if (this.chosepat === 1){
      this.signUp.signupd(data).subscribe((res: any) => {
        console.log(JSON.parse(res._body).token);
        this.signInService.storeToken(JSON.parse(res._body).token);
        this.router.navigate(['/homed']);
      }, err => {
        console.log(err);
      });
    }
    if (this.chosepat === 2){
      this.signUp.signupp(data).subscribe((res: any) => {
        console.log(JSON.parse(res._body).token);
        this.signInService.storeToken(JSON.parse(res._body).token);
        this.router.navigate(['/homep']);
      }, err => {
        console.log(err);
      });
    }

  }
// tslint:disable-next-line:typedef
ondoctor(){
  this.chosepat = 1;
}
// tslint:disable-next-line:typedef
onpatient(){
  this.chosepat = 2;
  }
}

