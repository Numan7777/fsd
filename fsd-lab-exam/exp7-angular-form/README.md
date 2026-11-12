# 7. Angular 16 Contact Form (Reactive Forms)

> Core idea: **FormGroup + FormControl + Validators** (only 2 files to edit)

## ▶ Start (terminal)

```bash
cd "C:\Users\Numan ghori\Desktop\FSD"
ng new contactapp --no-standalone
```

- Would you like to add Angular routing? → type **N** ⚠️
- Which stylesheet format? → **CSS** (press Enter)

```bash
cd contactapp
```

## 📄 Code 1: src/app/app.module.ts (must contain @NgModule)

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 📄 Code 2: src/app/app.component.ts (must contain @Component)

```typescript
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
```

> ⚠️ The template is wrapped in **backticks ` `** (the key left of 1), not normal quotes.

## 🏁 End

1. **Ctrl + S** on both files, then in the terminal:

```bash
ng serve
```

2. Wait for **Compiled successfully** → open **http://localhost:4200**
3. Show: errors appear → type a bad email → error → fill everything correctly → Submit enables → alert.
4. Stop: **Ctrl + C**
