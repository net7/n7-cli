import {
  MrSearchConfig,
  MrSearchFacetsConfig,
  MrSearchLayoutInput,
} from '@net7/boilerplate-muruca';

const facets = {
  sections: [
    // Ricerca testuale
    {
      id: 'section-query',
      inputs: [
        {
          id: 'query',
          type: 'text',
          queryParam: true,
          delay: 500,
          schema: {
            valueType: 'string',
          },
          data: {
            id: 'query',
            placeholder: 'search#placeholder_query',
            icon: 'n7-icon-search',
            inputPayload: 'search-input',
            enterPayload: 'search-enter',
            iconPayload: 'search-icon',
          },
        },
      ],
    },
    // Ricerca con select
    {
      id: 'section-authors',
      header: {
        id: 'header-authors',
        data: {
          text: 'search#header_authors',
          additionalText: null
        }
      },
      inputs: [
        {
          id: 'authors',
          type: 'link',
          limit: 50,
          queryParam: true,
          schema: {
            valueType: 'string',
            multiple: true
          },
          data: {
            links: []
          }
        }
      ]
    },
    // Testuale + select
    {
      id: 'section-places',
      header: {
        id: 'header-places',
        data: {
          text: 'search#header_places',
          additionalText: null
        }
      },
      inputs: [
        {
          type: 'text',
          id: 'query-places',
          target: 'places',
          delay: 500,
          schema: {
            valueType: 'string',
          },
          data: {
            id: 'query-places',
            placeholder: 'search#placeholder_places',
            icon: 'n7-icon-search',
            inputPayload: 'search-input',
            enterPayload: 'search-enter',
            iconPayload: 'search-icon',
          },
        },
        {
          id: 'places',
          type: 'link',
          limit: 50,
          queryParam: true,
          schema: {
            valueType: 'string',
            multiple: true
          },
          data: {
            links: []
          }
        }
      ]
    }
  ],
  classes: 'facets-wrapper',
} as MrSearchFacetsConfig;

const layoutInputs = ['page', 'limit', 'sort'].map((id) => ({
  id,
  queryParam: true,
  schema: {
    valueType: id === 'sort' ? 'string' : 'number',
  },
})) as MrSearchLayoutInput[];

const request = {
  results: {
    id: 'search',
    delay: 500,
  },
  facets: {
    id: 'facets',
  },
  provider: 'rest',
  delay: 500,
};

export default { request, facets, layoutInputs } as MrSearchConfig;
