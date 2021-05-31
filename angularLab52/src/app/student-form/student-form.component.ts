import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Model/Student';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @Input() Message: string = "Update";
  @Input() IsAdd: string = "true";
  student: Student = new Student(null);
  id: number;
  constructor(private active: ActivatedRoute, private router: Router, private service: StudentService) {
    this.id = active.snapshot.params.id;
  }

  ngOnInit(): void {
    if (!this.IsAddForm)
      this.service.get(this.id).subscribe((res) => {
        console.log(res);
        //return this.student = new Student(res);
        return this.student.Update(res);
      },
        (err) => {
          return console.log(err);
        });
  }

  get IsAddForm() {
    return ["True", "true", "TRUE"].some(v => v == this.IsAdd);
  }

  confirmAction() {
    if (this.IsAddForm)
      this.service.add(this.student);
    else
      this.service.update(this.student);

    this.router.navigate(["/students"]);

  }

}
