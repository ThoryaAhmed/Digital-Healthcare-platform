import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-doctorheader',
  templateUrl: './doctorheader.component.html',
  styleUrls: ['./doctorheader.component.css']
})
export class DoctorheaderComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:typedef
  logout(){
    localStorage.removeItem('access_token');
  }
  ngOnInit(): void {
  }

}
