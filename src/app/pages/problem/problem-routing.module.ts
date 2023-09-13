import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolveComponent } from './solve/solve.component';

const routes: Routes = [{ path: '', component: SolveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemRoutingModule {}
