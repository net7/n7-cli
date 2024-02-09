import { ConfigCommonCommunication } from '@net7/boilerplate-common';

export default {
  defaultProvider: 'apollo',
  providers: {
    apollo: {
      baseUrl: 'https://aw-unifi-graphql.netseven.it/',
    },
  },
} as ConfigCommonCommunication;
