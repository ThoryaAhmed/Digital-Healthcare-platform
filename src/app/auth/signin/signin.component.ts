import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  chosepat = 0 ;

 constructor(private signInService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  signIn(form: NgForm){
    console.log(form.form.value);
    if (this.chosepat === 1){
      this.signInService.logind(form.form.value).subscribe((res: any) => {
        console.log(JSON.parse(res._body).token);
        this.signInService.storeToken(JSON.parse(res._body).token);
        this.router.navigate(['/homed']);
      }, err => {
        console.log(err);
      });
    }
    if (this.chosepat === 2){
      this.signInService.loginp(form.form.value).subscribe((res: any) => {
        console.log(JSON.parse(res._body).token);
        this.signInService.storeToken(JSON.parse(res._body).token);
        this.router.navigate(['/homed']);
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
