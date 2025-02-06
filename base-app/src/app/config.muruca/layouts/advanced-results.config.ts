export default {
  searchId: 'advanced_search',
  title: 'Risultati',
  resourcePath: '/work',
  totalResultsText: 'advancedsearch#works_total',
  grid: 1,
  filters: {
    // title: 'advancedsearch#filters_title',
    labels: {
      'query-fulltext': 'advancedsearch#fulltext_text',
      'query-title': 'advancedsearch#label_title',
      'query-content': 'advancedsearch#label_content',
      'query-library': 'advancedsearch#library_text',
      'query-signature': 'advancedsearch#label_signature',
      'query-text': 'advancedsearch#label_text',
      'query-distance-text': 'advancedsearch#label_distance',
      'query-bibl': 'advancedsearch#label_bibl',
      mrc_work_mrc_tei_bibliography: 'advancedsearch#label_source',
      author: 'advancedsearch#label_author',
      query: 'advancedsearch#label_search_title',
      censors: 'advancedsearch#label_censors',
      signature: 'advancedsearch#label_signature',
      year: 'advancedsearch#label_date',
      mrc_work_mrc_tei_name: 'advancedsearch#label_autorithy_name',
      'query-distance-value': 'advancedsearch#distance_value',
    },
  },
  sort: {
    label: 'search#sort_title',
    options: [
      {
        value: '_score',
        label: 'search#sort_score',
        selected: true,
      },
      {
        value: 'section_ASC',
        label: 'search#sort_asc',
        selected: false,
      },
      {
        value: 'section_DESC',
        label: 'search#sort_desc',
        selected: false,
      },
    ],
  },
  pagination: {
    selectLabel: 'search#results_number',
    limit: 5,
    options: [12, 24, 48],
  },
  itemPreview: {
    // classes: 'is-vertical'
    linkTarget: '_self',
  },
  highlights: {
    hasToggle: true,
    hidden: true,
  },
  fallback: {
    text: 'search#fallback_text',
    button: 'search#fallback_button',
    payload: {
      action: 'redirect',
      url: '/ricerca-avanzata',
    },
  },
  ko: {
    text: 'search#ko_text',
    button: 'search#ko_button',
  },
};
