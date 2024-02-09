import { ConfigCommonFooter } from '@net7/boilerplate-common';

export default {
  columns: [
    {
      classes: 'col-class',
      title: 'BASEAPPNAME footer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit elit nunc, at porta ex accumsan id. Fusce quis lobortis sem, non ornare tellus.',
      images: [
        {
          url: 'https://via.placeholder.com/80',
          alttext: 'Logo 1',
          anchor: {
            href: 'https://www.google.it',
          },
        },
        {
          url: 'https://via.placeholder.com/80',
          alttext: 'Logo 2',
          anchor: {
            href: 'https://www.google.it',
          },
        },
      ],
    },
    {
      title: 'Privacy e info',
      links: [
        {
          text: 'About BASEAPPNAME',
          classes: 'link-class',
          anchor: {
            href: 'https://www.google.it',
          },
        },
        {
          text: 'Privacy policy',
          classes: 'link-class',
          anchor: {
            href: 'https://www.google.it',
          },
        },
        {
          text: 'Cooklie policy',
          anchor: {
            href: 'https://www.google.it',
          },
        },
        {
          text: 'Termini e condizioni',
          anchor: {
            href: 'https://www.google.it',
          },
        },
      ],
    },
    {
      text: 'BASEAPPNAME is powered by n7-framework',
    },
  ],
} as ConfigCommonFooter;
