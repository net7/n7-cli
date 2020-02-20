import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  N7BoilerplateCommonModule,
  N7BoilerplateDataVizModule,
  JsonConfigService
} from '@n7-frontend/boilerplate';
import globalConfig from './config/global';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { BaHomeLayoutComponent } from './layouts/home-layout/home-layout';
import { DvComponentsLibModule } from '@n7-frontend/components';

const JSON_PATH = '/assets/app-config.json';

@NgModule({
  declarations: [
    AppComponent,
    BaHomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      APP_ROUTES
    ),
    N7BoilerplateCommonModule.forRoot({}),
    N7BoilerplateDataVizModule,
    DvComponentsLibModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (jsonConfigService: JsonConfigService) => () => jsonConfigService.load(JSON_PATH, globalConfig),
    deps: [JsonConfigService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
