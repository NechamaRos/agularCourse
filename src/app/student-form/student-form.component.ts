import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { StudentService } from '../studentService';

@Component({
  selector: 'student-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './student-form.component.html'
})

export class StudentFormComponent {
  constructor(private _studentService: StudentService) {
    this.students = this._studentService.getStudents();
  }
  students: Student[] = [];

studentForm!: FormGroup;

private _student!: Student;

public get student(): Student {
  return this._student;
}
  @Input()
  public set student(value: Student) {
    this._student = value;
    this.studentForm=new FormGroup({
      "id": new FormControl(this.student.id),
      "name": new FormControl(this.student.name, { validators: [Validators.required, Validators.minLength(3)] }),
      "yearBook": new FormControl(this.student.yearBook),
      "active": new FormControl(true),
      "marks": new FormControl(this.student.marks)
    })
  }
  @Output()
  onSaveStudent: EventEmitter<Student> = new EventEmitter();


  saveNewStudent() {
    this.student.name=this.studentForm.value.name;
    this.student.yearBook=this.studentForm.value.yearBook;
    this.student.active=this.studentForm.value.active;
    this.student.marks=this.student.marks;
    //אם יש אותם שדות לא צריך לפרט כל שדה בנפרד
   // this.student=this.studentForm.value;

    this.onSaveStudent.emit(this.student)
  }
}