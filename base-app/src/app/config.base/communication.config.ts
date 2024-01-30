import { ConfigCommonCommunication } from "@net7/boilerplate-common";

export default {
  defaultProvider: "rest",
  providers: {
    rest: {
      type: "rest",
      baseUrl: "https://api.github.com/",
      config: {
        getRepos: "orgs/octokit/repos",
      },
    },
  },
} as ConfigCommonCommunication;
