import { ConfigMurucaAdvancedSearchLayout } from '@net7/boilerplate-muruca';

export default {
  title: 'Ricerca avanzata',
  resultsUrl: { it: '/risultati' },
  hasDynamicOptions: true,
  formConfig: {
    submitButton: {
      label: 'advancedsearch#submit',
    },
    resetButton: {
      label: 'advancedsearch#reset',
    },
    groups: [
      {
        id: 'group-global-search',
        sections: ['section-global'],
        classes: 'form-group-1',
        options: {
          label: 'advancedsearch#section_global',
          isOpen: true,
          showHeader: false,
        },
      },
      {
        id: 'group-first',
        sections: ['section-first'],
        classes: 'form-group-1',
        options: {
          label: 'advancedsearch#section_first',
          isOpen: false,
          showHeader: true,
        },
      },
    ],
    sections: [
      {
        id: 'section-global',
        title: '',
        inputs: [
          {
            id: 'query-fulltext',
            type: 'text',
            data: {
              id: 'query-fulltext',
              label: 'advancedsearch#fulltext_text',
              placeholder: '',
              icon: 'n7-icon-search',
              inputPayload: 'search-input',
              enterPayload: 'search-enter',
              iconPayload: 'search-icon',
            },
            state: {
              value: '',
              disabled: false,
              hidden: false,
            },
          },
          {
            id: 'query-title',
            type: 'text',
            data: {
              id: 'query-title',
              label: 'advancedsearch#label_title',
              placeholder: '',
              icon: 'n7-icon-search',
              inputPayload: 'search-input',
              enterPayload: 'search-enter',
              iconPayload: 'search-icon',
            },
            state: {
              value: '',
              disabled: false,
              hidden: false,
            },
          },
          {
            id: 'work_author',
            type: 'select',
            data: {
              id: 'work_author',
              label: 'advancedsearch#label_author',
              options: [] 
            },
            info: 'advancedsearch#section_author_info',
            state: {
              value: '',
              disabled: false,
              hidden: false,
            },
          },
        ],
      },
      {
        id: 'section-first',
        title: '',
        inputs: [
          {
            id: 'query-place',
            type: 'text',
            data: {
              id: 'query-place',
              label: 'advancedsearch#label_place',
              placeholder: '',
              icon: 'n7-icon-search',
              inputPayload: 'search-input',
              enterPayload: 'search-enter',
              iconPayload: 'search-icon',
            },
            state: {
              value: '',
              disabled: false,
              hidden: false,
            },
          },
          {
            id: 'query-status',
            type: 'checkbox',
            label: '',
            info: '',
            state: {
              value: [],
            },
            data: {
              id: 'query-section-presence',
              checkboxes: [
                {
                  label: 'advancedsearch#checkbox_intro',
                  payload: 'conclusion',
                  checked: true,
                },
                {
                  label: 'advancedsearch#checkbox_content',
                  payload: 'conclusion',
                  checked: true,
                },
                {
                  label: 'advancedsearch#checkbox_conclusion',
                  payload: 'conclusion',
                  checked: true,
                },
              ],
            },
          },
        ],
      },
    ],
  },
} as ConfigMurucaAdvancedSearchLayout;
