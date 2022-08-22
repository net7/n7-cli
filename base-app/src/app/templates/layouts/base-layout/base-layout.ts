import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout, CommunicationService, ConfigurationService } from '@net7/boilerplate-common';
import { BaseLayoutConfig as config } from './base-layout.config';

@Component({
  selector: 'appprefix-base-layout',
  templateUrl: './base-layout.html'
})
export class BaseLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
  constructor(
    private communication: CommunicationService,
    private configuration: ConfigurationService
  ) {
    super(config);
  }

  protected initPayload() {
    return {
      communication: this.communication,
      configuration: this.configuration
    };
  }

  ngOnInit() {
    this.onInit();
  }

  ngOnDestroy() {
    this.onDestroy();
  }
}
