import { ConfigCommonCommunication } from '@net7/boilerplate-common';

export default {
  defaultProvider: 'rest-local',
  providers: {
    rest: {
      type: 'rest',
      baseUrl: '//jsonplaceholder.typicode.com/',
      config: {
        sections: 'sections',
        search: 'posts',
        links: 'todos',
      },
    },
    'rest-local': {
      type: 'rest',
      baseUrl: 'https://sls.petrarcaonline.it/',
      // baseUrl: 'http://localhost:3000/',
      config: {
        home: 'get_home',
        menu: 'get_menu',
        static: 'get_static/',
        post: 'get_static_post/',
        search: 'search/results',
        searchDescription: 'get_search_description/',
        advancedSearch: 'advanced_search',
        advancedSearchOptions: 'advanced_search_options',
        facets: 'search/facets',
        resource: 'get_resource',
        footer: 'get_footer',
        timeline: 'get_timeline/time-events',
        timelineDescription: 'get_search_description/timeline',
        itinerary: 'get_itinerary/',
        translation: 'get_translation/',
        xmlSearch: 'search_text_hl/',
      },
    },
  },
} as ConfigCommonCommunication;
