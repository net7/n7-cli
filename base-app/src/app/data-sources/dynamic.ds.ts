import { DataSource } from '@net7/core';

export class DynamicDS extends DataSource {
  protected transform(data) {
    const randomItem = data[Math.floor(Math.random() * data.length)];
    const {
      name,
      description,
      stargazers_count: stargazersCount,
      watchers_count: watchersCount,
    } = randomItem;
    return {
      title: name,
      text: description,
      metadata: [
        {
          title: 'Stats',
          items: [
            {
              icon: 'n7-icon-check-circle',
              label: 'stargazers',
              value: stargazersCount,
            },
            {
              icon: 'n7-icon-eye',
              label: 'watchers',
              value: watchersCount,
            },
          ],
        },
      ],
      anchor: {
        payload: randomItem,
      },
    };
  }
}
