import { NgIf } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "mg-login",
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgIf,
  ],
  template: `<div
    class="flex justify-center items-center min-h-screen bg-gradient-primary"
  >
    <div class="bg-gray-500 p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <mat-form-field class="w-full">
          <input
            matInput
            placeholder="Email"
            type="email"
            id="email"
            formControlName="email"
          />
          <mat-error
            *ngIf="
              loginForm.controls['email'].invalid &&
              loginForm.controls['email'].touched
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
            id="password"
            formControlName="password"
          />
          <mat-error
            *ngIf="
              loginForm.controls['password'].invalid &&
              loginForm.controls['password'].touched
            "
          >
            Please enter your password.
          </mat-error>
        </mat-form-field>
        <button
          mat-raised-button
          type="submit"
          [disabled]="loginForm.invalid"
          color="primary"
          class="w-full mt-4"
        >
          Login
        </button>
      </form>
      <div class="mt-2 text-center">
        <button mat-button color="accent" (click)="navigateToSignup()">
          Sign Up
        </button>
      </div>
    </div>
  </div>`,
})
export class LoginComponent {
  loginForm: FormGroup;
  // constructor() {}
  // ngOnInit(): void {
  //   this.loginForm = new FormGroup({
  //     email: new FormControl("", [Validators.required, Validators.email]),
  //     password: new FormControl("", Validators.required),
  //   });
  // }
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  private router: Router = inject(Router);

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService
        .login(email, password)
        .then((userCredential) => {
          console.log("Logged in successfully:", userCredential.user);
          this.router.navigateByUrl("/home");
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    }
  }

  navigateToSignup() {
    this.router.navigateByUrl("/signup");
  }
}
