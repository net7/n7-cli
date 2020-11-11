import { Controller } from '@n7-frontend/serverless';
import parsers from "./parsers";
import configurations from "./configurations";

const controller = new Controller({
  parsers,
  configurations,
  baseUrl: process.env.BASE_URL,
  searchIndex: process.env.SEARCH_INDEX,
  elasticUri: process.env.ELASTIC_URI,
  pages: process.env.PAGES
});

const methods = controller.getSlsMethods();

export const getNavigation = methods.getNavigation;
export const getFooter = methods.getFooter;
export const getHomeLayout = methods.getHomeLayout;
export const getResource = methods.getResource;
export const search = methods.search;
export const getTranslation = methods.getTranslation;
export const getStaticPage = methods.getStaticPage;
