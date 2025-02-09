import { Component } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentFormComponent } from '../student-form/student-form.component';


@Component({
  selector: 'students-list',
  imports: [CommonModule,StudentFormComponent],
  templateUrl: './students-list.component.html'
})
export class StudentsListComponent {
  students:Student [] =[{ id: 1, name: "1",yearBook:22,active:true,marks:[{subject:"English",grade:100},{subject:"math",grade:99}] },
  { id: 2, name: "2",yearBook:81,active:true,marks:[{subject:"English",grade:80},{subject:"math",grade:89}] }];

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
