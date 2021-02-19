import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  N7BoilerplateCommonModule,
  N7BoilerplateAriannaWebModule,
  LocalConfigService,
} from '@n7-frontend/boilerplate';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';

import configArianna from './config-arianna';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      APP_ROUTES
    ),
    N7BoilerplateCommonModule.forRoot({}),
    N7BoilerplateAriannaWebModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (
      localConfigService: LocalConfigService
    ) => () => localConfigService.load(configArianna),
    deps: [LocalConfigService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
