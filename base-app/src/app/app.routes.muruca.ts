import { Routes } from '@angular/router';

import {
  // COMMON
  Page404LayoutComponent,
  // MURUCA
  MrHomeLayoutComponent,
  MrSearchLayoutComponent,
  MrStaticLayoutComponent,
  MrResourceLayoutComponent,
  MrTimelineLayoutComponent,
  // OTHER
  DynamicPathGuard
} from '@n7-frontend/boilerplate';

const NOT_FOUND_PATH = 'page-404';

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '', component: MrHomeLayoutComponent, data: { configId: 'home' } },
  { path: 'opere', component: MrSearchLayoutComponent, data: { configId: 'search-works' } },
  { path: 'vite-antiche', component: MrSearchLayoutComponent, data: { configId: 'search-biographies' } },
  { path: 'materiali_strumenti', component: MrSearchLayoutComponent, data: { configId: 'search-tools' } },
  { path: 'biblioteca', component: MrSearchLayoutComponent, data: { configId: 'search-books' } },
  { path: 'testimoni', component: MrSearchLayoutComponent, data: { configId: 'search-witnesses' } },
  { path: 'iconografia', component: MrSearchLayoutComponent, data: { configId: 'search-iconographies' } },
  { path: 'libro/:id/:slug', component: MrResourceLayoutComponent, data: { configId: 'resource-book' } },
  { path: 'biografia/:id/:slug', component: MrResourceLayoutComponent, data: { configId: 'resource-biography' } },
  { path: 'opera/:id/:slug', component: MrResourceLayoutComponent, data: { configId: 'resource-work' } },
  { path: 'testimone/:id/:slug', component: MrResourceLayoutComponent, data: { configId: 'resource-witness' } },
  { path: 'toponym/:id/:slug', component: MrResourceLayoutComponent, data: { configId: 'resource-toponym' } },
  { path: 'keyword/:id/:slug', component: MrResourceLayoutComponent, data: { configId: 'resource-keyword' } },
  { path: 'iconografia/:id/:slug', component: MrResourceLayoutComponent, data: { configId: 'resource-iconography' } },
  { path: 'timeline', component: MrTimelineLayoutComponent, data: { configId: 'timeline' } },
  { path: 'timeline/:id/:slug', component: MrTimelineLayoutComponent },
  { path: 'post/:slug', component: MrStaticLayoutComponent },
  { path: ':slug', component: MrStaticLayoutComponent },
  {
    path: 'bibliografia',
    component: MrSearchLayoutComponent,
    data: { configId: 'search-bibliografia' }
  },
  { path: NOT_FOUND_PATH, component: Page404LayoutComponent },
  {
    path: '**',
    component: MrStaticLayoutComponent,
    canActivate: [DynamicPathGuard],
    data: {
      notFoundPath: NOT_FOUND_PATH
    }
  }
];
