import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/auth/auth.guard";
import { AppComponent } from "./app.component";
import { SignupComponent } from "src/auth/components/signup.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: AppComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
