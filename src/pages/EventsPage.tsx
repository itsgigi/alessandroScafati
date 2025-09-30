import { useState } from 'react';
import Calendar from '../components/Calendar';
import EventList from '../components/EventList';
import { allEvents } from '../components/constants/eventsData';

const EventsPage = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateSelect = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <>
            <div className="min-h-screen pt-20 lg:px-8 bg-black text-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <Calendar 
                                onDateSelect={handleDateSelect}
                                selectedDate={selectedDate}
                                events={allEvents}
                            />
                        </div>
                        <div className="lg:col-span-2">
                            <EventList selectedDate={selectedDate} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventsPage;
