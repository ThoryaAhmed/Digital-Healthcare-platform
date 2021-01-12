import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
   // tslint:disable-next-line:typedef
   logout(){
    localStorage.removeItem('access_token');
  }
// tslint:disable-next-line:typedef

  ngOnInit(): void {

}
}
