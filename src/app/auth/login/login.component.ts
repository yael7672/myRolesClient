import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule,CommonModule]
})
export class LoginComponent {

  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);

  form = this.fb.group({
    username: [''],
    password: ['']
  });

  loading = false;

  submit() {
    this.loading = true;

    const { username, password } = this.form.value;

    setTimeout(() => {
      if (this.auth.login(username!, password!)) {
        this.router.navigate(['/dashboard']);
      }
      this.loading = false;
    }, 700);
  }
}
