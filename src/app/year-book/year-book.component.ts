import { Component, OnInit } from '@angular/core';
import { Student } from '../modules/students/student.model';
import { StudentService } from '../modules/students/studentService';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'year-book',
  imports: [CommonModule],
  templateUrl: './year-book.component.html'
})
export class YearBookComponent implements OnInit {
  
students: Student[] = []; 
  constructor(private _studentService:StudentService,private router: Router) { 
  }

  ngOnInit(): void {
   this._studentService.getStudentFromServer().subscribe(data=>{
      this.students=data;
    })  
  }

    goToYearBook(yearBook: number): void {
      this.router.navigate(['/students', yearBook]);
    }
}
