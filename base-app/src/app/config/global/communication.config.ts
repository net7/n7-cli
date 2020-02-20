import apolloConfig from './apollo.config';
import restConfig from './rest.config';

export default {
  defaultProvider: 'rest',
  providers: {
    rest: {
      baseUrl: 'https://api.github.com/',
      config: restConfig
    },
    apollo: {
      baseUrl: 'http://apollo-example.com',
      config: apolloConfig
    }
  }
};
