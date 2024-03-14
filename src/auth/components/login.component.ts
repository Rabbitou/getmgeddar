import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'mg-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,ReactiveFormsModule,NgIf],
  template: `<div class="flex justify-center items-center h-screen">
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" formControlName="email">
        <div *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">
          <div *ngIf="loginForm.get('email')?.errors?.['required']">Email is required.</div>
          <div *ngIf="loginForm.get('email')?.errors?.['email']">Invalid email format.</div>
        </div>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" formControlName="password">
        <div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
          <div *ngIf="loginForm.get('password')?.errors?.['required']">Password is required.</div>
        </div>
      </div>
      <button type="submit" [disabled]="loginForm.invalid">Login</button>
    </form>
  </div>`,
})
export class LoginComponent {
  // ngOnInit() {
    loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  // }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
