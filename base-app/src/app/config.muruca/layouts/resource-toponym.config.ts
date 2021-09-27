import { ConfigMurucaResourceLayout } from '@n7-frontend/boilerplate';

export default {
  title: 'Toponimi',
  type: 'toponym',
  sections: {
    top: [],
    content: [
      {
        id: 'header',
        type: 'title',
        grid: null
      },
      {
        id: 'metadata',
        type: 'metadata',
        grid: null
      },
      {
        id: 'collection-toponyms',
        type: 'collection',
        grid: 3
      }
    ]
  }
} as ConfigMurucaResourceLayout;
