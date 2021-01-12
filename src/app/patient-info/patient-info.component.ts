import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import {PatientFields} from 'src/app/classes/patientFields';


@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  patients1=[{userName:"hayat",
  medicalHistory:"diabetic",
  gender:"female",
  email:"hayat.13@gmail.com"
 }]
  url="https://jsonplaceholder.typicode.com/posts";

  constructor(private service:InfoService  ) { }

 patients!:PatientFields[];
  ngOnInit(): void {

    this.service.getData().subscribe(patientFields =>{
      this.patients=patientFields;
      console.log(this.patients);
     
    } );

  }

}
