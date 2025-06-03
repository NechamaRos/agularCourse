import { NgModule } from "@angular/core";
import { StudentsListComponent } from "./students-list/students-list.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { FormsModule } from "@angular/forms";
import { StudentService } from "./studentService";

@NgModule({
    declarations:[StudentsListComponent,StudentFormComponent,StudentDetailsComponent],
    imports: [FormsModule,NgModule],
    exports: [StudentsListComponent],
    providers: [StudentService]
})
export class studentModule {
 
}