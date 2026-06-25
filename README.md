# Portfolio Attore Alessandro Scafati

![Alessandro Scafati - Portfolio](public/ale.jpg)

## Descrizione del Sito

Questo è il portfolio professionale di **Alessandro Scafati**, attore, performer e artista. Il sito presenta un design elegante e moderno con un tema scuro e accenti dorati, che riflette la professionalità e l'arte dell'attore.

## Sezioni Principali

### 🏠 **Homepage**
- **Hero Section**: Presentazione principale con immagini in crossfade e titolo animato
- **About Section**: Sezione composita che include:
  - **Bio**: Biografia e presentazione dell'attore
  - **Events**: Anteprima degli eventi più recenti
  - **Showreel**: Video dimostrativo delle capacità artistiche
  - **More Content**: Contenuti aggiuntivi e approfondimenti

### 🎬 **Casting** (`/casting`)
- Informazioni e materiali per casting e provini
- Presentazione professionale per registi e produzioni

### 🎥 **Showreel** (`/showreel`)
- Video reel delle migliori performance
- Materiale audiovisivo dimostrativo

### 📅 **Eventi** (`/eventi`)
- **Calendario interattivo**: Visualizzazione mensile degli eventi
- **Lista eventi**: Dettagli completi di ogni evento con possibilità di filtraggio per data
- **Eventi singoli** (`/eventi/:eventId`): Pagine dedicate per ogni evento specifico

### 📋 **Curriculum** (`/curriculum`)
- **Esperienze professionali**: Panoramica completa del percorso artistico
- **Timeline multi-settore**: Cronologia dettagliata divisa per:
  - 🎭 **Teatro**: Spettacoli e ruoli teatrali
  - 🎬 **Cinema**: Film e produzioni cinematografiche
  - 📺 **Televisione**: Serie TV e programmi televisivi
  - 📢 **Pubblicità**: Campagne pubblicitarie e spot

### 📸 **Book** (`/book`)
- **Galleria fotografica**: Layout a masonry con immagini professionali
- **Portfolio visivo**: Raccolta delle migliori foto per casting e presentazioni
- **Effetti interattivi**: Hover effects e animazioni fluide

### 📰 **Press** (`/press`)
- Articoli e recensioni
- Interviste e media coverage
- Riconoscimenti e premi
- **Dettaglio articolo** (`/press/:articleId`): Pagine dedicate per ogni articolo

### 📞 **Contatti** (`/contatti`)
- Informazioni per casting e collaborazioni
- Contatti diretti e social media
- Modulo di contatto integrato

### 🔒 **Privacy Policy** (`/privacy`)
- Informativa sulla privacy e trattamento dati

## Caratteristiche Tecniche

- **Framework**: React 19 con TypeScript
- **Build System**: Vite 6
- **Styling**: Tailwind CSS 4 con tema personalizzato
- **Animazioni**: Framer Motion per transizioni fluide
- **Smooth Scroll**: Lenis per scrolling fluido
- **Routing**: React Router 7 per navigazione SPA
- **Data Fetching**: TanStack React Query con GraphQL (graphql-request)
- **SEO**: React Helmet Async per meta tag dinamici
- **Pre-rendering**: Script di pre-rendering con Puppeteer per SSG
- **Analytics**: Vercel Analytics per tracciamento visitatori e page views
- **Responsive**: Design completamente responsive per tutti i dispositivi
- **Icone**: Lucide React e React Icons

## Palette Colori

- **Sfondo principale**: Nero (`#000000`)
- **Testo principale**: Bianco/Zinc (`#ffffff`, `#f4f4f5`)
- **Accenti**: Oro (`#d1af89`)
- **Elementi UI**: Gradazioni di grigio e oro per contrasto elegante

## Font

- **Titoli**: Dancing Script (elegante e artistico)
- **Testo**: Lato (moderno e leggibile)

---

*Sito sviluppato per presentare il portfolio professionale di Alessandro Scafati nel mondo dello spettacolo italiano.*

## Installazione e Avvio

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Preview build di produzione
npm run preview
```
