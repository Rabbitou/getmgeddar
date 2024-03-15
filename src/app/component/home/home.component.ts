import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth/auth.service';
import { SubscriptionPlan } from 'src/environments/subscription-plan';

@Component({
  selector: 'mg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  emailUser: string = '';
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
    this.router.navigateByUrl('auth/login');
  }
}
