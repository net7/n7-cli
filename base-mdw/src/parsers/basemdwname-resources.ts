import { ParsedData } from '@n7-frontend/n7-muruca-middleware';
import { ResourceParser } from '@n7-frontend/n7-muruca-middleware/dist/parsers/resource';

export class BasemdwnameResourceParser extends ResourceParser {
  parse({ data, options }: any) {
    if (!('type' in options)) {
      return;
    }

    const { conf, type } = options;

    const parsed: ParsedData = {
      title: '',
      sections: {},
    };

    for (const block in conf) {
      switch (block) {
        case 'header':
          parsed.sections[block] = {};
          let t = conf[block].fields;
          parsed.sections[block][t[0]] = data[t[0]]; // title
          break;

        case 'metadata':
          parsed.sections[block] = {};

          const m = {
            group: [
              {
                title: 'Metadata',
                items: conf[block].fields.map((field: string) => {
                  if (data[field]) {
                    const filter = [];
                    if (filter.indexOf(field) > -1) {
                      return this.filter(data, field, type); // metadata
                    } else {
                      return {
                        label: field.replace(/_/g, ' '),
                        value: data[field],
                      };
                    }
                  }
                }),
              },
            ],
          };
          m.group[0].items = m.group[0].items.filter((n: any) => n);
          parsed.sections[block] = { ...m };
          break;

        default:
          break;
      }
    }
    return parsed;
  }

  /**
   * Data filters
   */
  filter(data: any, field: string, page) {
    let filter;
    return filter;
  }
}
