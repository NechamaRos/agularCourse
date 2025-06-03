import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    constructor(private http: HttpClient) {}

    getStudentFromServer(){
        return this.http.get<Student[]>("api/student");
    }

    getStudents(): Student[] {
        return [{ id: 1, name: "1 service", yearBook: 22, active: true, marks: [{ subject: "English", grade: 100 }, { subject: "math", grade: 99 }] },
        { id: 2, name: "2", yearBook: 81, active: true, marks: [{ subject: "English", grade: 80 }, { subject: "math", grade: 89 }] }];
    }
    getValue() : Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(3);
            }, 3000);
        });
    }

    callFunction() {
        console.log("call function start");
        this.getValue().then(value => {
            console.log(value);
        });
        console.log("call function end");

    }
    getActiveStudentsFromService(isActive:Boolean):Observable<Student[]>{
        return this.http.get<Student[]>("/api/student?isActive="+isActive)
      }
      saveStudents(studentsList: Student[]):Observable<boolean>{
        return this.http.post<boolean>("/api/student",studentsList)
      }
}
