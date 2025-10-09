/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HYGRAPH_API_URL: string
  // aggiungi qui altre variabili d'ambiente
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

