import { ConfigAriannaEntitaLayout } from '@net7/boilerplate-arianna';

export default {
  overview: {
    informazioni: [
      'data_istituzione',
      'denominazione_autorita'
    ],
    smallChartSize: 3
  },
  fallback: 'Non sono disponibili informazioni per questa entità.',
  entitiesQuerySize: 30,
  'metadata-to-show': [
    'TIPOLOGIA',
    'tipologia',
    'ENTITA-PERSONA-1',
    'luogo_nascita',
    'data_nascita',
    'luogo_morte',
    'data_morte',
    'genere',
    'ENTITA-FAMIGLIA-1',
    'data_fondazione',
    'data_estinzione',
    'ENTITA-ORGANIZZAZIONE-1',
    'natura_giuridica',
    'data_istituzione',
    'data_soppressione',
    'ENTITA-LUOGO-1',
    'ENTITA-EVENTO-1',
    'ALTRA-DENOMINAZIONE',
    'altraDenominazione',
    'altraDenominazione.altraDenominazione',
    'altraDenominazione.tipologiaDenominazione',
    'ENTITA-PERSONA-2',
    'altro_luogo',
    'biografia',
    'qualifica',
    'qualifica.qualifica',
    'qualifica.tipologia',
    'ENTITA-FAMIGLIA-2',
    'luogo',
    'ENTITA-ORGANIZZAZIONE-2',
    'sede',
    'ENTITA-LUOGO-2',
    'stato',
    'regione',
    'provincia',
    'comune',
    'ENTITA-EVENTO-2',
    'data_inizio',
    'data_fine',
    'ricorrenza',
    'NOTE-STORICHE',
    'note_storiche',
    'DESCRIZIONE',
    'descrizione',
    'ENTITA-ORGANIZZAZIONE-3',
    'struttura_funzioni'
  ]
} as ConfigAriannaEntitaLayout;
