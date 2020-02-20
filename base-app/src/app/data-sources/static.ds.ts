import { DataSource } from '@n7-frontend/core';

export class BaStaticDS extends DataSource {
  protected transform() {
    return {
      items: [
        {
          text: 'Sublevel 1',
          anchor: {
            payload: 'sublevel 1 clicked!'
          }
        },
        {
          text: 'Sublevel 2',
          anchor: {
            payload: 'sublevel 2 clicked!'
          }
        },
        {
          text: 'Sublevel 3',
          anchor: {
            payload: 'sublevel 3 clicked!'
          }
        },
        {
          text: 'Sublevel 4',
          anchor: {
            payload: 'sublevel 4 clicked!'
          }
        },
        {
          text: 'Sublevel 5',
          anchor: {
            payload: 'sublevel 5 clicked!'
          }
        }
      ]
    };
  }
}
