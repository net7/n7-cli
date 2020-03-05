import { EventHandler } from '@n7-frontend/core';

export class DynamicEH extends EventHandler {
  public listen() {
    this.innerEvents$.subscribe(({ type, payload }) => {
      switch (type) {
        case 'dynamic.click':
          console.log('DynamicEH', type, payload);
          this.emitOuter('click', payload);
          break;

        default:
          break;
      }
    });
  }
}
