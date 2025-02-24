import { Component } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentService } from '../studentService';


@Component({
  selector: 'students-list',
  imports: [CommonModule,StudentFormComponent],
  templateUrl: './students-list.component.html'
})
export class StudentsListComponent {
  students:Student[]=[];
  constructor(private _studentService:StudentService){
    this.students=this._studentService.getStudents();
    this._studentService.callFunction();
    
  }

  selectedStudent:Student|undefined;

  deleteStudent(student:Student){
    let studentToDelete=this.students.indexOf(student);
    this.students.splice(studentToDelete,1);
  }
  showDetails(studentToShow:Student){
    this.selectedStudent=studentToShow;
  }

  updateStudentToList(studentToUpdate:Student){
    if(studentToUpdate.id==0){
      studentToUpdate.id=this.students.length+1;
      this.students.push(studentToUpdate)
    }
    else{
      let studentToUpdate2=this.students.filter(x=>x.id==studentToUpdate.id)[0];
      let indexOfStudentToUpdate=this.students.indexOf(studentToUpdate2);
      this.students[indexOfStudentToUpdate]=studentToUpdate;
    }
    this.selectedStudent=undefined
  }

  addNewStudent(){
    this.selectedStudent=new Student("new student",37)
  }
}
