import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PageWrapperComponent } from './pages/page-wrapper/page-wrapper.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PageWrapperComponent,
    children: [
      {
        path: '',
        component: MainComponent,
        pathMatch: 'full'
      }
    ]
  }
];
