import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentService } from "./studentService";
import { ObservableComponent } from "./observable/observable.component";
import { provideHttpClient } from "@angular/common/http";
import { StudentsListComponent } from "./students-list/students-list.component";
import { ParentLifeComponent } from "./life-cycle-demo/parent-life/parent-life.component";
import { ChildLifeComponent } from "./life-cycle-demo/child-life/child-life.component";
import { appRoutingModule } from "./routing.module";
import { YearBookComponent } from "./year-book/year-book.component";

const routes = [{

    }]

@NgModule({
    declarations: [AppComponent,
        StudentsListComponent,
        StudentDetailsComponent,
        StudentFormComponent,
        ObservableComponent,
        ParentLifeComponent,
        ChildLifeComponent,
        YearBookComponent
    ],
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        appRoutingModule
          
  ],
    providers: [StudentService,
        provideHttpClient()
    ],
    bootstrap: [AppComponent]

})
export class AppModule {

}