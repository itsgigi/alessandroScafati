export interface Event {
    id: string;
    image: string;
    title: string;
    description: string;
    date: string;
    fullDate?: Date;
}

export const allEvents: Event[] = [
    {
        id: '1',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop',
        title: 'Evento Teatro Centrale',
        description: 'Uno straordinario spettacolo teatrale con Alessandro Scafati al Teatro Comunale.',
        date: '15 Marzo 2025',
        fullDate: new Date(2025, 2, 15) // Marzo è 2 (0-indexed)
    },
    {
        id: '2',
        image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=300&h=200&fit=crop',
        title: 'Mostra d\'Arte Contemporanea',
        description: 'Esposizione di opere contemporanee presso la galleria municipale con artisti internazionali.',
        date: '22 Aprile 2025',
        fullDate: new Date(2025, 3, 22) // Aprile è 3
    },
    {
        id: '3',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop',
        title: 'Concerto Sinfonico al Teatro',
        description: 'Gala musicale con orchestra sinfonica e ospiti d\'eccezione del panorama musicale.',
        date: '10 Maggio 2025',
        fullDate: new Date(2025, 4, 10) // Maggio è 4
    },
    {
        id: '4',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
        title: 'Reading Poetico al Palazzo',
        description: 'Una serata di poesia e musica con diversi artisti emergenti del mondo letterario.',
        date: '28 Giugno 2025',
        fullDate: new Date(2025, 5, 28) // Giugno è 5
    },
    {
        id: '5',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
        title: 'Workshop di Arti Performative',
        description: 'Laboratori creativi per adulti e bambini sulle arti performative e teatrali.',
        date: '5 Luglio 2025',
        fullDate: new Date(2025, 6, 5) // Luglio è 6
    },
    {
        id: '6',
        image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=300&h=200&fit=crop',
        title: 'Festa della Musica Sul Vivo',
        description: 'Celebrazione della musica dal vivo con artisti locali e internazionali.',
        date: '21 Settembre 2025',
        fullDate: new Date(2025, 8, 21) // Settembre è 8
    },
    {
        id: '7',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300&h=200&fit=crop',
        title: 'Serata di Beneficenza',
        description: 'Evento di raccolta fondi per sostenere progetti teatrali locali.',
        date: '3 Agosto 2025',
        fullDate: new Date(2025, 7, 3) // Agosto è 7
    },
    {
        id: '8',
        image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=300&h=200&fit=crop',
        title: 'Masterclass di Recitazione',
        description: 'Lezioni magistrali con professionisti del cinema e del teatro.',
        date: '18 Novembre 2025',
        fullDate: new Date(2025, 10, 18) // Novembre è 10
    }
];
