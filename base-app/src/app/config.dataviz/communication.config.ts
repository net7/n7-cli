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
};
