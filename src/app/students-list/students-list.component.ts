import { Component } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'students-list',
  imports: [CommonModule],
  templateUrl: './students-list.component.html'
})
export class StudentsListComponent {
  students = [{ id: 1, name: "1" }, { id: 2, name: "2" }, { id: 3, name: "3" }];

  deleteStudent(student:Student){
    let studentToDelete=this.students.indexOf(student);
    this.students.splice(studentToDelete,1);
  }
}
