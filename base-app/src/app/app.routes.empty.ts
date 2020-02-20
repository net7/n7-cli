
import { Routes } from '@angular/router';
import { Page404LayoutComponent } from '@n7-frontend/boilerplate';
import { BaHomeLayoutComponent } from './layouts/home-layout/home-layout';

export const APP_ROUTES: Routes = [
  { path: 'home', component: BaHomeLayoutComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: Page404LayoutComponent }
];
