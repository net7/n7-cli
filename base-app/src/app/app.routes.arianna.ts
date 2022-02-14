import { Routes } from '@angular/router';

import { Page404LayoutComponent } from '@net7/boilerplate-common';
import {
  AwCollectionLayoutComponent,
  AwEntitaLayoutComponent,
  AwGalleryLayoutComponent,
  AwHomeLayoutComponent,
  AwMapLayoutComponent,
  AwSchedaLayoutComponent,
  AwSearchLayoutComponent,
  AwTimelineLayoutComponent,
} from '@net7/boilerplate-arianna';

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
  { path: 'collection/:id', component: AwCollectionLayoutComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  // page404
  { path: '**', component: Page404LayoutComponent }
];
