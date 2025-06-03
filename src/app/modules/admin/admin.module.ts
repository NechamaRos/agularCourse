import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminRoutingModule } from './admin-routing.module';
import { AdminStudentComponent } from './admin-student/admin-student.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, adminRoutingModule,AdminStudentComponent
  ]
})
export class AdminModule { }
