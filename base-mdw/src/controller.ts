import { Controller } from '@n7-frontend/n7-muruca-middleware';
import parsers from './parsers';
import configurations from './configurations';
require('dotenv').config();

const options = {
  parsers,
  configurations,
  baseUrl: process.env.BASE_URL,
  staticUrl: process.env.STATIC_URL,
  searchIndex: process.env.SEARCH_INDEX,
  elasticUri: process.env.ELASTIC_URI,
  defaultLang: process.env.DEFAULT_LANG,
};

const controller = new Controller(options);

const methods = controller.getSlsMethods();

export const getNavigation = methods.getNavigation;
export const getFooter = methods.getFooter;
export const getHomeLayout = methods.getHomeLayout;
export const getSearchDescription = methods.getSearchDescription;
export const getMap = methods.getMap;
export const getTimeline = methods.getTimeline;
export const getResource = methods.getResource;
export const search = methods.search;
export const getTranslation = methods.getTranslation;
export const getStaticPage = methods.getStaticPage;
export const getStaticPost = methods.getStaticPost;
export const getItinerary = methods.getItinerary;
export const getItineraries = methods.getItineraries;

export { controller };
