export default {
  image: 'image',
  title: {
    data: 'item.label',
    maxLength: '80'
  },
  metadata: {
    info: {
      selection: [
        {
          key: 'definizione_tipologia'
        },
        {
          key: 'estremo_remoto'
        },
        {
          key: 'estremo_recente'
        }
      ],
      data: 'item.fields',
      value: 'value',
      label: 'key',
      customLabel: ''
    },
    toe: {
      data: 'relatedTypesOfEntity',
      value: 'count',
      icon: 'type'
    },
    breadcrumbs: {
      data: 'breadcrumbs',
      label: 'label',
      payload: 'link'
    }
  },
  payload: 'item.id',
  paginationLimit: '5'
};
