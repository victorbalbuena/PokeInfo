import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [AuthService, GoogleAuthProvider],
})
export class SignUpModule {}
