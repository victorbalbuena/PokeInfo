import { Component, OnInit, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  isEmailSent = false;
  private authService = inject(AuthService);
  email!: FormControl;
  private readonly emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit(): void {
    this.initEmailField();
  }

  async onSubmit(event: Event): Promise<void> {
    event?.stopPropagation();
    try {
      this.isEmailSent = true;
      await this.authService.sendPasswordResetEmail(this.email?.value);
    } catch (error) {
      this.isEmailSent = false;
      console.log(error);
    }
  }

  private initEmailField(): void {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern),
    ]);
  }
}
