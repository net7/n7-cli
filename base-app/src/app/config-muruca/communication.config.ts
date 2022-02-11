import { ConfigCommonCommunication } from '@n7-frontend/boilerplate';

export default {
  defaultProvider: 'rest-local',
  providers: {
    rest: {
      type: 'rest',
      baseUrl: '//jsonplaceholder.typicode.com/',
      config: {
        sections: 'sections',
        search: 'posts',
        links: 'todos'
      }
    },
    'rest-local': {
      type: 'rest',
      baseUrl: 'http://petrarca-sls.netseven.it/',
      // baseUrl: 'http://localhost:3126/',
      config: {
        home: 'get_home',
        menu: 'get_menu',
        static: 'get_static/',
        post: 'get_static_post/',
        search: 'search/results',
        searchDescription: 'get_search_description/',
        facets: 'search/facets',
        resource: 'get_resource',
        footer: 'get_footer',
        timeline: 'get_timeline/time-events',
        timelineDescription: 'get_search_description/timeline',
      }
    }
  }
} as ConfigCommonCommunication;
