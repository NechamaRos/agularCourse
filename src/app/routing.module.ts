import { RouterModule, Routes } from "@angular/router"
import { StudentsListComponent } from "./modules/students/students-list/students-list.component"
import { HomeComponent } from "./home/home.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"
import { NgModule } from "@angular/core"
import { YearBookComponent } from "./year-book/year-book.component"
import { AuthGuardService } from "./auth-guard.service"
import { DirectiveDemoComponent } from "./modules/demo/directive-demo/directive-demo.component"
 

export const appRoutes: Routes = [
    {path:"", redirectTo: "/home", pathMatch: "full"},
    {path:"students",component: StudentsListComponent},
    {path:"students/:yearBook",component: StudentsListComponent},
    {path:"home", component: HomeComponent},
    {path:"yearBook", component: YearBookComponent,canActivate: [AuthGuardService]},
    {path:"admin", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)},
    {path:"directive", component: DirectiveDemoComponent},
    {path:"**",component: PageNotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class appRoutingModule {

}