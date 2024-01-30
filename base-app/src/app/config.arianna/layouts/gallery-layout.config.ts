import { ConfigAriannaGalleryLayout } from "@net7/boilerplate-arianna";

export default {
  title: "Cerca nella galleria",
  results: ["Nessun risultato", "Risultato", "Risultati"],
  enabledEntities: [
    "oggetto-culturale",
    "aggregazione",
    "persona",
    "luogo",
    "cosa-notevole",
    "organizzazione",
  ],
  fallback:
    "La tua ricerca non ha dato risultati. Prova a cambiare i parametri oppure a resettare la ricerca cliccando sul pulsante sottostante.",
} as ConfigAriannaGalleryLayout;
