import { LayoutDataSource } from '@n7-frontend/core';

export class BaseLayoutDS extends LayoutDataSource {
  private communication;

  onInit(payload) {
    this.communication = payload.communication;
  }
}
