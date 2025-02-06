import { ConfigMurucaResourceLayout } from '@net7/boilerplate-muruca';

export default {
  maxHeight: 100, // Threshold where the "read-more" button appears
  title: 'Opera',
  type: 'work',
  sections: {
    top: [
      {
        id: 'header',
        type: 'title',
        grid: null,
      },
    ],
    content: [
      {
        id: 'text-viewer',
        type: 'text-viewer',
        options: {
          searchId: 'xml_text',
        },
      },
      {
        id: 'metadata',
        type: 'metadata',
        title: 'resource#metadata',
      },
      {
        id: 'collection-witnesses',
        type: 'collection',
        grid: 3,
        title: 'Testimoni collegati',
      },
      {
        id: 'collection-taxonomies',
        type: 'collection',
        grid: 3,
        title: 'Tassonomie collegate',
      },
    ],
  },
} as ConfigMurucaResourceLayout;
