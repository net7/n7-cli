import { ConfigAdvancedSearch, highlightValue } from "@n7-frontend/n7-muruca-middleware";

const advancedSearchConfig =  {
  advanced_search: {
    lang: {
      query: {
        type: 'selection',
        field: 'language',
      },
    },
    sort: {
      section: ["title.sort"],
      title: ["title.sort"] 
    },
    base_query: {
      field: 'record-type',
      value: ['work', 'witness'],
    },
    search_groups: {
      'query-fulltext': {
        type: 'fulltext',
        field: [
          "title",
          "description",
        ],
        addStar: true,
      },
      // addStar: la stringa cercata può essere anche solo una parte della stringa risultato
      'query-title': {
        type: 'fulltext',
        field: 'title',
        addStar: true
      },
      // Campo con dynamic option (resource-type_field)
      'work_author': {
        type: 'fulltext',
        field: 'author.key',    
      },
      // Ricerca su più fields
      'query-place': {
        type: 'fulltext',
        field: ['place', 'location.key'],
      },
      // Ricerca su una sola delle risorse specificate
      'query-section-presence': {
        type: 'fulltext',
        field: 'section',
        baseQuery: {
          field: 'record-type',
          value: 'witness'
        },
      },
    },
    show_highlights: true,
    results: [
      {
        label: 'title',
        field: 'title',
      },
      {
        label: 'risorsa',
        field: 'record-type',
      },
      {
        label: 'metadata',
        fields: [
          {
            label: 'project',
            field: 'index-meta-name',
          }
        ],
        'max-char': 100,
      },
      {
        label: 'type',
        field: 'record-type',
      },
      {
        label: 'id',
        field: 'id',
      },
      {
        label: 'link',
        isLink: true,
        field: '/{record-type}/{id}/{slug}',
      },
    ],
    dynamic_options: {
      fields: [
        {
          key: 'author',
          content_type: 'work'
        },
      ]
    }
  },
};


export default advancedSearchConfig;
