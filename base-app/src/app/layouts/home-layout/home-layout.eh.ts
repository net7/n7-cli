import { EventHandler } from '@n7-frontend/core';

export class HomeLayoutEH extends EventHandler {
  public listen() {
    this.innerEvents$.subscribe(({ type, payload }) => {
      switch (type) {
        case 'baseappprefix-home-layout.init':
          this.dataSource.onInit(payload);
          break;
        default:
          break;
      }
    });
  }
}
