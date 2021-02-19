import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  N7BoilerplateCommonModule,
  N7BoilerplateDataVizModule,
  LocalConfigService,
} from '@n7-frontend/boilerplate';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout';

import configDataViz from './config';

@NgModule({
  declarations: [AppComponent, HomeLayoutComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    N7BoilerplateCommonModule.forRoot({}),
    N7BoilerplateDataVizModule,
    DvComponentsLibModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (
        localConfigService: LocalConfigService
      ) => () => localConfigService.load(configDataViz),
      deps: [LocalConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
