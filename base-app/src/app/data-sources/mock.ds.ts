import { DataSource } from '@n7-frontend/core';

export class MockDS extends DataSource {
  protected transform() {
    return {
      nav: {
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
      },
      lineChart: {
        containerId: 'test-Chart',
        libOptions: {
          series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
          chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        }
      }
    };
  }
}
