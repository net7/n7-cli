import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout, CommunicationService } from '@n7-frontend/boilerplate';
import { BaHomeLayoutConfig as config } from './home-layout.config';

@Component({
  selector: 'ba-home-layout',
  templateUrl: './home-layout.html'
})
export class BaHomeLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
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