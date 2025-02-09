import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
//import { StudentsListComponent } from "./students-list/students-list.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations:[AppComponent,/*StudentsListComponent,*/
        StudentDetailsComponent,
        StudentFormComponent,
        FormsModule,
        ReactiveFormsModule],
    imports:[BrowserModule],
    bootstrap:[AppComponent]

})
export class AppModule{

}