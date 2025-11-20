import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import swal from 'sweetalert';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class LoginComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  loading = false;
  error: string | null = null;

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = null;

    const { username, password } = this.form.getRawValue();

    // כרגע לוגין "פייק" – תמיד מאשר אם יש ערכים
    const ok = this.auth.login(username!, password!);

    this.loading = false;

    if (ok) {
      this.router.navigate(['/dashboard']);
    } else {
      swal('שגיאה', 'שם משתמש או סיסמה שגויים', 'error');
      this.error = 'שם משתמש או סיסמה שגויים';
    }
  }
}
