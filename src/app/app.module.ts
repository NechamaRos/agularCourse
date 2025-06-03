import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { StudentDetailsComponent } from "./modules/students/student-details/student-details.component";
import { StudentFormComponent } from "./modules/students/student-form/student-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentService } from "./modules/students/studentService";
import { ObservableComponent } from "./modules/demo/observable/observable.component";
import { provideHttpClient } from "@angular/common/http";
import { StudentsListComponent } from "./modules/students/students-list/students-list.component";
import { ParentLifeComponent } from "./modules/demo/life-cycle-demo/parent-life/parent-life.component";
import { ChildLifeComponent } from "./modules/demo/life-cycle-demo/child-life/child-life.component";
import { appRoutingModule } from "./routing.module";
import { YearBookComponent } from "./year-book/year-book.component";
import { DirectiveDemoComponent } from "./modules/demo/directive-demo/directive-demo.component";
import { DirectionDirective } from "./modules/demo/direction.directive";

const routes = [{

    }]

@NgModule({
    declarations: [AppComponent,
        ObservableComponent,
        YearBookComponent
    ],
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        appRoutingModule,
        
  ],
    providers: [StudentService,
        provideHttpClient()
    ],
    bootstrap: [AppComponent]

})
export class AppModule {

}