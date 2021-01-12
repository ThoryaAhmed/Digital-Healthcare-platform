import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { DoctorFields} from 'src/app/classes/doctorFields';


@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {
  doctors1=[{userName:"hayat",
  specialization:"dentist",
  email:"hayat.13@gmail.com",
  area:"nasr city",
  birthDate:"13/6/1999",
  phone:"01124327889",
  gender:"female"}]
  url="https://jsonplaceholder.typicode.com/posts";

  constructor(private service:InfoService ) { }

  doctors!: DoctorFields[];
  ngOnInit(): void {

    this.service.getData()
    .subscribe(doctorFields =>{
      this.doctors=doctorFields;
       console.log(this.doctors);
     } );
 
  }

}