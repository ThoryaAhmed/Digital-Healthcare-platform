import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Patient } from './reservations/shared/patient.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  patselect!: Patient;
  loadedfeature = 'reservations';
  // tslint:disable-next-line:no-inferrable-types
  showpatview: boolean = false;
// tslint:disable-next-line:typedef
patientwasselected(patient: Patient){
this.patselect = patient;
}
// tslint:disable-next-line:typedef
hide(){
this.showpatview = true;
}
// tslint:disable-next-line:typedef
onNavigate(feature: string){
this.loadedfeature = feature;
this.showpatview = false;
    }
}
