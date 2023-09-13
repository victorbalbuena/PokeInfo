import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemRoutingModule } from './problem-routing.module';
import { SolveComponent } from './solve/solve.component';


@NgModule({
  declarations: [
    SolveComponent
  ],
  imports: [
    CommonModule,
    ProblemRoutingModule
  ]
})
export class ProblemModule { }
