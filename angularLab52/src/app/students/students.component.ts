import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any;

  constructor(private service: StudentService) {

  }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (data) => {
        this.students = data;
      },
      (err) => { console.log(err); })
  }

}
