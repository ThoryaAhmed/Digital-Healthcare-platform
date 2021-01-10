import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from '../../shared/patient.model';

@Component({
  selector: 'app-patitem',
  templateUrl: './patitem.component.html',
  styleUrls: ['./patitem.component.css']
})
export class PatitemComponent implements OnInit {

  constructor() { }
  @Output()
  clickedd = new EventEmitter<void>();
  @Input()
  patient!: Patient;
  @Output() selecteditem = new EventEmitter<void>();
// tslint:disable-next-line:typedef
onclick(){
this.selecteditem.emit();
this.clickedd.emit();
}
// tslint:disable-next-line:typedef
  ngOnInit(): void {
  }

}
