import { CommonModule } from "@angular/common";
import { NgModule, OnInit } from "@angular/core";
import { ParentLifeComponent } from "./life-cycle-demo/parent-life/parent-life.component";
import { ChildLifeComponent } from "./life-cycle-demo/child-life/child-life.component";
import { DirectiveDemoComponent } from "./directive-demo/directive-demo.component";
import { ObservableComponent } from "./observable/observable.component";
import { DirectionDirective } from "./direction.directive";

@NgModule({
    declarations : [],
    imports: [CommonModule,
        ObservableComponent,
        ParentLifeComponent,
        ChildLifeComponent,
        DirectiveDemoComponent,
        DirectionDirective
    ],
    exports: [],
})

export class demoModule implements OnInit {
    constructor() {
        console.log("Demo Module Loaded");
    }
    ngOnInit(): void {
        console.log("Demo Module Initialized");
    }   

}
