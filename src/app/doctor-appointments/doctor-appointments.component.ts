import { Component, OnInit } from '@angular/core';
import { AppointmentsFields } from '../classes/appointmentsFields';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent implements OnInit {
  constructor(private service:InfoService ){}

  appointments=[];

  ngOnInit(): void {
  }

  setAppointment(firstDay:any , secondDay:any ,firstHour:any,secondHour:any,serviceType:any,fees:any){
    var opost=new AppointmentsFields();
    opost.service_type=serviceType.value;
    opost.Fees=fees.value;
    opost.from_day=firstDay.value;
    opost.to_day=secondDay.value;
    opost.from_time=firstHour.value;
    opost.to_time=secondHour.value;

    this.service.createData(opost).subscribe(data=>{
    
      console.log(JSON.stringify(opost));
    });
    firstDay.reset();
    firstHour.reset();
    secondDay.reset();
    secondHour.reset();
    serviceType.reset();
    fees.reset();

  }
   log(totalForm:any){
     console.log(totalForm);
   }
  
}
