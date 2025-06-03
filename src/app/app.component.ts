import { Component } from "@angular/core";
import { core } from "@angular/compiler";
import { StudentsListComponent } from "./students-list/students-list.component";
import { ObservableComponent } from "./observable/observable.component";
import { ParentLifeComponent } from "./life-cycle-demo/parent-life/parent-life.component";
import { RouterLink, RouterOutlet } from "@angular/router";
import { appRoutingModule } from "./routing.module";


@Component({
  //template:"<h1>Hello, How are you</h1>",
  templateUrl:"app.component.html",
  selector:"app-root",
  imports: [StudentsListComponent, ObservableComponent,ParentLifeComponent,RouterLink,RouterOutlet]
})
export class AppComponent{
  name:string="Nechami"

}