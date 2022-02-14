import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  N7BoilerplateCommonModule,
  N7BoilerplateAriannaWebModule,
  JsonConfigService,
  LocalConfigService,
} from '@n7-frontend/boilerplate';
import { APP_ROUTES } from './app.routes.arianna';

import { AppComponent } from './app.component.arianna';

import configArianna from './config.arianna';

const JSON_PATH = './assets/app-config.local.json';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    N7BoilerplateCommonModule.forRoot({}),
    N7BoilerplateAriannaWebModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (
      localConfigService: LocalConfigService,
      jsonConfigService: JsonConfigService
    ) => () => (
      localConfigService.load(configArianna)
        .then(() => jsonConfigService.load(JSON_PATH))
    ),
    deps: [LocalConfigService, JsonConfigService],
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
