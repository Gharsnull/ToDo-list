import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PageWrapperComponent } from './pages/page-wrapper/page-wrapper.component';
import { LoginComponent } from './pages/login/login.component';
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
        component: LoginComponent,
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectLoggedUsers}
      },
      {
        path: '',
        component: MainComponent,
        canActivate:[AuthGuard],
        data: { authGuardPipe: redirectUnauthorized}
      },
    ]
  }
];
