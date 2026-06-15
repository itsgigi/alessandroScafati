import { useNavigate } from 'react-router-dom';
import AnimatedList from './constants/AnimatedList';
import Block from './constants/Block';
import Heading from './constants/ui/Heading';
import SubHeader from './constants/ui/SubHeader';
import { useState, useEffect } from 'react';
import GlobalApi from '../utils/GlobalApi';
import type { Event } from '../utils/types';
import { FaChevronDown } from 'react-icons/fa';

const Events = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        GlobalApi.getEvents().then((data) => {
            setEvents(data.events.flatMap(event => event.eventEntry));
        });
    }, []);

    const sortedEvents = events?.sort((a, b) => {
        if (!a.dates || !b.dates) return 0;
        return new Date(a.dates[0]).getTime() - new Date(b.dates[0]).getTime();
    });

    const navigate = useNavigate();

    return (
        <Block className='md:col-span-4 col-span-8'>
            <Heading title='Prossimi Eventi' as="h2" />
            <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${expanded ? 'max-h-[700px]' : 'max-h-0'}`}>
                <AnimatedList
                    items={sortedEvents.map(event => ({
                        id: event.id,
                        image: event.image[0]?.url ?? '',
                        title: event.title,
                        description: event.description,
                        date: event.dates[0] ? new Date(event.dates[0]).toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : ''
                    }))}
                    onItemSelect={(item) => navigate(`/eventi/${item.id}`)}
                    showGradients={true}
                    enableArrowNavigation={true}
                    displayScrollbar={true}
                />
                <SubHeader title='Scopri di più' className='mt-4 cursor-pointer underline' onClick={() => navigate('/eventi')} hoverEffect={true}/>
            </div>
            <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                className="mt-4 flex items-center gap-2 mx-auto text-gold hover:text-gold-light transition-colors duration-200 font-lato"
                aria-expanded={expanded}
            >
                {expanded ? 'Nascondi eventi' : 'Mostra prossimi eventi'}
                <FaChevronDown className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
            </button>
        </Block>
  )
}

export default Events
