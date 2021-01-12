import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReservationserviceService } from 'src/app/services/reservationservice.service';
import { Patient } from '../shared/patient.model';


@Component({
  selector: 'app-patlist',
  templateUrl: './patlist.component.html',
  styleUrls: ['./patlist.component.css']
})
export class PatlistComponent implements OnInit {
   show = 1 ;
   var = 0;
  constructor(private service: ReservationserviceService) { }
  patients: Patient[] = [
    new Patient('Thorya Ahmed', 'thoryaabdelzaher@gmail.com', 'Female', 'None', 'sunday', '7 PM'),
    new Patient('Diaa Ahmed', 'sasyahmed11@gmail.com', 'male', 'NONE', 'satrday', '9 PM'),
    new Patient('Fatma Ahmed', 'temoahmed30@gmail.com', 'Female', 'NONE', 'monday', '8 PM'),
  ];
// tslint:disable-next-line:typedef
ifclick(i: number){
this.show = 0 ;
this.var = i;
}
// tslint:disable-next-line:typedef
Show(){
return this.show;
}
// tslint:disable-next-line:typedef
r(){
return this.var;
}
  // tslint:disable-next-line:typedef
  ngOnInit() {
// this.service.reservedpatients().subscribe((res: any) => {
// this.patients.push(res);
// }, err => {
//   console.log(err);
// });
this.show = 1 ;
}

}
