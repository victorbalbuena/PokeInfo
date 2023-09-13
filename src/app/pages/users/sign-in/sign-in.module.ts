import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { GoogleAuthProvider } from '@angular/fire/auth';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule, SharedModule, HttpClientModule],
  providers: [AuthService, GoogleAuthProvider],
})
export class SignInModule {}
