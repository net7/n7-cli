import { BaseLayoutDS } from './base-layout.ds';
import { BaseLayoutEH } from './base-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';

export const BaseLayoutConfig = {
  layoutId: 'appprefix-base-layout',
  widgets: [
    // TODO
  ],
  layoutDS: BaseLayoutDS,
  layoutEH: BaseLayoutEH,
  widgetsDataSources: DS,
  widgetsEventHandlers: EH,
  layoutOptions: {}
};
