import { EventHandler } from '@net7/core';

export class BaseLayoutEH extends EventHandler {
  public listen() {
    this.innerEvents$.subscribe(({ type, payload }) => {
      switch (type) {
        case 'appprefix-base-layout.init':
          this.dataSource.onInit(payload);
          break;
        default:
          break;
      }
    });

    /* this.outerEvents$.subscribe(({ type, payload }) => {
      switch (type) {
        default:
          break;
      }
    }); */
  }
}
