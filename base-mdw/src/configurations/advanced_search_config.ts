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
        type: 'term_value',
        field: 'author.key.keyword',    
      },
      // Ricerca su più fields
      'query-place': {
        type: 'fulltext',
        field: ['place', 'location.key'],
      },
      // Ricerca su una sola delle risorse specificate
      'query-element-presence': {
        type: 'fulltext',
        field: 'section',
        baseQuery: {
          field: 'record-type',
          value: 'witness'
        },
      },
      // Ricerca se il campo è vuoto o meno (nel FE inviare true o false)
      // Aggiungere .keyword se è un campo testuale
      'query-manuscrito-consta': {
        type: 'term_exists',
        field: 'manuscripts',
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
        // value: eseguire la ricerca su un campo diverso
        {
          key: 'author',
          content_type: 'work',
          value: 'name'
        },
      ]
    }
  },
};

export default advancedSearchConfig;