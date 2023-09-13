import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { onlyLoggedInGuard } from './shared/guards/only-logged-in.guard';

const routes: Routes = [
  {
    path: 'users/sign-up',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/users/sign-up/sign-up.module').then(
        (m) => m.SignUpModule
      ),
  },
  {
    path: 'users/sign-in',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/users/sign-in/sign-in.module').then(
        (m) => m.SignInModule
      ),
  },
  {
    path: 'users/profile',
    canActivate: [onlyLoggedInGuard],
    loadChildren: () =>
      import('./pages/users/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'users/email-verification',
    loadChildren: () =>
      import('./pages/users/email-verification/email-verification.module').then(
        (m) => m.EmailVerificationModule
      ),
  },
  {
    path: 'users/forgot-password',
    loadChildren: () =>
      import('./pages/users/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'home',
    canActivate: [onlyLoggedInGuard],
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'problem',
    canActivate: [onlyLoggedInGuard],
    loadChildren: () =>
      import('./pages/problem/problem.module').then((m) => m.ProblemModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
