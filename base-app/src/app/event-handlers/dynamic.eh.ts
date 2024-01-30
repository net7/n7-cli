import { EventHandler } from '@net7/core';

export class DynamicEH extends EventHandler {
  public listen() {
    this.innerEvents$.subscribe(({ type, payload }) => {
      switch (type) {
        case 'dynamic.click':
          this.emitOuter('click', payload);
          break;

        default:
          break;
      }
    });
  }
}
