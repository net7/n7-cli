import { ConfigCommonHeader } from '@n7-frontend/boilerplate';

export default {
  logo: {
    image: 'assets/logo.svg',
    anchor: {
      href: '/home',
    },
  },
  nav: {
    items: [
      {
        text: 'Home',
        icon: 'n7-icon-angle-right',
        anchor: { href: '/home' },
      },
      {
        text: 'About',
        icon: 'n7-icon-angle-right',
        anchor: { href: '/about' },
      },
      {
        text: 'Contact',
        icon: 'n7-icon-angle-right',
        anchor: { href: '/contact' },
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
