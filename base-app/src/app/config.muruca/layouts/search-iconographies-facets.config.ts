import { MrSearchConfig, MrSearchFacetsConfig, MrSearchLayoutInput } from '@net7/boilerplate-muruca';

const facets = {
  sections: [{
    id: 'section-query',
    inputs: [{
      id: 'query',
      type: 'text',
      queryParam: true,
      delay: 500,
      schema: {
        valueType: 'string'
      },
      data: {
        id: 'query',
        placeholder: 'search#placeholder_query',
        icon: 'n7-icon-search',
        inputPayload: 'search-input',
        enterPayload: 'search-enter',
        iconPayload: 'search-icon'
      }
    }]
  }],
  classes: 'facets-wrapper'
} as MrSearchFacetsConfig;

const layoutInputs = ['page', 'limit', 'sort'].map((id) => ({
  id,
  queryParam: true,
  schema: {
    valueType: id === 'sort' ? 'string' : 'number'
  }
})) as MrSearchLayoutInput[];

const request = {
  results: {
    id: 'search',
    delay: 500
  },
  facets: {
    id: 'facets',
  },
  provider: 'rest',
  delay: 500
};

export default { request, facets, layoutInputs } as MrSearchConfig;
