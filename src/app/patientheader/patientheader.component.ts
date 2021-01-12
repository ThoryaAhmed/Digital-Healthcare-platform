import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientheader',
  templateUrl: './patientheader.component.html',
  styleUrls: ['./patientheader.component.css']
})
export class PatientheaderComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:typedef
  logout(){
    localStorage.removeItem('access_token');
  }

  ngOnInit(): void {
  }

}
