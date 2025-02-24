import { Component } from "@angular/core";
import { core } from "@angular/compiler";
import { StudentsListComponent } from "./students-list/students-list.component";
import { ObservableComponent } from "./observable/observable.component";


@Component({
  //template:"<h1>Hello, How are you</h1>",
  templateUrl:"app.component.html",
  selector:"app-root",
  imports: [StudentsListComponent, ObservableComponent]
})
export class AppComponent{
  name:string="Nechami"

}