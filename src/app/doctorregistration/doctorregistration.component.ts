import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorregistration',
  templateUrl: './doctorregistration.component.html',
  styleUrls: ['./doctorregistration.component.css']
})
export class DoctorregistrationComponent implements OnInit {
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
      email:'seifeldeenamr@gmail.com'


  },
  {
    name:'marwan amr',
    department:'Internal Medicine ',
    area :'hadayk'
    , 
      fees :'150' ,
      gender:'male',
      email:'marwanamr@gmail.com'


  },
  {
    name:'nour eldeen amr',
    department:'consultant in clinical nutrition',
    area :'feisel', 
    fees :'100' 
    ,
      gender:'male',
      email:'noureldeenamr@gmail.com'


  },
  {
    name:'hayat mohamed',
    department:'dermatolgy',
    area :'dokki' , 
    fees :'250',
    gender:'female',
    email:'hayatmohamed@gmail.com'

  },
  {

    name:'thoraya ahmed',
    department:'neurology',
    area :'giza' 
    , 
      fees :'250',
      gender:'female',
      email:'seifeldeenamr@gmail.com'

  },
  {
    name:'seif eldeen amr',
    department:'orthopedics',
    area :'helioples' 
    , 
      fees :'50'


}
,  {
  name:'abdhamidmohamed',
  department:'ear,nose and throat',
  area :'maadi' 
  , 
  fees :'200',
  gender:'male',
  email:'abdhamidmohamed@gmail.com'

  

}
]

  constructor() { }

  ngOnInit(): void {
  }

}
