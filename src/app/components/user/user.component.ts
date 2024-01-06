import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AsyncPipe, JsonPipe, NgOptimizedImage } from '@angular/common';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MENU_POSITION } from './user.constants';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CdkMenuModule,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  protected readonly MENU_POSITION = MENU_POSITION;

  constructor(public readonly authService: AuthService) {
  }
}
