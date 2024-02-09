import { EventHandler } from '@net7/core';
import { BaseDS } from '../data-sources';

export class BaseEH extends EventHandler {
  dataSource: BaseDS;

  public listen() {
    this.innerEvents$.subscribe(({ type, payload }) => {
      console.warn(
        'TODO: update or remove innerEvents$ listener',
        type,
        payload,
      );
      switch (type) {
        default:
          break;
      }
    });

    this.outerEvents$.subscribe(({ type, payload }) => {
      console.warn(
        'TODO: update or remove outerEvents$ listener',
        type,
        payload,
      );
      switch (type) {
        default:
          break;
      }
    });
  }
}
