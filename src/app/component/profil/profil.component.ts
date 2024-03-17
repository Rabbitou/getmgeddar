import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/auth/auth.service";

@Component({
  selector: "mg-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.scss"],
})
export class ProfilComponent {
  emailUser: string = "";
  constructor(private authService: AuthService) {
    this.authService.getAuthState().subscribe((state) => {
      if (state?.email) {
        this.emailUser = state.email;
      }
    });
  }

  private router: Router = inject(Router);

  signOut() {
    this.authService.signOut();
    this.router.navigateByUrl("auth/login");
  }
}
