//PARSERS
import { BasemdwnameHomeParser } from './basemdwname-home';
import { BasemdwnameSearchParser } from './basemdwname-search';
import { BasemdwnameResourceParser } from "./basemdwname-resources";
import {
    MenuParser,
    FooterParser,
    StaticPageParser,
    TranslationParser,
    SearchDescriptionParser,
    TimelineParser,
    NetworkParser,
} from '@n7-frontend/n7-muruca-middleware';

export default {
    home: BasemdwnameHomeParser,
    search: BasemdwnameSearchParser,
    resource: BasemdwnameResourceParser,
    searchDescription: SearchDescriptionParser,
    menu: MenuParser,
    footer: FooterParser,
    static: StaticPageParser,
    translation: TranslationParser,
    timeline: TimelineParser,
    network: NetworkParser,
}