import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentService } from '../studentService';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'students-list',
  imports: [CommonModule,StudentFormComponent],
  templateUrl: './students-list.component.html'
})
export class StudentsListComponent implements OnInit {

  students:Student[]=[];
  yearBook:number=0;
  ngOnInit(): void {
    this.acr.paramMap.subscribe(paramMap => {
     if(paramMap.has('yearBook')) {
        this.yearBook = +paramMap.get('yearBook')!;
      }
    });

   this._studentService.getStudentFromServer().subscribe(data=>{
    if(this.yearBook > 0) {
      this.students = data.filter(student => student.yearBook === this.yearBook);
    }
    else {
      this.students=data;
    }
    })  
  }
  
  constructor(private _studentService:StudentService,private router: Router,private acr:ActivatedRoute){
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

  showActiveStudents(isActive:boolean){
    this._studentService.getActiveStudentsFromService(isActive).subscribe(data =>{
       this.students=data;
    },err =>{
       alert(err)
    })
 }
 saveStudentsToServer(){
    this._studentService.saveStudents(this.students).subscribe(data=>{
       if(data)
          alert("save success")
    },err=>{
       alert(err)
    })
 }
}
