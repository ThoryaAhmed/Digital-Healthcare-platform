import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router: Router, private service: LoginService) { }

  // tslint:disable-next-line:typedef
  canActivate()
  {
    if (this.service.isLoggedIn()) {
      return true;
    } else {
      console.log('here');
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
