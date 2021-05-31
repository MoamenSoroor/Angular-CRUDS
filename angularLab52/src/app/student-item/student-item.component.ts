import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../Model/Student';

@Component({
  selector: '[app-student-item]',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {

  constructor() { }

  @Input() student:any;

  ngOnInit(): void {
    
  }

}
