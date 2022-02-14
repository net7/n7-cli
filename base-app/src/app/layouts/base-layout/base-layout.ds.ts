import { LayoutDataSource } from '@net7/core';

export class BaseLayoutDS extends LayoutDataSource {
  private communication;

  onInit(payload) {
    this.communication = payload.communication;
  }
}
