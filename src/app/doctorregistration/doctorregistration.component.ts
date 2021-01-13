import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorregistration',
  templateUrl: './doctorregistration.component.html',
  styleUrls: ['./doctorregistration.component.css']
})
export class DoctorregistrationComponent implements OnInit {
  getIndex(item: any) {
    return this.doctors.indexOf(this.doctors.filter((i, index) => item.name == i.name)[0])
}
trackByIndex:any;

 n="";
 d="";
 a="";
 i=0;
 show=0;
 var=0;
 conf=0;
 change(k:number){
   this.show=1;
   this.var=k;
  
 }
 HI(){
   if(this.var==0){
     return 1;
   }
   else{
     return 0;
   }

 }
 SH(){
   return this.show;
 }
 r(){
   return this.var;
 }
 display(){
   console.log(this.var);
 }
 confirmation(){
   this.conf=1;
   
 }
 dispalyconfirmation(){
  return this.conf;
 }


  doctors= [
    {
      name:'seif eldeen amr',
      department:'Ortho-Spine Surgery Consultant',
      area :'helioples', 
      fees :'200',
      gender:'male',
      email:'seifeldeenamr@gmail.com',
      d_1:'3 pm',
      d_2:'4 pm',
      d_3:'5 pm'


  },
  {
    name:'marwan amr',
    department:'Internal Medicine ',
    area :'hadayk'
    , 
      fees :'150' ,
      gender:'male',
      email:'marwanamr@gmail.com',d_1:'7 pm',
      d_2:'8 pm',
      d_3:'9 pm'


  },
  {
    name:'nour eldeen amr',
    department:'consultant in clinical nutrition',
    area :'feisel', 
    fees :'100' 
    ,
      gender:'male',
      email:'noureldeenamr@gmail.com',d_1:'9 pm',
      d_2:'10 pm',
      d_3:'11 pm'


  },
  {
    name:'hayat mohamed',
    department:'dermatolgy',
    area :'dokki' , 
    fees :'250',
    gender:'female',
    email:'hayatmohamed@gmail.com',d_1:'5 pm',
    d_2:'6 pm',
    d_3:'7 pm'

  },
  {

    name:'thoraya ahmed',
    department:'neurology',
    area :'giza' 
    , 
      fees :'250',
      gender:'female',
      email:'thorayaahmed@gmail.com', d_1:'6 pm',
      d_2:'7 pm',
      d_3:'8 pm'

  }
  
,  {
  name:'abdhamidmohamed',
  department:'ear,nose and throat',
  area :'maadi' 
  , 
  fees :'200',
  gender:'male',
  email:'abdhamidmohamed@gmail.com'
,
  d_1:'3 pm',
  d_2:'4 pm',
  d_3:'5 pm'

}
]

  constructor() { }

  ngOnInit(): void {
  }

}
