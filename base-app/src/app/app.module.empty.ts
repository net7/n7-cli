import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  N7BoilerplateCommonModule,
  JsonConfigService
} from '@n7-frontend/boilerplate';
import { DvComponentsLibModule } from '@n7-frontend/components';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout';

const JSON_PATH = '/assets/app-config.json';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      APP_ROUTES
    ),
    N7BoilerplateCommonModule.forRoot({}),
    DvComponentsLibModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (jsonConfigService: JsonConfigService) => () => jsonConfigService
      .load(JSON_PATH),
    deps: [JsonConfigService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
