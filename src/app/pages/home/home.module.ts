import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FilterPipe } from './pipes/filter.pipe';
import { ProblemDialogComponent } from './components/problem-dialog/problem-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from 'src/app/shared/components/error-message/error-message.component';

@NgModule({
  declarations: [HomeComponent, FilterPipe, ProblemDialogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ErrorMessageComponent,
  ],
})
export class HomeModule {}
