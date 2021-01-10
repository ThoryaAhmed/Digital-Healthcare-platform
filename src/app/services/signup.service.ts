import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SignupService {
constructor(private http: Http){}
// tslint:disable-next-line:typedef
signupd(data: any){
    console.log(data);
    return this.http.post('http://127.0.0.1:8000/DoctorSignUp', data);
}
// tslint:disable-next-line:typedef
signupp(data: any){
    console.log(data);
    return this.http.post('http://127.0.0.1:8000/PatientSignUp', data);
}

}

