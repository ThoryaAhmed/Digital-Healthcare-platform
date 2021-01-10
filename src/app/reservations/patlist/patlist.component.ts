import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Patient } from '../shared/patient.model';
import { ReservationserviceService } from 'src/app/services/reservationservice.service';


@Component({
  selector: 'app-patlist',
  templateUrl: './patlist.component.html',
  styleUrls: ['./patlist.component.css']
})
export class PatlistComponent implements OnInit {
  @Output() selectedpatient = new EventEmitter<Patient>();
  @Output() featureselected = new EventEmitter<void>();
  constructor(private service: ReservationserviceService) { }
  patients: Patient[] = [
    new Patient('Thorya Ahmed', 'thoryaabdelzaher@gmail.com', 'Female', 'NONE', 'sunday', '7 PM'),
    new Patient('Diaa Ahmed', 'sasyahmed11@gmail.com', 'male', 'NONE', 'satday', '7 PM'),
    new Patient('Fatma Ahmed', 'temoahmed30@gmail.com', 'Female', 'NONE', 'monday', '7 PM'),
  ];
// tslint:disable-next-line:typedef
patientselected(patient: Patient){
this.selectedpatient.emit(patient);
}
// tslint:disable-next-line:typedef
ifclick(){
this.featureselected.emit();
}
  ngOnInit(): void {
this.service.reservedpatients().subscribe((res: any) => {
this.patients.push(res);
}, err => {
  console.log(err);
});
  }

}
