import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { StudentService } from './studentService';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  students:Student[] = [];
  constructor(private _studentService:StudentService) { 
    this._studentService.getStudentFromServer().subscribe(data=>{
      this.students=data;
    })  
  }

  canActivate(): boolean {
    if(this.students&&this.students.length > 0) {
    return true;
  }
  else{
    alert("You must have at least one student to access this page.");
    return false;
  }
}
}
