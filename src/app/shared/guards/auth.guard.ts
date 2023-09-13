import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/users/services/auth.service';
import { inject } from '@angular/core';
import { take, tap } from 'rxjs';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.userState$.pipe(
    take(1),
    tap((isLoggedIn) =>
      !!isLoggedIn ? router.navigate(['/users/sign-in']) : true
    )
  );
};
