import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { ErrorComponent } from './error/error.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: "", redirectTo: 'students', pathMatch: 'full' },
  { path: "students", component: StudentsComponent },
  { path: "students/:id", component: StudentDetailsComponent },
  { path: "update/:id", component: StudentUpdateComponent },
  { path: "delete/:id", component: StudentDeleteComponent },
  { path: "new", component: StudentAddComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
