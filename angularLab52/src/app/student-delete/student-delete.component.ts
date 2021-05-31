import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Model/Student';
import { StudentService } from '../Services/student.service';
@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  student: Student = new Student(null);
  id: number;
  constructor(private active: ActivatedRoute, private router: Router, private service: StudentService) {
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

  deleteStudent() {
    this.service.delete(this.student.id);
    this.router.navigate(["/students"]);
  }
}
