import { ConfigAriannaSchedaLayout } from "@net7/boilerplate-arianna";

export default {
  "empty-html": "<span>Non sono disponibili informazioni.<span>",
  "empty-label":
    "<h2>Benvenuto nel patrimonio dell’Archivio Flamigni</h2><p>Il Centro documentazione conserva l’archivio di Sergio Flamigni e i fondi archivistici di Emilia Lotti, dirigente nazionale dell'Unione donne in Italia e del Pci; di Piera Amendola, responsabile dell’archivio della Commissione P2; di Aldo Moro, il cui versamento completa e arricchisce il patrimonio archivistico del politico conservato presso l’Archivio centrale dello Stato; di Angelo La Bella, partigiano, dirigente del Pci, studioso della strage di Portella della Ginestra. Nel 2017 il Centro ha acquisito il fondo dello storico Giuseppe De Lutiis, specializzato nella storia del terrorismo e dei servizi segreti. L’Archivio Flamigni cura anche il fondo archivistico di Giuseppe Zupo, difensore di parte civile nel processo per gli omicidi Reina, Mattarella, La Torre-Di Salvo e del giornalista RAI Alberto Mentasti, di proprietà dell’Istituto di studi giuridici Arturo Carlo Jemolo.</p><p>L’Istituto inoltre conserva il proprio patrimonio documentario prodotto nel corso dei progetti di tutela e di ricerca relativi alla documentazione su fatti di terrorismo, mafia, criminalità organizzata.</p>",
  "external-url-text": "Visualizza",
  "related-entities": {
    title: "Entità collegate",
  },
  "related-items": {
    title: "Oggetti culturali simili",
    "max-related-items": 6,
  },
  metadata: {
    title: "Informazioni",
  },
  tree: {
    lite: false,
    "icon-expand": "n7-icon-angle-right",
    "icon-collapse": "n7-icon-angle-down",
    "icon-image": "n7-icon-image",
    "icon-map": [
      {
        "oc-type-foo": "n7-icon-building",
      },
      {
        "oc-type-bar": "n7-icon-biography",
      },
    ],
  },
  "image-viewer": {
    "context-menu": false,
  },
  "pdf-viewer": {
    libOptions: {
      // showToolbar: true,
      // showSidebarButton: true,
      // showFindButton: true,
      // showPagingButtons: true,
      // showZoomButtons: true,
      // showPresentationModeButton: true,
      // showOpenFileButton: false,
      showPrintButton: true,
      showDownloadButton: true,
      // showBookmarkButton: false,
      // showSecondaryToolbarButton: true,
      // showRotateButton: false,
      // showHandToolButton: true,
      // showScrollingButton: false,
      // showSpreadButton: false,
      // showPropertiesButton: false
    },
  },
  "metadata-to-show": {
    "aggregazione-logica": [
      "estremo_remoto",
      "estremo_recente",
      "tipologia",
      "altre_denominazioni",
      "altre_denominazioni.denominazione",
      "altre_denominazioni.tipologia",
      "consistenza",
      "consistenza.quantita",
      "consistenza.unitaMisura",
      "soggettoProduttore",
      "soggettoProduttore.soggettoProduttore",
      "soggettoProduttore.label",
      "soggettoConservatore",
      "soggettoConservatore.label",
      "soggettoConservatore.soggettoConservatoreAttuale",
      "soggettoConservatore.tipoResponsabilita",
      "soggettoConservatore.parteConservata",
      "soggettoConservatore.causeAcquisizione",

      "produzione",
      "produzione.soggettoProduttore",

      "produzione.soggettoConservatoreAttuale",
      "produzione.soggettoConservatore",
      "produzione.tipoResponsabilita",
      "produzione.parteConservata",
      "produzione.causeAcquisizione",
      "descrizione_interna",
      "storia_ordinamenti",
      "stato_conservazione",
      "altra_documentazione",
      "descrizione_esterna",
      "storia_ubicazioni",
      "condizioni_consultazione_modalita",
      "condizioni_consultazione_tempi",
      "corredoRicerca",
      "corredoRicerca.tipologia",
      "corredoRicerca.riferimento",
      "corredoRicerca.descrizione",
    ],
    "oggetto-culturale": [],
    UASC: [
      "estremo_remoto",
      "estremo_recente",
      "altreSegnature",
      "altreSegnature.numerazione",
      "altreSegnature.tipologia",
      "altra_intitolazione",
      "altra_intitolazione.tipologia",
      "altra_intitolazione.intitolazione",
      "tipologiaMateriale",
      "supporto",
      "statoConservazione",
      "descrizioneContenuto",
      "autoreCommittente",
      "editore",
      "luogoEdizione",
      "dataEdizione",
      "unitaPrelievo",
      "altezza",
      "larghezza",
      "spessore",
      "consistenzaOC",
      // 'entitaRelazionata',
      "tipologiaRappresentazione",
      "stampa",
      "stadioRedazione",
      "procedimentoGrafico",
      "mediazioniGrafiche",
      "dimensioniRaffigurazioneAltezza",
      "dimensioniRaffigurazioneLarghezza",
      "lingua",
      "scalaNumerica",
      "proiezione",
      "orientamento",
      "coordinateOC",
      "reticolo",
      "scalaGrafica",
      "scalaGrafica.scala",
      "scalaGrafica.parteRiferita",
      "legende",
      "riproduzioneEsistente",
      "riproduzioneEsistente.tipologia",
      "corredoRicerca",
      "corredoRicerca.tipologia",
      "corredoRicerca.riferimento",
      "corredoRicerca.descrizione",
    ],
    UA: [
      "estremo_remoto",
      "estremo_recente",
      "altraSegnatura",
      "altraSegnatura.numerazione",
      "altraSegnatura.tipologia",
      "altra_intitolazione",
      "altra_intitolazione.intitolazione",
      "altra_intitolazione.tipologia",
      "definizione_tipologia",
      "supporto",
      "consistenza",
      "consistenza.quantita",
      "consistenza.unitaMisura",
      "descrizione_interna",
      "altezza",
      "larghezza",
      "spessore",
      "stato_conservazione",
      "legatura",
      "legatura.tipologia",
      "legatura.epoca",
      "legatura.datazione",
      "condizionamento",
      "condizionamento.tipologia",
      "condizionamento.materia",
      "condizionamento.epoca",
      "condizionamento.datazione",
      "numerazione",
      "numerazione.numerazione",
      "numerazione.tipoNumerazione",
      "numerazione.epoca",
      "numerazione.datazione",
      "descrizioneEsterna",
      "descrizioneEsterna.tipologia",
      "descrizioneEsterna.posizione",
      "descrizioneEsterna.trascrizione",
      "descrizione_interna_tipologia",
      "descrizione_interna_trascrizione",
      "documentazioneTestuale",
      "documentazioneTestuale.tipologia",
      "documentazioneTestuale.lingua",
      "documentazioneGrafica",
      "documentazioneGrafica.tipologia",
      "documentazioneGrafica.tecnicaEsecutiva",
      "documentazioneCopia",
      "documentazioneCopia.tipologia",
      "documentazioneCopia.epoca",
      "strumentoCorredoInterno",
      "strumentoCorredoInterno.tipologia",
      "strumentoCorredoInterno.oggetto",
      "strumentoCorredoInterno.epoca",
      "corredoRicerca",
      "corredoRicerca.tipologia",
      "corredoRicerca.riferimento",
      "corredoRicerca.descrizione",
    ],
  },
} as ConfigAriannaSchedaLayout;
