import { ConfigMurucaSearchLayout } from '@net7/boilerplate-muruca';
import searchBiographiesFacetsConfig from './search-biographies-facets.config';

export default {
  title: 'Vite Antiche',
  searchId: 'biography',
  searchConfig: searchBiographiesFacetsConfig,
  facetsTitle: 'search#facets_title',
  resourcePath: '/vite-antiche',
  totalResultsText: 'search#biographies_total',
  filtersTitle: 'search#filters_title',
  grid: 1,
  sort: {
    label: 'search#sort_title',
    options: [
      {
        value: '_score',
        label: 'search#sort_score',
        selected: false,
        disabled: true,
      },
      {
        value: 'title_ASC',
        label: 'search#sort_asc',
        selected: true,
      },
      {
        value: 'title_DESC',
        label: 'search#sort_desc',
        selected: false,
      },
    ],
  },
  pagination: {
    limit: 5,
    options: [12, 24, 48],
  },
  itemPreview: {
    classes: 'is-vertical',
  },
  fallback: {
    text: 'search#fallback_text',
    button: 'search#fallback_button',
  },
  ko: {
    text: 'search#ko_text',
    button: 'search#ko_button',
  },
} as ConfigMurucaSearchLayout;
