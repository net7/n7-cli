import { ConfigAriannaCollectionLayout } from '@net7/boilerplate-arianna';

export default {
  header: {
    maxLength: 100,
    char: '…',
  },
  description: {
    // maxLength: 20,
    char: '…',
  },
  watermark: 'assets/a4v-collection-watermark.png',
  item: {
    title: {
      maxLength: 80,
      char: '…'
    },
    description: {
      maxLength: 100,
      char: '…'
    }
  }
} as ConfigAriannaCollectionLayout;
