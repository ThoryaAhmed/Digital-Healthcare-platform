import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../shared/patient.model';

@Component({
  selector: 'app-patview',
  templateUrl: './patview.component.html',
  styleUrls: ['./patview.component.css']
})
export class PatviewComponent implements OnInit {

  @Input()
  patientsel!: Patient;
  constructor() { }

  ngOnInit(): void {
  }

}
