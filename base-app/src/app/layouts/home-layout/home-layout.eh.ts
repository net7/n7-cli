import { EventHandler } from '@n7-frontend/core';

export class BaHomeLayoutEH extends EventHandler {
  public listen() {
    this.innerEvents$.subscribe(({ type, payload }) => {
      switch (type) {
        case 'ba-home-layout.init':
          this.dataSource.onInit(payload);
          break;
        default:
          break;
      }
    });

    this.outerEvents$.subscribe(({ type, payload }) => {
      switch (type) {
        case 'ba-static.click':
          console.log('BaHomeLayoutEH', type, payload);
          break;

        default:
          break;
      }
    });
  }
}
