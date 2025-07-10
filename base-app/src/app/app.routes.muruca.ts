import {
  // COMMON
  Page404LayoutComponent,
} from '@net7/boilerplate-common';

// MURUCA
import {
  MrHomeLayoutComponent,
  MrSearchLayoutComponent,
  MrStaticLayoutComponent,
  MrResourceLayoutComponent,
  MrTimelineLayoutComponent,
  MrNetworkLayoutComponent,
  MrAdvancedSearchLayoutComponent,
  MrAdvancedResultsLayoutComponent,
  MrItineraryLayoutComponent,
  LocaleDependenciesGuard,
} from '@net7/boilerplate-muruca';

type RouteConfig = {
  component?: any;
  paths: {
    [locale: string]: string;
  };
  data?: any;
  isRedirect?: boolean;
  redirectTo?: {
    [locale: string]: string;
  };
};

const NOT_FOUND_PATH = 'page-404';
const config: {
  [layoutID: string]: RouteConfig;
} = {

  // OPERE
  opere: {
    paths: { it: 'opere', en: 'en/works' },
    component: MrSearchLayoutComponent,
    data: { configId: 'search-works' },
  },
  work: {
    paths: { it: 'opera/:id/:slug', en: 'en/work/:id/:slug' },
    component: MrResourceLayoutComponent,
    data: { configId: 'resource-work' },
  },

  // RESOURCE TAB
  resName: {
    isRedirect: true,
    paths: { it: 'resName/:id/:slug', en: 'en/resName/:id/:slug' },
    redirectTo: { it: 'resName/:id/:slug/introduction', en: 'en/resName/:id/:slug/introduction' },
  },
  introduction: {
    paths: { it: 'resName/:id/:slug/introduction', en: 'en/resName/:id/:slug/introduction' },
    component: MrResourceLayoutComponent,
    data: { configId: 'resource-resName-localization' },
  },
  description: {
    paths: { it: 'resName/:id/:slug/description', en: 'en/resName/:id/:slug/description' },
    component: MrResourceLayoutComponent,
    data: { configId: 'resource-resName-description' },
  },

  // TESTIMONI
  testimoni: {
    paths: { it: 'testimoni', en: 'en/witnesses' },
    component: MrSearchLayoutComponent,
    data: { configId: 'search-witnesses' },
  },
  witness: {
    paths: { it: 'testimone/:id/:slug', en: 'en/witness/:id/:slug' },
    component: MrResourceLayoutComponent,
    data: { configId: 'resource-witness' },
  },

  // TESTO
  text: {
    paths: { it: 'testo/:id/:slug', en: 'en/text/:id/:slug' },
    component: MrResourceLayoutComponent,
    data: { configId: 'resource-text' },
  },

  // BIBLIOTECA
  biblioteca: {
    paths: { it: 'biblioteca', en: 'en/library' },
    component: MrSearchLayoutComponent,
    data: { configId: 'search-books' },
  },  
  book: {
    paths: { it: 'libro/:id/:slug', en: 'en/book/:id/:slug' },
    component: MrResourceLayoutComponent,
    data: { configId: 'resource-book' },
  },

  // BIBLIOGRAFIA
  bibliografia: {
    paths: { it: 'bibliografia', en: 'en/bibliography' },
    component: MrSearchLayoutComponent,
    data: { configId: 'search-bibliografia' },
  }, 
  
  // BIOGRAFIA (VITE-ANTICHE)
  'vite-antiche': {
    paths: { it: 'vite-antiche', en: 'en/old-lifes' },
    component: MrSearchLayoutComponent,
    data: { configId: 'search-biographies' },
  },
  biography: {
    paths: { it: 'biografia/:id/:slug', en: 'en/biography/:id/:slug' },
    component: MrResourceLayoutComponent,
    data: { configId: 'resource-biography' },
  },

  // ICONOGRAFIA
  iconografia: {
    paths: { it: 'iconografia', en: 'en/iconography' },
    component: MrSearchLayoutComponent,
    data: { configId: 'search-iconographies' },
  },
  iconography: {
    paths: { it: 'iconografia/:id/:slug', en: 'en/iconography/:id/:slug' },
    component: MrResourceLayoutComponent,
    data: { configId: 'resource-iconography' },
  },

  // MATERIALI E STRUMENTI
  search_tools: {
    paths: { it: 'materiali_strumenti', en: 'en/tools' },
    component: MrSearchLayoutComponent,
    data: { configId: 'search-tools' },
  },
  tools: {
    paths: { it: 'strumenti/:id/:slug', en: 'en/tools/:id/:slug' },
    component: MrResourceLayoutComponent,
    data: { configId: 'resource-tools' },
  },

  // TIMELINE
  timeline: {
    paths: { it: 'timeline', en: 'en/timeline' },
    component: MrTimelineLayoutComponent,
    data: { configId: 'timeline' },
  },
  timelineItem: {
    component: MrTimelineLayoutComponent,
    paths: { it: 'timeline/:id/:slug', en: 'en/timeline/:id/:slug' },
    data: { configId: 'timeline' }
  },
  view_time_event: {
    paths: { it: 'time_event/:id/:slug', en: 'en/view_time_event/:id/:slug' },
    component: MrTimelineLayoutComponent,
    data: { configId: 'timeline' },
  },

  // NETWORK
  network: {
    component: MrNetworkLayoutComponent,
    paths: { it: 'network', en: 'en/network' },
    data: { configId: 'network' }
  }, 

  // PERCORSI
  itinerary: {
    paths: { it: 'percorsi/:id/:slug', en: 'en/itinerary/:id/:slug' },
    component: MrItineraryLayoutComponent,
    data: { configId: 'itinerary' },
  },

  // RICERCA AVANZATA
  search: {
    paths: { it: 'ricerca-avanzata', en: 'en/research' },
    component: MrAdvancedSearchLayoutComponent,
    data: { configId: 'advanced-search' },
  },
  search_results: {
    paths: { it: 'risultati', en: 'en/results' },
    component: MrAdvancedResultsLayoutComponent,
    data: { configId: 'advanced-results' },
  },

  // PAGINA STATICA
  page: {
    component: MrStaticLayoutComponent,
    paths: { it: ':slug', en: 'en/:slug' },
    data: { configId: 'page' },
  },

  // POST
  post: {
    component: MrStaticLayoutComponent,
    paths: { it: 'post/:slug', en: 'en/post/:slug' },
    data: { configId: 'post' },
  },

  // HOME
  home: {
    component: MrHomeLayoutComponent,
    paths: { it: '', en: 'en/' },
    data: { configId: 'home' },
  },
  homeRedirect: { 
    paths: { en: 'en' }, 
    isRedirect: true 
  },

  // PAGE 404
  page404: {
    paths: { it: NOT_FOUND_PATH, en: `en/${NOT_FOUND_PATH}` },
    component: Page404LayoutComponent,
    data: { id: 'page-404' },
  },
};

const APP_ROUTES: any = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
];

/**
 * Generate angular routes from config
 */
Object.keys(config).forEach((routeId) => {
  const { component, data, paths, isRedirect, redirectTo } = config[routeId];
  Object.entries(paths).forEach(([locale, path]) => {
    if (!isRedirect) {
      // path to component
      if (component) {
        APP_ROUTES.push({
          path,
          component,
          data: { ...data, routeId, locale },
          canActivate: [LocaleDependenciesGuard],
        });
      }
    } else {
      APP_ROUTES.push({ 
        path, 
        redirectTo: redirectTo ? redirectTo[locale] : `${path}/`,
        data: { ...data, routeId, locale }, 
      });
    }
  });
});

export { APP_ROUTES };