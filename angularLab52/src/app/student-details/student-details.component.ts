import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../Model/Student';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student = new Student(null);
  id: number;
  constructor(private active: ActivatedRoute, private service: StudentService) {
    this.id = active.snapshot.params.id;
  }

  ngOnInit(): void {
    this.service.get(this.id).subscribe((res) => {
      console.log(res);
      return this.student = new Student(res);

    },
      (err) => {
        return console.log(err);
      });
  }

}
