import { Routes } from '@angular/router';

import { Page404LayoutComponent } from '@net7/boilerplate-common';
import {
  DvExampleLayoutComponent,
  DvCardExampleLayoutComponent
} from '@net7/boilerplate-dataviz';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: DvExampleLayoutComponent },
  { path: 'card-example', component: DvCardExampleLayoutComponent, data: { configId: 'card-example' } },
  { path: '**', component: Page404LayoutComponent }
];
