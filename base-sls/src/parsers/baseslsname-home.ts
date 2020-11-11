import { HomeParser } from '@n7-frontend/serverless';

export class BaseslsnameHomeParser extends HomeParser {
  protected parseCollectionItems(data: any, block: string) {
    if (/collection-works/.test(block)) {
      return data.items.map((d: any) => ({
        title: d.item[0].title,
        text: d.item[0].description,
        link: `/work/${d.item[0].id}/${d.item[0].slug}`
      }))
    }
  }
}