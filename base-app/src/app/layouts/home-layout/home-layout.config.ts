import { HomeLayoutDS } from './home-layout.ds';
import { HomeLayoutEH } from './home-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';

export const HomeLayoutConfig = {
  layoutId: 'ba-home-layout',
  widgets: [
    { id: 'ba-static', hasStaticData: true },
    { id: 'ba-dynamic' },
  ],
  layoutDS: HomeLayoutDS,
  layoutEH: HomeLayoutEH,
  widgetsDataSources: DS,
  widgetsEventHandlers: EH,
  layoutOptions: {}
};
