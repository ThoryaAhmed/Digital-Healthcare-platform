import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {
constructor(private http: Http){}
// tslint:disable-next-line:typedef
logind(data: any){
    console.log(data);
    return this.http.post('http://127.0.0.1:8000/DoctorSignIn', data);
}
// tslint:disable-next-line:typedef
loginp(data: any){
  console.log(data);
  return this.http.post('http://127.0.0.1:8000/PatientSignIn', data);
}

// tslint:disable-next-line:typedef
storeToken(token: any) {
    localStorage.setItem('access_token', token);
  }
  // tslint:disable-next-line:typedef
  storeGitoken(token: any) {
    localStorage.setItem('git_token', token);
  }
  // tslint:disable-next-line:typedef
  getToken(){
    return localStorage.getItem('access_token');
  }

// tslint:disable-next-line:typedef
isLoggedIn()
{
    if (localStorage.getItem('access_token')) {
        return true;
      } else {
        return false;
      }
}
}
