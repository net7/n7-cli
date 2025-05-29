import { ParsedData } from '@n7-frontend/n7-muruca-middleware';
import { ResourceParser } from '@n7-frontend/n7-muruca-middleware/dist/parsers/resource';

export class BasemdwnameResourceParser extends ResourceParser {
 

  // PARSERS
  // parseCollection(block: ConfBlock, data: any): OutputCollection {
  //   const collection : OutputCollection = {
  //     items: [],
  //   };
  //   block.fields.map((field: string) => {
  //     if (data[field]) {
  //       if (field === 'collegamenti_interni') {
  //         collection.items = data[field].map((item) => {
  //           const collectionItem = {
  //             title: item.collegamento[0].title,
  //             slug: item.collegamento[0].slug,
  //             id: item.collegamento[0].id,
  //             routeId: item.collegamento[0]['record-type'],
  //             text: item.collegamento_note
  //           };
  //           return collectionItem;
  //         });
  //       } else if (field === 'collegamenti_esterni') {
  //         collection.items.push({
  //           title: data[field].title,
  //           link: data[field].url,
  //           slug: '',
  //           id: 0,
  //           routeId: ''
  //         });
  //       }
  //     }
  //   });
  //   return collection;
  // }

  // FILTERS
  // filterMetadataItem(field: string, metadataItem: OutputMetadataItem, recordType: string, data: any): OutputMetadataItem {
  //   if (/label/.test(field)) {
  //     metadataItem = {
  //       label: field.replace(/_/g, " "),
  //       value: data[field].title
  //     }
  //   }
  //   return metadataItem;
  // }
}
