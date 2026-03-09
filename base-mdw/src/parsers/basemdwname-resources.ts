import { ParsedData } from '@n7-frontend/n7-muruca-middleware';
import { ResourceParser } from '@n7-frontend/n7-muruca-middleware/dist/parsers/resource';

export class BasemdwnameResourceParser extends ResourceParser {
 
  // PARSERS

  // FILTERS
  filterMetadataItem(field: string, metadataItem: OutputMetadataItem, recordType: string, data: any): OutputMetadataItem {
    // Metadato piatto
    if (/^esempio1$/.test(field)) {
      metadataItem = {
        label: field.replace(/_/g, " "),
        value: data[field].title
      }
    }
    // Metadato raggruppato
    else if (/^esempio2$/.test(field)) {
      metadataItem = {
        label: field.replace(/_/g, " "),
        value: data[field]
          .filter((item) => item.title)
          .map((item) => (item.title)).join(', '),
      }
    }
    // Metadato annidato
    else if (/^esempio3$/.test(field)) {
      metadataItem = {
        label: field.replace(/_/g, " "),
        value: data[field]
          .filter((item) => item.title)
          .map((item) => ([{ label: "", value: item.title}])),
      }
    }
    // Metadato annidato multiplo
    else if (/^esempio4$/.test(field)) {
      metadataItem = {
        label: field.replace(/_/g, " "),
        value: data[field]
          .filter((item) => item.title)
          .map((item) => (Object.keys(item).map((key) => ({ label: key, value: item[key]})))),
      }
    }
    return metadataItem;
  }
}
