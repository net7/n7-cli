import { Routes } from '@angular/router';

import {
  // COMMON
  Page404LayoutComponent,
  // MURUCA
  MrHomeLayoutComponent,
  MrSearchLayoutComponent,
  MrStaticLayoutComponent,
  MrResourceLayoutComponent
} from '@n7-frontend/boilerplate';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: MrHomeLayoutComponent, data: { configId: 'home-base' } },
  { path: 'home-pro', component: MrHomeLayoutComponent, data: { configId: 'home-pro' } },
  { path: 'opere', component: MrSearchLayoutComponent, data: { configId: 'search-works' } },
  { path: 'mappe', component: MrSearchLayoutComponent, data: { configId: 'search-maps' } },
  { path: 'mappa/:slug', component: MrResourceLayoutComponent, data: { configId: 'resource-map' } },
  { path: 'opera/:slug', component: MrResourceLayoutComponent, data: { configId: 'resource-work' } },
  { path: 'static/:slug', component: MrStaticLayoutComponent },
  { path: '**', component: Page404LayoutComponent }
];
