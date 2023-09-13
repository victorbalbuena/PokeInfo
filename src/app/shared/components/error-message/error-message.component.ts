import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { validatorErroMessage } from './validator-message';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule],
  template: ` <div>{{ errorMessage }}</div> `,
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Input() control!: AbstractControl;

  get errorMessage(): string {
    const error = this.control?.errors;

    const validatorName = Object.keys(error ?? {})[0];
    return this.control.touched && validatorName
      ? validatorErroMessage(validatorName)
      : '';
  }
}
