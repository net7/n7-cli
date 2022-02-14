import { LayoutDataSource } from '@net7/core';

export class HomeLayoutDS extends LayoutDataSource {
  private communication: any;

  onInit(payload) {
    this.communication = payload.communication;

    this._dummyRequest();
  }

  _dummyRequest() {
    this.communication.request$('getRepos')
      .subscribe((response) => {
        this.one('dynamic').update(response);
      });
  }
}
