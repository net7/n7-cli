import { DataSource } from '@n7-frontend/core';

export class BaDynamicDS extends DataSource {
  protected transform(data) {
    return data.map(({ name, description, html_url, stargazers_count, watchers_count}) => ({
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
        href: html_url,
        target: '_blank'
      }
    }));
  }
}
