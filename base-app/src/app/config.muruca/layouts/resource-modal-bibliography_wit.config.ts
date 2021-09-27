import { ConfigMurucaResourceLayout } from '@n7-frontend/boilerplate';

export default {
  type: 'bibliography_wit',
  sections: {
    top: [
      {
        id: 'header',
        type: 'title'
      }
    ],
    content: [
      {
        id: 'collection-witnesses',
        type: 'collection',
        grid: 3,
        title: 'resource#collection_witnesses'
      },
    ]
  }
} as ConfigMurucaResourceLayout;
