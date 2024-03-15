import { NgIf } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Router } from "@angular/router";

@Component({
  selector: "mg-signup",
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgIf,
  ],
  template: `<div
    class="flex justify-center items-center min-h-screen bg-gray-100"
  >
    <div class="bg-gray-500 p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4">Sign Up</h1>
      <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
        <mat-form-field class="w-full">
          <input
            matInput
            placeholder="Email"
            type="email"
            formControlName="email"
            required
          />
          <mat-error
            *ngIf="
              signupForm.controls['email'].invalid &&
              signupForm.controls['email'].touched
            "
          >
            Please enter a valid email address.
          </mat-error>
        </mat-form-field>
        <mat-form-field class="w-full">
          <input
            matInput
            placeholder="Password"
            type="password"
            formControlName="password"
            required
          />
          <mat-error
            *ngIf="
              signupForm.controls['password'].invalid &&
              signupForm.controls['password'].touched
            "
          >
            Please enter your password.
          </mat-error>
        </mat-form-field>
        <button
          mat-raised-button
          type="submit"
          [disabled]="signupForm.invalid"
          color="primary"
          class="w-full mt-4"
        >
          Sign Up
        </button>
      </form>
      <div class="mt-2 text-center">
        <button mat-button color="accent" (click)="navigateToLogin()">
          Login
        </button>
      </div>
    </div>
  </div> `,
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  private router: Router = inject(Router);

  onSubmit() {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      // Implement signup logic here
      console.log(
        "Sign up successful with email:",
        email,
        "and password:",
        password
      );
    }
  }

  navigateToLogin() {
    this.router.navigateByUrl("/auth/login");
  }
}
