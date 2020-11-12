import { Routes } from '@angular/router';

import {
  Page404LayoutComponent,
  AwHomeLayoutComponent,
  AwSchedaLayoutComponent,
  AwEntitaLayoutComponent,
  AwSearchLayoutComponent,
  AwGalleryLayoutComponent,
  AwTimelineLayoutComponent,
  AwMapLayoutComponent
} from '@n7-frontend/boilerplate';

export const APP_ROUTES: Routes = [
  // arianna web routes
  { path: 'home', component: AwHomeLayoutComponent },
  { path: 'patrimonio/:id/:slug', component: AwSchedaLayoutComponent },
  { path: 'patrimonio/:id', component: AwSchedaLayoutComponent },
  { path: 'patrimonio', redirectTo: 'patrimonio/' },
  { path: 'entita/:id/:slug/:tab', component: AwEntitaLayoutComponent },
  { path: 'entita/:id/:slug', redirectTo: 'entita/:id/:slug/informazioni' },
  { path: 'ricerca', component: AwSearchLayoutComponent },
  { path: 'galleria', component: AwGalleryLayoutComponent },
  { path: 'mappa', component: AwMapLayoutComponent },
  { path: 'timeline', component: AwTimelineLayoutComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  // page404
  { path: '**', component: Page404LayoutComponent }
];
