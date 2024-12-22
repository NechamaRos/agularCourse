import { Component } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'students-list',
  imports: [CommonModule,StudentDetailsComponent],
  templateUrl: './students-list.component.html'
})
export class StudentsListComponent {
  students = [{ id: 1, name: "1" }, { id: 2, name: "2" }, { id: 3, name: "3" }];

  selectedStudent:Student|undefined;

  deleteStudent(student:Student){
    let studentToDelete=this.students.indexOf(student);
    this.students.splice(studentToDelete,1);
  }
  showDetails(studentToShow:Student){
    this.selectedStudent=studentToShow;
  }

  addStudentToList(studentToAdd:Student){
    this.students.push(studentToAdd)
    this.selectedStudent=undefined
  }

  addNewStudent(){
    this.selectedStudent=new Student("new student")
  }
}
