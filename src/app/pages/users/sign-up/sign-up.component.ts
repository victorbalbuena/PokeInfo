import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  template: `<app-auth-form [action]="'signUp'"></app-auth-form>`,
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {}
