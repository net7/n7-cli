/* eslint-disable @typescript-eslint/camelcase */
import homeConfig from './home.config';
import searchWorksConfig from './search-works.config';
import searchBooksConfig from './search-books.config';
import searchWitnessesConfig from './search-witnesses.config';
import searchBibliografia from './search-bibliography.config';
import searchIconographiesConfig from './search-iconographies.config';
import searchToolsConfig from './search-tools.config';
import searchBiographiesConfig from './search-biographies.config';
import resourceBookConfig from './resource-book.config';
import resourceToponymConfig from './resource-toponym.config';
import resourceIconographyConfig from './resource-iconography.config';
import resourceKeywordConfig from './resource-keyword.config';
import resourceWorkConfig from './resource-work.config';
import resourceWitnessConfig from './resource-witness.config';
import resourceBiographyConfig from './resource-biography.config';
import resourceModalBibliography_witConfig from './resource-modal-bibliography_wit.config';
import resourceToolConfig from './resource-tool.config';
import itineraryConfig from './itinerary.config';

export default {
  home: homeConfig,
  itinerary: itineraryConfig,
  'search-works': searchWorksConfig,
  'search-books': searchBooksConfig,
  'search-witnesses': searchWitnessesConfig,
  'resource-biography': resourceBiographyConfig,
  'resource-tool': resourceToolConfig,
  'search-tools': searchToolsConfig,
  'search-biographies': searchBiographiesConfig,
  'resource-iconography': resourceIconographyConfig,
  'search-iconographies': searchIconographiesConfig,
  'resource-witness': resourceWitnessConfig,
  'resource-work': resourceWorkConfig,
  'resource-book': resourceBookConfig,
  'resource-toponym': resourceToponymConfig,
  'resource-keyword': resourceKeywordConfig,
  'search-bibliografia': searchBibliografia,
  'resource-modal-bibliography_wit': resourceModalBibliography_witConfig,
};
