import { ConfigCommonCommunication } from '@n7-frontend/boilerplate';

export default {
  defaultProvider: 'apollo',
  providers: {
    apollo: {
      baseUrl: 'https://aw-unifi-graphql.netseven.it/'
    }
  }
} as ConfigCommonCommunication;
