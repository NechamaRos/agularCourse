import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AdminStudentComponent } from "./admin-student/admin-student.component"

 

export const adminRouting: Routes = [
    {path:"", redirectTo: "adminStudent", pathMatch: "full"},
    {path:"adminStudent",component: AdminStudentComponent}
]

@NgModule({
    imports: [RouterModule.forChild(adminRouting)],
    exports: [RouterModule],
})
export class adminRoutingModule {

}