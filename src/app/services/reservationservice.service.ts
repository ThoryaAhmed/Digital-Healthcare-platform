import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ReservationserviceService {

  constructor(private http: Http) { }
// tslint:disable-next-line:typedef
reservedpatients(){
return this.http.get('http://127.0.0.1:8000/diaa');
}
}
