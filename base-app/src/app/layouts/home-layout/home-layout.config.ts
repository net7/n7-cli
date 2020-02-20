import { BaHomeLayoutDS } from './home-layout.ds';
import { BaHomeLayoutEH } from './home-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';

export const BaHomeLayoutConfig = {
  layoutId: 'ba-home-layout',
  widgets: [
    { id: 'ba-static', hasStaticData: true },
    { id: 'ba-dynamic' },
  ],
  layoutDS: BaHomeLayoutDS,
  layoutEH: BaHomeLayoutEH,
  widgetsDataSources: DS,
  widgetsEventHandlers: EH,
  layoutOptions: {}
};
