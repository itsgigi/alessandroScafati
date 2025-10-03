export interface PressArticle {
  id: string;
  title: string;
  author: string;
  publication: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: number;
}

export const pressArticles: PressArticle[] = [
  {
    id: '1',
    title: 'Alessandro Scafati: Il Nuovo Volto del Cinema Italiano',
    author: 'Marco Rossi',
    publication: 'Cinema Italiano Magazine',
    date: '2024-01-15',
    excerpt: 'Un approfondimento sul talento emergente che sta rivoluzionando il panorama cinematografico italiano.',
    content: `
      <p>Nel panorama cinematografico italiano contemporaneo, Alessandro Scafati emerge come una delle figure più interessanti e promettenti. La sua carriera, iniziata con piccoli ruoli in produzioni indipendenti, ha visto una crescita esponenziale che lo ha portato a collaborare con alcuni dei registi più affermati del nostro Paese.</p>
      
      <p>Scafati ha dimostrato una versatilità straordinaria, passando con naturalezza da ruoli drammatici a parti comiche, sempre mantenendo un'autenticità che cattura l'attenzione del pubblico. La sua capacità di immedesimarsi nei personaggi che interpreta è uno dei suoi punti di forza più evidenti.</p>
      
      <p>"Il cinema per me è una forma di comunicazione universale", ha dichiarato Scafati in un'intervista esclusiva. "Ogni ruolo che interpreto mi permette di esplorare nuove sfaccettature dell'animo umano e di connettermi con il pubblico in modo profondo e significativo."</p>
      
      <p>I critici hanno elogiato la sua performance nell'ultimo film "La Città Perduta", dove ha interpretato un giovane architetto alle prese con i misteri di una città antica. La sua interpretazione è stata definita "intensa e commovente" dalla stampa specializzata.</p>
    `,
    image: '/public/ale1.jpg',
    category: 'Cinema',
    readTime: 5
  },
  {
    id: '2',
    title: 'Intervista Esclusiva: Alessandro Scafati Racconta la Sua Storia',
    author: 'Giulia Bianchi',
    publication: 'Vogue Italia',
    date: '2024-01-10',
    excerpt: 'Il giovane attore svela i segreti del suo successo e i progetti futuri.',
    content: `
      <p>Incontro Alessandro Scafati in un caffè nel centro di Roma. Il giovane attore, nonostante il crescente successo, mantiene un'umiltà disarmante e una passione contagiosa per il suo lavoro.</p>
      
      <p>"Ho iniziato a recitare quasi per caso", racconta con un sorriso. "Ero uno studente di architettura quando un amico mi ha proposto di partecipare a un provino per un cortometraggio. Da lì è iniziato tutto."</p>
      
      <p>La sua preparazione è meticolosa: per ogni ruolo studia il personaggio per settimane, si documenta sul periodo storico, legge libri e guarda film correlati. "Credo che la preparazione sia fondamentale. Più conosci il tuo personaggio, più autentica sarà la tua interpretazione."</p>
      
      <p>Tra i suoi progetti futuri c'è un film internazionale che lo vedrà protagonista accanto a star di Hollywood. "È un'opportunità incredibile", confessa. "Sono emozionato e impaurito allo stesso tempo, ma è esattamente quello che cercavo."</p>
    `,
    image: '/public/ale2.jpg',
    category: 'Intervista',
    readTime: 4
  },
  {
    id: '3',
    title: 'Scafati Vince il Premio Miglior Attore Emergente',
    author: 'Roberto Conti',
    publication: 'La Repubblica',
    date: '2024-01-05',
    excerpt: 'Il riconoscimento al Festival del Cinema di Venezia per la sua performance in "La Città Perduta".',
    content: `
      <p>Il Festival del Cinema di Venezia ha conferito ad Alessandro Scafati il prestigioso Premio Miglior Attore Emergente per la sua interpretazione in "La Città Perduta". La giuria ha motivato la scelta sottolineando "la maturità interpretativa e l'intensità emotiva" dimostrate dall'attore.</p>
      
      <p>Scafati, visibilmente emozionato, ha ringraziato il regista, la troupe e tutti coloro che hanno creduto in lui. "Questo premio non è solo mio, è di tutti coloro che hanno lavorato al progetto. È un riconoscimento al lavoro di squadra."</p>
      
      <p>Il film, diretto da Marco Tullio Giordana, racconta la storia di un giovane architetto che scopre i segreti di una città antica. La performance di Scafati è stata definita "magistrale" dai critici presenti alla proiezione.</p>
      
      <p>Con questo premio, Scafati si conferma come una delle promesse del cinema italiano, pronto a conquistare anche il pubblico internazionale.</p>
    `,
    image: '/public/ale3.jpg',
    category: 'Premi',
    readTime: 3
  },
  {
    id: '4',
    title: 'Alessandro Scafati: Il Metodo e la Passione',
    author: 'Francesca De Santis',
    publication: 'Vanity Fair',
    date: '2023-12-28',
    excerpt: 'Un viaggio nel mondo creativo dell\'attore emergente che sta conquistando il cinema italiano.',
    content: `
      <p>Dietro ogni grande attore c'è un metodo, una disciplina, una passione che va oltre il semplice talento. Alessandro Scafati incarna perfettamente questa filosofia, combinando rigore professionale e spontaneità creativa.</p>
      
      <p>Il suo approccio al lavoro è sistematico: ogni mattina si alza presto per fare esercizi vocali, poi si dedica allo studio del copione e alla ricerca sul personaggio. "La preparazione fisica e mentale è fondamentale", spiega. "Il corpo e la mente devono essere in sintonia per dare il meglio."</p>
      
      <p>La sua passione per il cinema è nata da bambino, quando guardava i film di Sergio Leone con suo padre. "Quella magia, quella capacità di trasportarti in mondi lontani, mi ha sempre affascinato. Volevo essere parte di quella magia."</p>
      
      <p>Oggi, a distanza di anni, Scafati è riuscito nel suo intento, diventando lui stesso un creatore di quella magia che tanto lo aveva affascinato da bambino.</p>
    `,
    image: '/public/ale4.jpg',
    category: 'Cinema',
    readTime: 6
  },
  {
    id: '5',
    title: 'Scafati: "Il Cinema Italiano Ha Bisogno di Coraggio"',
    author: 'Antonio Verdi',
    publication: 'Corriere della Sera',
    date: '2023-12-20',
    excerpt: 'L\'attore emergente parla delle sfide del cinema italiano contemporaneo.',
    content: `
      <p>"Il cinema italiano ha bisogno di coraggio, di osare, di sperimentare". Queste le parole di Alessandro Scafati durante una conferenza stampa a Milano, dove ha presentato il suo ultimo progetto cinematografico.</p>
      
      <p>Scafati critica la tendenza del cinema italiano a rimanere ancorato a formule consolidate, senza osare l'innovazione. "Abbiamo una tradizione cinematografica straordinaria, ma non possiamo vivere solo di quella. Dobbiamo guardare al futuro, essere coraggiosi nelle scelte narrative e stilistiche."</p>
      
      <p>Il giovane attore propone un cinema più internazionale, che sappia dialogare con le altre cinematografie europee e mondiali. "Il mondo è cambiato, il pubblico è cambiato. Dobbiamo evolvere con lui, mantenendo però la nostra identità italiana."</p>
      
      <p>Le sue parole hanno suscitato un acceso dibattito nel mondo del cinema, con molti che si sono dichiarati d'accordo con le sue posizioni, mentre altri hanno espresso perplessità.</p>
    `,
    image: '/public/ale5.jpg',
    category: 'Opinioni',
    readTime: 4
  },
  {
    id: '6',
    title: 'Alessandro Scafati: Dietro le Quinte del Successo',
    author: 'Elena Romano',
    publication: 'GQ Italia',
    date: '2023-12-15',
    excerpt: 'Un ritratto intimo dell\'attore che sta rivoluzionando il cinema italiano.',
    content: `
      <p>Dietro il successo di Alessandro Scafati c'è una storia di determinazione, sacrifici e passione autentica per l'arte cinematografica. Incontro l'attore nel suo appartamento romano, un loft minimalista arredato con gusto e personalità.</p>
      
      <p>"Il successo non è arrivato per caso", racconta mentre mi mostra la sua collezione di libri di cinema. "Ho lavorato sodo, ho rifiutato ruoli che non mi convincevano, ho aspettato il momento giusto."</p>
      
      <p>La sua giornata tipo inizia alle 6 del mattino con una corsa nel parco, seguita da esercizi vocali e di recitazione. "La disciplina è tutto", afferma. "Senza disciplina non c'è creatività."</p>
      
      <p>Tra i suoi progetti futuri c'è anche la regia. "Vorrei dirigere un film che racconti la storia di un giovane che scopre la sua passione per il cinema. È una storia che conosco bene."</p>
      
      <p>Con la sua determinazione e il suo talento, Alessandro Scafati è destinato a diventare uno dei protagonisti del cinema italiano degli anni a venire.</p>
    `,
    image: '/public/ale6.jpg',
    category: 'Profilo',
    readTime: 5
  }
];
