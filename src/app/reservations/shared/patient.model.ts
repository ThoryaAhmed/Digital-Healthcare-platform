export class Patient {
    public name: string ;
    public email: string ;
    public gender: string ;
    public medicalhistory: string ;
    public day: string ;
    public time: string ;
    constructor(name: string , email: string, gender: string, medicalhistory: string, day: string, time: string){
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.medicalhistory = medicalhistory;
        this.day = day;
        this.time = time;
 }
 }
