import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {
  RouterModule, Router, NavigationStart, RoutesRecognized
} from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { translate } from '@n7-frontend/core';
import {
  N7BoilerplateCommonModule,
  N7BoilerplateMurucaModule,
  LocalConfigService,
  MrMenuService,
  MrFooterService,
  MainStateService,
  ConfigurationService,
} from '@n7-frontend/boilerplate';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import configMuruca from './config-muruca';
import i18n from './config-muruca/i18n';

// load translations
translate.init({
  defaultLang: 'it_IT',
  translations: i18n
});

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
    useFactory: (
      localConfigService: LocalConfigService
    ) => () => localConfigService.load(configMuruca),
    deps: [LocalConfigService],
    multi: true
  }, {
    provide: APP_INITIALIZER,
    useFactory: (menuService: MrMenuService) => () => menuService.load(),
    deps: [MrMenuService],
    multi: true
  }, {
    provide: APP_INITIALIZER,
    useFactory: (footerService: MrFooterService) => () => footerService.load(),
    deps: [MrFooterService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private router: Router,
    private mainState: MainStateService,
    private config: ConfigurationService
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart),
    ).subscribe((event: any) => {
      const { url } = event;
      this.mainState.updateCustom('currentNav', url);
    });

    // body classes
    this.router.events.pipe(
      filter((event) => event instanceof RoutesRecognized),
      map((event: RoutesRecognized) => event.state.root.firstChild.data)
    ).subscribe((routeData: any) => {
      const { configId } = (routeData || {});
      let bodyClasses = '';
      if (configId) {
        const pageConfig = this.config.get(configId) || {};
        bodyClasses = pageConfig.bodyClasses || '';
      }
      document.body.className = bodyClasses;
    });
  }
}
