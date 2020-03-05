import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractLayout, CommunicationService } from '@n7-frontend/boilerplate';
import { HomeLayoutConfig as config } from './home-layout.config';

@Component({
  selector: 'baseappprefix-home-layout',
  templateUrl: './home-layout.html'
})
export class HomeLayoutComponent extends AbstractLayout implements OnInit, OnDestroy {
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
