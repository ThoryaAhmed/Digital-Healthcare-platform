import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppointmentsFields} from 'src/app/classes/appointmentsFields';


@Injectable({
  providedIn: 'root'
})
export class InfoService {
 private url="https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient ) {  }
 

  getData(): Observable <any> {
    return this.http.get(this.url);
  }
  createData(opost:AppointmentsFields):Observable <any> {
    return this.http.post(this.url,opost);

  }
  
}
