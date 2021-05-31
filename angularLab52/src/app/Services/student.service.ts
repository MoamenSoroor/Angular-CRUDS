import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private MyClient: HttpClient) {

  }

  BaseUrl = "http://localhost:3000/students";



  // getAll(){
  //   return this.MyClient.get(this.BaseUrl,{observe:'body'});
  // }

  getAll() {
    return this.MyClient.get(this.BaseUrl, { observe: 'body' });
  }

  get(id: number) {
    return this.MyClient.get(this.BaseUrl + "/" + id);
  }

  update(student: Student) {

    console.log("put student!!!!!!");
    console.log(student);
    console.log(this.BaseUrl + "/" + student.id);
    return this.MyClient.put(this.BaseUrl + "/" + student.id, student)
      .subscribe(response => console.log(response));
  }

  add(student: Student) {
    console.log("post student!!!!!!");
    console.log(student);
    let obj = student.toAnyObject();
    delete obj.id;
    return this.MyClient.post(this.BaseUrl, obj)
      .subscribe(response => console.log(response));
  }

  delete(id: number) {
    return this.MyClient.delete(this.BaseUrl + "/" + id)
      .subscribe(response => console.log(response));

  }

}
