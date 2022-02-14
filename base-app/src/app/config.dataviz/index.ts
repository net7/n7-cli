import communicationConfig from './communication.config';
import headerConfig from './header.config';
import footerConfig from './footer.config';
import layouts from './layouts';

export default {
  name: 'BASEAPPNAME',
  communication: communicationConfig,
  header: headerConfig,
  footer: footerConfig,
  ...layouts
};
