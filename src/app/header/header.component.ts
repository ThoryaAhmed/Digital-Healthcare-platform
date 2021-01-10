import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() selectedfeature = new EventEmitter<string>() ;
  constructor() { }

  ngOnInit(): void {
  }
 // tslint:disable-next-line:typedef
 onselect(feature: string){

this.selectedfeature.emit(feature) ;

}
// tslint:disable-next-line:typedef
logout(){
  localStorage.removeItem('access_token');
}
}
