import { EventHandler } from '@n7-frontend/core';

export class StaticEH extends EventHandler {
  public listen() {
    this.innerEvents$.subscribe(({ type, payload }) => {
      switch (type) {
        case 'static.click':
          console.log('StaticEH', type, payload);
          this.emitOuter('click', payload);
          break;

        default:
          break;
      }
    });
  }
}
