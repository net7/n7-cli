import { DataSource } from '@n7-frontend/core';

export class DynamicDS extends DataSource {
  protected transform(data) {
    const randomItem = data[Math.floor(Math.random() * data.length)];
    const { name, description, stargazers_count, watchers_count} = randomItem;
    return {
      title: name,
      text: description,
      metadata: [{
        title: 'Stats',
        items: [
          {
            icon: 'n7-icon-check-circle',
            label: 'stargazers',
            value: stargazers_count
          },
          {
            icon: 'n7-icon-eye',
            label: 'watchers',
            value: watchers_count
          },
        ]
      }],
      anchor: {
        payload: randomItem
      }
    };
  }
}
