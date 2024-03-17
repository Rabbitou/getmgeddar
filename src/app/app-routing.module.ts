import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/auth/auth.guard";
import { AppComponent } from "./app.component";
import { SignupComponent } from "src/auth/components/signup.component";
import { HomeComponent } from "./component/home/home.component";
import { PlanComponent } from "./component/plan/plan.component";
import { ProfilComponent } from "./component/profil/profil.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "auth",

    loadChildren: () => import("../auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "home",
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
  {
    path: "plan",
    canActivate: [AuthGuard],
    component: PlanComponent,
  },
  {
    path: "profil",
    canActivate: [AuthGuard],
    component: ProfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
