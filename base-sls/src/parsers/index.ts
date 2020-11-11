//PARSERS
import { BaseslsnameHomeParser } from './baseslsname-home';
import { BaseslsnameSearchParser } from './baseslsname-search';
import { BaseslsnameResourceParser } from "./baseslsname-resources";
import {
    MenuParser,
    FooterParser,
    StaticPageParser,
    TranslationParser
} from '@n7-frontend/serverless';

export default {
    home: BaseslsnameHomeParser,
    search: BaseslsnameSearchParser,
    resource: BaseslsnameResourceParser,
    menu: MenuParser,
    footer: FooterParser,
    static: StaticPageParser,
    translation: TranslationParser
}