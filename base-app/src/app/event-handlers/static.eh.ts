import { EventHandler } from '@n7-frontend/core';

export class BaStaticEH extends EventHandler {
  public listen() {
    this.innerEvents$.subscribe(({ type, payload }) => {
      switch (type) {
        case 'ba-static.click':
          console.log('BaStaticEH', type, payload);
          this.emitOuter('click', payload);
          break;

        default:
          break;
      }
    });
  }
}
