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
      },
      {
        id: 'editor_metadata',
        type: 'metadata',
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
        title: 'resource#collection_witness',
      },
      {
        id: 'collection-bibliography',
        type: 'collection',
        grid: 1,
        title: 'resource#bibliography',
        options: {
          classes: 'mr-item-preview-bibliography',
          itemPreview: {
            limit: 9999,
            striptags: false,
          },
        },
      },
      {
        id: 'image-viewer-iiif',
        type: 'viewer-iiif',
        title: 'resource#image-viewer-iiif',
        options: {
          libOptions: {
            window: {
              sideBarOpenByDefault: false,
              allowClose: false,
              allowMaximize: true,
              defaultSideBarPanel: 'info',
              views: [
                { key: 'single' },
                { key: 'gallery' },
              ],
              workspaceControlPanel: {
                enabled: false,
              },
            },
            id: 'mirador-container',
          },
        }
      },
    ],
  },
} as ConfigMurucaResourceLayout;
