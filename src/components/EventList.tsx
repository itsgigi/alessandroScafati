import { useNavigate } from 'react-router-dom';
import AnimatedList from './constants/AnimatedList';
import Block from './constants/Block';
import Heading from './constants/ui/Heading';
import { allEvents } from './constants/eventsData';

interface EventListProps {
    selectedDate: Date | null;
}

const EventList = ({ selectedDate }: EventListProps) => {
    const navigate = useNavigate();

    // Funzione per confrontare le date (solo giorno, mese, anno)
    const isSameDate = (date1: Date, date2: Date) => {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    };

    // Filtra gli eventi in base alla data selezionata
    const filteredEvents = selectedDate 
        ? allEvents.filter(event => event.fullDate && isSameDate(event.fullDate, selectedDate))
        : allEvents;

    // Ordina gli eventi per data
    const sortedEvents = filteredEvents.sort((a, b) => {
        if (!a.fullDate || !b.fullDate) return 0;
        return a.fullDate.getTime() - b.fullDate.getTime();
    });

    const getTitleText = () => {
        if (!selectedDate) {
            return 'Tutti gli Eventi';
        }
        
        const eventCount = filteredEvents.length;
        const dateString = selectedDate.toLocaleDateString('it-IT', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        });
        
        if (eventCount === 0) {
            return `Nessun evento per ${dateString}`;
        } else if (eventCount === 1) {
            return `${dateString}`;
        } else {
            return `${eventCount} Eventi del ${dateString}`;
        }
    };

    return (
        <Block className='md:col-span-4 col-span-8'>
            <Heading title={getTitleText()} />
            
            {filteredEvents.length > 0 ? (
                <AnimatedList
                    items={sortedEvents.map(event => ({
                        id: event.id,
                        image: event.image,
                        title: event.title,
                        description: event.description,
                        date: event.date
                    }))}
                    onItemSelect={(item) => navigate(`/eventi/${item.id}`)}
                    showGradients={true}
                    enableArrowNavigation={true}
                    displayScrollbar={true}
                />
            ) : (
                <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-300 mb-2">
                        Nessun evento trovato
                    </h3>
                    <p className="text-gray-500">
                        {selectedDate 
                            ? 'Non ci sono eventi programmati per questa data.'
                            : 'Seleziona una data dal calendario per vedere gli eventi.'
                        }
                    </p>
                </div>
            )}
        </Block>
    );
};

export default EventList;
