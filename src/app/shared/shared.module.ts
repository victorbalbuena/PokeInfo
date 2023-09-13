import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../pages/users/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { GoogleAuthProvider } from 'firebase/auth';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, GoogleAuthProvider],
})
export class SharedModule {}
