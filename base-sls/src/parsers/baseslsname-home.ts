import { HomeParser } from '@n7-frontend/serverless';

export class BaseslsnameHomeParser extends HomeParser {
  protected parseSliderItems(data: any, block: string) {
    if (/slider-main/.test(block)) {
      return data.map((d: any) => ({
        items: [{ title: d.title }, { text: d.text }],
        action: {
          text: d.button.text,
          anchor: {
            href: d.button.anchor,
          },
        },
        background: {
          image: d.image,
        },
      }));
    }
  }
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