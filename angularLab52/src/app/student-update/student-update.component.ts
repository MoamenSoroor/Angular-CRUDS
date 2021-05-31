import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  student:any;
  id:number;
  constructor(private active:ActivatedRoute,private service:StudentService) {
    this.id = active.snapshot.params.id;
   }

  ngOnInit(): void {
    this.service.get(this.id).subscribe((res)=> {
      console.log(res);
      return this.student = res;

    }, 
    (err)=> {
      return console.log(err);
    });
  }

  confirmUpdate()
  {
    this.service.update(this.student);
  }
}
