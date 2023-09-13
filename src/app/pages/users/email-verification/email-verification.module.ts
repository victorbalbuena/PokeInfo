import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailVerificationRoutingModule } from './email-verification-routing.module';
import { EmailVerificationComponent } from './email-verification.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [EmailVerificationComponent],
  imports: [CommonModule, EmailVerificationRoutingModule, MaterialModule],
})
export class EmailVerificationModule {}
