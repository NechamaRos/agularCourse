import { Component } from "@angular/core";
import { core } from "@angular/compiler";

@Component({
  //template:"<h1>Hello, How are you</h1>",
  templateUrl:"app.component.html",
  selector:"app-root"
})
export class AppComponent{
  name:string="Nechami"

}