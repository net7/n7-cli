import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  N7BoilerplateCommonModule,
  N7BoilerplateMurucaModule,
  JsonConfigService,
  MrMenuService,
  MainStateService,
} from '@n7-frontend/boilerplate';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';

const JSON_PATH = './assets/app-config.json';
const MENU_PATH = 'http://unus-sls.netseven.it/get_menu';

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
    N7BoilerplateMurucaModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (jsonConfigService: JsonConfigService) => () => jsonConfigService.load(JSON_PATH),
    deps: [JsonConfigService],
    multi: true
  }, {
    provide: APP_INITIALIZER,
    useFactory: (menuService: MrMenuService) => () => menuService.load(MENU_PATH),
    deps: [MrMenuService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private router: Router,
    private mainState: MainStateService
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart),
    ).subscribe((event: any) => {
      const { url } = event;
      this.mainState.updateCustom('currentNav', url);
    });
  }
}
