/* eslint-disable camelcase */
// Search
import searchWorksConfig from './search-works.config';
import searchBibliografia from './search-bibliography.config';
// Resource
import resourceWorkConfig from './resource-work.config';
import resourceModalBibliographyConfig from './resource-modal-bibliography.config';
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
import networkConfig from './network.config';

export default {
  // Search
  'search-works': searchWorksConfig,
  'search-bibliografia': searchBibliografia,
  // Resource
  'resource-work': resourceWorkConfig,
  'resource-modal-bibliography': resourceModalBibliographyConfig,
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
