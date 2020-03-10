import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout, CommunicationService } from '@n7-frontend/boilerplate';
import { BaseLayoutConfig as config } from './base-layout.config';

@Component({
  selector: 'appprefix-base-layout',
  templateUrl: './base-layout.html'
})
export class BaseLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
  constructor(
    private communication: CommunicationService
  ) {
    super(config);
  }

  protected initPayload() {
    return {
      communication: this.communication
    };
  }

  ngOnInit() {
    this.onInit();
  }

  ngOnDestroy() {
    this.onDestroy();
  }
}
