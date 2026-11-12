import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <h2>Contact Form</h2>

    <form [formGroup]="form" (ngSubmit)="submit()">

      <input formControlName="name" placeholder="Name">
      <p *ngIf="form.controls.name.invalid">Name is required</p>

      <input formControlName="email" placeholder="Email">
      <p *ngIf="form.controls.email.invalid">Enter valid email</p>

      <textarea formControlName="message" placeholder="Message"></textarea>
      <p *ngIf="form.controls.message.invalid">Message is required</p>

      <button [disabled]="form.invalid">Submit</button>

    </form>
  `
})
export class AppComponent {

  form = new FormGroup({
    name:    new FormControl('', Validators.required),
    email:   new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  submit() {
    alert("Form Submitted!");
  }
}
