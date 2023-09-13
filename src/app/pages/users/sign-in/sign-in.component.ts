import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `<app-auth-form [action]="'signIn'"></app-auth-form>`,
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {}
