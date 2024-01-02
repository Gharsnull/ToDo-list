import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-wrapper',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './page-wrapper.component.html',
  styleUrl: './page-wrapper.component.scss'
})
export class PageWrapperComponent {

}
