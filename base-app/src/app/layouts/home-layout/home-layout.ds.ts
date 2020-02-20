import { LayoutDataSource } from '@n7-frontend/core';

export class BaHomeLayoutDS extends LayoutDataSource {
  private communication: any;

  onInit(payload) {
    this.communication = payload.communication;

    this._dummyRequest();
  }

  _dummyRequest() {
    this.communication.request$('getRepos')
      .subscribe(response => {
        this.one('ba-dynamic').update(response);
      });
  }
}
