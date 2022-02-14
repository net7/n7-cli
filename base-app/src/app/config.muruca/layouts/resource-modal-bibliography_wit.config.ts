import { ConfigMurucaResourceLayout } from '@net7/boilerplate-muruca';

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
