import { Component } from "@angular/core";
import { core } from "@angular/compiler";
import { StudentsListComponent } from "./students-list/students-list.component";


@Component({
  //template:"<h1>Hello, How are you</h1>",
  templateUrl:"app.component.html",
  selector:"app-root",
  imports: [StudentsListComponent]
})
export class AppComponent{
  name:string="Nechami"

}