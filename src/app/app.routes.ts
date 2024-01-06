import { Routes } from '@angular/router';
import { PageWrapperComponent } from './pages/page-wrapper/page-wrapper.component';
import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectLoggedUsers = () => redirectLoggedInTo(['']);
const redirectUnauthorized = () => redirectUnauthorizedTo(['login'])

export const routes: Routes = [
  {
    path: '',
    component: PageWrapperComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectLoggedUsers}
      },
      {
        path: '',
        loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent),
        canActivate:[AuthGuard],
        data: { authGuardPipe: redirectUnauthorized}
      },
    ]
  }
];
