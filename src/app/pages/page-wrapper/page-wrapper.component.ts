import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from '../../components/user/user.component';

@Component({
  selector: 'app-page-wrapper',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent
  ],
  templateUrl: './page-wrapper.component.html',
  styleUrl: './page-wrapper.component.scss'
})
export class PageWrapperComponent {}
