import Parser, { Input } from '@n7-frontend/serverless/dist/interfaces/parser';
import {
  ParsedData
} from '@n7-frontend/serverless/dist/interfaces/parser-data/resource';

export class BaseslsnameResourceParser implements Parser {
  parse({ data, options }: Input) {
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
        case 'title':
          conf[block].fields.map((field: string) => {
            // block = key della conf es. conf[title].fields
            parsed.title = data[field];
          });
          break;

        case 'header':
          parsed.sections[block] = {};
          let t = conf[block].fields;
          parsed.sections[block][t[0]] = data[t[0]]; // title
          parsed.sections[block][t[1]] = data[t[1]]; // description
          break;

        case 'image-viewer':
          parsed.sections[block] = {};
          let v = { images: [], thumbs: [] };
          let gallery = conf[block].fields[0]; // "gallery"
          if (typeof data[gallery] === 'string') {
            v.images.push({
              type: 'image',
              url: data[gallery],
              description: '',
            });
          } else {
            v.images = data[gallery].map((g: any) => ({
              type: 'image',
              url: g.image,
              description: g.description,
            }));
            v.thumbs = v.images;
          }
          parsed.sections[block] = v;
          break;

        case 'breadcrumbs':
          parsed.sections[block] = {};
          conf[block].fields.forEach((field: string) => {
            parsed.sections[block] = Array.isArray(data[field])
              ? data[field].map(({ id, slug, title }) => ({
                title,
                link: `/${type}/${id}/${slug}`,
              }))
              : [];
          });
          break;

        case 'metadata':
        case 'metadata-datos-bibliograficos':
        case 'metadata-datos-codicologicos':
        case 'metadata-proceso-composicion':
          parsed.sections[block] = {};
          const m = {
            group: [
              {
                title: 'Metadata',
                items: conf[block].fields.map((field: string) => {
                  if (data[field]) {
                    const filter = [
                      'date',
                      'author',
                      'type',
                      'collocation',
                      'censors_licenses',
                      'bibliografia'
                    ];
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
          m.group[0].items = [].concat.apply([], m.group[0].items); // flat()
          parsed.sections[block] = { ...m };
          break;

        case 'metadata-size':
          parsed.sections[block] = {};
          const m_2 = {
            group: [
              {
                title: 'Dimensioni',
                items: [].concat(
                  ...conf[block].fields // dimension
                    .map((field: string) =>
                      Object.keys(data[field]).map((f) => ({
                        label: f,
                        value:
                          f === 'image'
                            ? ("<img src='" + data[field][f] + "'>")
                            : data[field][f],
                      }))
                    )
                ),
              },
            ],
          };
          parsed.sections[block] = { ...m_2 };
          break;

        case 'metadata-description':
          parsed.sections[block] = {};
          const m_3 = {
            group: [
              {
                title: 'Descrizione',
                items: conf[block].fields // description
                  .map((field: string) => {
                    return { label: field, value: data[field] };
                  }),
              },
            ],
          };
          parsed.sections[block] = { ...m_3 };
          break;

        case 'collection-bibliografia-citada':
          parsed.sections[block] = {};
          const c_b: any = {
            header: {
              title: 'Bibliografie',
            },
            items: []
          };
          conf[block].fields.map(field => {
            data[field].map(rif => {
              rif['rif_biblio'].map(biblio => {
                c_b.items.push({
                  link: `/bibliografia?auth_query=${biblio.title}`,
                  text: `${biblio.description} ${rif.rif_biblio_position}`,
                })
              })
            })
          })
          parsed.sections[block] = { ...c_b };
          break;

        case 'preview-parent':
          parsed.sections[block] = {};
          conf[block].fields.map((field: string) => {
            // preview parent
            if (data[field]) {
              const previewItem = data[field].map(
                (f: {
                  title: string;
                  description: string;
                  image: any;
                  id: string;
                  slug: string;
                }) => ({
                  title: f.title,
                  description: f.description,
                  image: f.image,
                  link: `/${type}/${f.id}/${f.slug}`,
                  classes: 'is-fullwidth',
                })
              );
              parsed.sections[block] = { ...previewItem };
            }
          });
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
    if (/date/.test(field)) {
      filter = { label: field, value: data[field]['range'] };
    }

    if (/author|collocation|type/.test(field)) {
      filter = {
        label: field,
        value: Object.keys(data[field])
          .map((n) => data[field][n].name)
          .join(', '),
      };
    }

    if (/censors_licenses/.test(field)) {
      filter = {
        label: field.replace(/_/g, ' '),
        value:[]
       }
       data[field].map(c =>
        filter.value.push(
          Object.keys(c).map(f => (
            {label:f, value:c[f]}
          ))
        )
      )
    }

    if (/authors/.test(field)) {
      filter = [];
      switch (page) {
        case 'work':
          Object.keys(data[field]).map((auth) => {
            filter.push({
              label: 'author',
              value: data[field][auth].name,
            });
          });
          break;
      }
    }
    if (/sizes/.test(field)) {
      filter = { label: 'Size', value: data[field].size };
    }

    if (/loan/.test(field)) {
      filter = {
        label: field,
        value: data[field].map((l: any) => l).join(', '),
      };
    }

    if (
      /graphic_variant|definition|morphological_variant|modern_language_equivalence|synonyms/.test(
        field
      )
    ) {
      filter = {
        label: field.replace(/_/g, ' '),
        value: Object.keys(data[field])
          .map((auth) =>
            data[field][auth]['text']
              ? data[field][auth]['text']
              : data[field][auth]['equivalence']
                ? data[field][auth]['equivalence']
                : data[field][auth]['synonym']
          )
          .join(', '),
      };
    }
    if (/primary_sources|external_links/.test(field)) {
      filter = {
        label: field.replace(/_/g, ' '),
        value: Object.keys(data[field])
          .map((auth) => data[field][auth]['link'])
          .join(', '),
      };
    }

    if (/bibliografia/.test(field)) {
      filter = []
       data[field].map(rif => {
         rif.rif_biblio.map(bibl => {
           filter.push({
            label: bibl.title,
            value: `${bibl.description} ${rif.rif_biblio_position}`,
            link: `/${bibl.type}/${bibl.id}/#${bibl.slug}`
           })
         })
       })
    }
    return filter;
  }
}
