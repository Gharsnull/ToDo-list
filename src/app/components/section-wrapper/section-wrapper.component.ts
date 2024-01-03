import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-section-wrapper',
  standalone: true,
  imports: [
    UserComponent
  ],
  templateUrl: './section-wrapper.component.html',
  styleUrl: './section-wrapper.component.scss'
})
export class SectionWrapperComponent {

}
