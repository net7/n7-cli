import {
  SearchParser,
  SearchResultsItemData,
  Input,
  SearchOptions,
} from '@n7-frontend/n7-muruca-middleware';

export class BasemdwnameSearchParser extends SearchParser {
  protected parseResultsItems({
    data,
    options,
  }: Input): SearchResultsItemData[] {
    var { searchId, conf } = options as SearchOptions;
    let items = [];
    if (searchId === 'work') {
      data.forEach(({ _source: source }) => {
        const item = {} as SearchResultsItemData;
        conf.results.forEach((val: { label: string; field: any }) => {
          switch (val.label) {
            case 'title':
              item[val.label] = source[val.field] || null;
              break;
            case 'metadata':
              item[val.label] = [
                {
                  items: [],
                },
              ];

              val.field.map((f) => {
                item[val.label][0].items.push({
                  label: f,
                  value: (source[f] || []).map((sf) => sf.name).join(', '),
                });
              });
              break;
            case 'metadata_type':
              item[val.label] = [];
              (source[val.field] || []).map((a) => {
                item[val.label] = { label: val.field, value: a.name };
              });
              break;
            case 'image':
              item[val.label] = source.thumbnail || null;
              break;
            case 'link':
              item[val.label] = `/obra/${source.id}/${source.slug}`;
              break;
            case 'id':
              item[val.label] = source.id;
              break;
            default:
              break;
          }
        });
        items.push(item);
      });
    } else if (searchId === 'bibliography') {
      data.forEach(({ _source: source }) => {
        const item = {} as SearchResultsItemData;
        conf.results.forEach((val: { label: string; field: any }) => {
          switch (val.label) {
            case 'title':
              item[val.label] = '';
              break;
            case 'text':
              item[val.label] = source[val.field] || null;
              break;
            case 'link':
              item[val.label] = '';
              break;
            case 'id':
              item[val.label] = source.id;
              break;
            default:
              break;
          }
        });
        items.push(item);
      });
    }
    return items;
  }
}
