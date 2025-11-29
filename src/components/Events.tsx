import { useNavigate } from 'react-router-dom';
import AnimatedList from './constants/AnimatedList';
import Block from './constants/Block';
import Heading from './constants/ui/Heading';
import SubHeader from './constants/ui/SubHeader';
import { useState, useEffect } from 'react';
import GlobalApi from '../utils/GlobalApi';
import type { Event } from '../utils/types';

const Events = () => {
    const [events, setEvents] = useState<Event[]>([]);
    
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
            <Heading title='Prossimi Eventi' />
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
            <SubHeader title='Scopri di più' className='mt-6 cursor-pointer underline' onClick={() => navigate('/eventi')} hoverEffect={true}/>
        </Block>
  )
}

export default Events
