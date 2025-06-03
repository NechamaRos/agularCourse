import { Component, Input, Output,EventEmitter  } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'student-details',
  imports: [CommonModule],
  templateUrl: './student-details.component.html'})

export class StudentDetailsComponent {

  @Input()
  student!:Student;

  @Output()
  onSaveStudent: EventEmitter<Student> = new EventEmitter();

  saveNewStudent(){
    this.onSaveStudent.emit(this.student)
  }
}
