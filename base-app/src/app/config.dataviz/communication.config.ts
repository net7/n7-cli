import { ConfigCommonCommunication } from '@n7-frontend/boilerplate';

export default {
  defaultProvider: 'rest',
  providers: {
    rest: {
      type: 'rest',
      baseUrl: 'https://api.github.com/',
      config: {
        getRepos: 'orgs/octokit/repos',
      },
    },
  },
} as ConfigCommonCommunication;
