import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/pages/users/services/auth.service';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { ProblemDialogComponent } from 'src/app/pages/home/components/problem-dialog/problem-dialog.component';

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

  constructor(private dialog: MatDialog) {
    this.user$ = this.authService.userState$;
  }

  async onSignOut(): Promise<void> {
    await this.authService.signOut();
    this.router.navigate(['/users/sign-in']);
  }

  openProblemDialog() {
    const dialogRef = this.dialog.open(ProblemDialogComponent, {
      position: { top: '60px' },
    });
  }
}
