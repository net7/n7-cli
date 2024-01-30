import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
  N7BoilerplateCommonModule,
  JsonConfigService,
  LocalConfigService,
} from "@net7/boilerplate-common";
import { N7BoilerplateDatavizModule } from "@net7/boilerplate-dataviz";
import { DvComponentsLibModule } from "@net7/components";
import { APP_ROUTES } from "./app.routes.dataviz";

import { AppComponent } from "./app.component.dataviz";
import { HomeLayoutComponent } from "./layouts/home-layout/home-layout";

import configDataviz from "./config.dataviz";

const JSON_PATH = "./assets/app-config.local.json";

@NgModule({
  declarations: [AppComponent, HomeLayoutComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    N7BoilerplateCommonModule.forRoot({}),
    N7BoilerplateDatavizModule,
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
            .load(configDataviz)
            .then(() => jsonConfigService.load(JSON_PATH)),
      deps: [LocalConfigService, JsonConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
