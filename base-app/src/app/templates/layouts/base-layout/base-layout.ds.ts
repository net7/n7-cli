import {
  CommunicationService,
  ConfigurationService,
} from '@net7/boilerplate-common';
import { LayoutDataSource } from '@net7/core';

export class BaseLayoutDS extends LayoutDataSource {
  private communication: CommunicationService;

  private configuration: ConfigurationService;

  onInit(payload) {
    this.communication = payload.communication;
    this.configuration = payload.configuration;
  }
}
