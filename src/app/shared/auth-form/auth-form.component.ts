import { Component, Input, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/pages/users/services/auth.service';
import { Observable } from 'rxjs';
const actionType = {
  signIn: {
    action: 'signIn',
    title: 'Sign In',
  },
  signUp: {
    action: 'signUp',
    title: 'Sign Up',
  },
} as const;

type ActionType = keyof typeof actionType;

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  @Input() action!: ActionType;

  form!: FormGroup;
  title!: string;

  private readonly fb = inject(FormBuilder);
  private readonly emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private readonly authService = inject(AuthService);
  user$!: Observable<any>;

  ngOnInit(): void {
    this.title =
      this.action === actionType.signIn.action
        ? actionType.signIn.title
        : actionType.signUp.title;

    this.initForm();

    this.user$ = this.authService.userState$;
  }

  onSubmit(): void {
    const { email, password } = this.form.value;
    this.action === actionType.signIn.action
      ? this.authService.signIn(email, password)
      : this.authService.signUp(email, password);
  }

  hasError(field: string): boolean {
    const fieldName = this.form.get(field);

    return !!fieldName?.valid && fieldName.touched;
  }

  signInGoogle(): void {
    this.authService.signInGoogle();
  }

  private initForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
}
