import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/pages/users/services/auth.service';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  router = inject(Router);
  user$!: Observable<User | null>;

  private readonly authService = inject(AuthService);

  constructor() {
    this.user$ = this.authService.userState$;
  }

  async onSignOut(): Promise<void> {
    await this.authService.signOut();
    this.router.navigate(['/users/sign-in']);
  }
}
