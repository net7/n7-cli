import { ConfigCommonHeader } from '@net7/boilerplate-common';

export default {
  logo: {
    image: '/assets/a4v-header-logo.png',
    anchor: {
      href: '/',
    },
  },
  nav: {
    items: [
      {
        text: 'Home',
        icon: 'n7-icon-home',
        anchor: {
          href: '/',
        },
        _meta: {
          id: 'home',
        },
      },
      {
        text: 'Patrimonio',
        anchor: {
          href: 'patrimonio',
        },
        icon: 'n7-icon-tree-icon',
        _meta: {
          id: 'patrimonio',
        },
      },
      {
        text: 'Galleria',
        anchor: {
          href: 'galleria',
        },
        icon: 'n7-icon-th',
        _meta: {
          id: 'galleria',
        },
      },
      {
        text: 'Mappa',
        anchor: {
          href: 'mappa',
        },
        icon: 'n7-icon-map1',
        _meta: {
          id: 'mappa',
        },
      },
      {
        text: 'Timeline',
        anchor: {
          href: 'timeline',
        },
        icon: 'n7-icon-calendar-alt',
        _meta: {
          id: 'timeline',
        },
      },
      {
        text: 'Collezione',
        anchor: {
          href: 'collection/44',
        },
        icon: 'n7-icon-th',
        _meta: {
          id: 'collection',
        },
      },
      {
        text: 'Ricerca',
        anchor: {
          href: 'ricerca',
        },
        icon: 'n7-icon-search',
        _meta: {
          id: 'ricerca',
        },
      },
    ],
  },
  menuToggle: {
    open: {
      payload: 'mobile-open',
    },
    close: {
      payload: 'mobile-close',
    },
  },
} as ConfigCommonHeader;
