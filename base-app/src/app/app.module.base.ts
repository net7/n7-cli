import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
  N7BoilerplateCommonModule,
  JsonConfigService,
  LocalConfigService,
} from "@net7/boilerplate-common";
import { DvComponentsLibModule } from "@net7/components";
import { APP_ROUTES } from "./app.routes.base";

import { AppComponent } from "./app.component.base";
import { HomeLayoutComponent } from "./layouts/home-layout/home-layout";

import configBase from "./config.base";

const JSON_PATH = "./assets/app-config.local.json";

@NgModule({
  declarations: [AppComponent, HomeLayoutComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    N7BoilerplateCommonModule.forRoot({}),
    DvComponentsLibModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory:
        (
          localConfigService: LocalConfigService,
          jsonConfigService: JsonConfigService,
        ) =>
        () =>
          localConfigService
            .load(configBase)
            .then(() => jsonConfigService.load(JSON_PATH)),
      deps: [LocalConfigService, JsonConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
