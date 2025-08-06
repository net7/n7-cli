/* eslint-disable camelcase */
// Search
import searchWorksConfig from './search-works.config';
import searchBooksConfig from './search-books.config';
import searchWitnessesConfig from './search-witnesses.config';
import searchBibliografia from './search-bibliography.config';
import searchIconographiesConfig from './search-iconographies.config';
import searchToolsConfig from './search-tools.config';
import searchBiographiesConfig from './search-biographies.config';
// Resource
import resourceWorkConfig from './resource-work.config';
import resourceBookConfig from './resource-book.config';
import resourceWitnessConfig from './resource-witness.config';
import resourceToponymConfig from './resource-toponym.config';
import resourceModalBibliographyConfig from './resource-modal-bibliography.config';
import resourceIconographyConfig from './resource-iconography.config';
import resourceBiographyConfig from './resource-biography.config';
import resourceToolConfig from './resource-tool.config';
import resourceKeywordConfig from './resource-keyword.config';
// Resource - Tabs
import tabsConfig from './tabs.config';
import resourceResNameIntroductionConfig from './resource-tab/resource-resName-introduction.config';
import resourceResNameDescriptionConfig from './resource-tab/resource-resName-description.config';
// Advanced search
import advancedSearchConfig from './advanced-search.config';
import advancedResultsConfig from './advanced-results.config';
// Others
import homeConfig from './home.config';
import itineraryConfig from './itinerary.config';
import timelineConfig from './timeline.config';
import networkConfig from './network-config';

export default {
  // Search
  'search-works': searchWorksConfig,
  'search-books': searchBooksConfig,
  'search-witnesses': searchWitnessesConfig,
  'search-bibliografia': searchBibliografia,
  'search-iconographies': searchIconographiesConfig,
  'search-tools': searchToolsConfig,
  'search-biographies': searchBiographiesConfig,
  // Resource
  'resource-work': resourceWorkConfig,
  'resource-book': resourceBookConfig,
  'resource-witness': resourceWitnessConfig,
  'resource-toponym': resourceToponymConfig,
  'resource-modal-bibliography': resourceModalBibliographyConfig,
  'resource-iconography': resourceIconographyConfig,
  'resource-biography': resourceBiographyConfig,
  'resource-tool': resourceToolConfig,
  'resource-keyword': resourceKeywordConfig,
  // Resource-tab
  tabs: tabsConfig,
  'resource-resName-introduction': resourceResNameIntroductionConfig,
  'resource-resName-description': resourceResNameDescriptionConfig,
  // Advanced search
  'advanced-search': advancedSearchConfig,
  'advanced-results': advancedResultsConfig,
  // Others
  home: homeConfig,
  itinerary: itineraryConfig,
  timeline: timelineConfig,
  network : networkConfig
};
