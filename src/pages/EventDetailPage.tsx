import { useParams } from "react-router-dom";
import Heading from "../components/constants/ui/Heading";
import Button from "../components/constants/ui/Button";
import Divider from "../components/constants/ui/Divider";
import Paragraph from "../components/constants/ui/Paragraph";
import { useEffect, useState } from "react";
import GlobalApi from "../utils/GlobalApi";
import type { Event } from "../utils/types";

const EventDetailPage = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (eventId) {
            GlobalApi.getEventById(eventId).then((data) => {
                setEvent(data.events[0].eventEntry[0]);
            }).finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [eventId]);
    
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gold mb-4">Caricamento...</h1>
                </div>
            </div>
        );
    }
    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gold mb-4">Evento non trovato</h1>
                    <p className="text-gold">L'evento che stai cercando non esiste.</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-black">
            {/* Event Information Section */}
            <div className="max-w-4xl mx-auto px-6 py-12 pt-30 font-lato">
                {/* Event Image */}
                <div className="mb-8 flex justify-center">
                    <img 
                        src={event.image.url} 
                        alt={event.title}
                        className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="space-y-8">
                    {/* Title */}
                    <Heading title={event.title} />
                    {/* Description */}
                    <Paragraph children={event.description} />

                    <Divider />
                    
                    {/* Additional Info Section */}
                    <div className="bg-primary border border-gold/30 rounded-2xl p-6 mt-12 w-full flex flex-col justify-center items-center">
                        <Heading title="Informazioni Evento" />
                        <div className="flex flex-wrap gap-8 md:gap-12 justify-center w-full">
                            {event.dates && <div className="max-w-xs break-words">
                                <h3 className="text-lg font-semibold text-gold-light mb-2">Data</h3>
                                <div className="text-gold">
                                    {event.dates.map((date, index) => (
                                        <div key={index}>
                                            {new Date(date).toLocaleString('it-IT', { 
                                                day: 'numeric', 
                                                month: 'numeric', 
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>}
                            <div className="max-w-xs break-words">
                                <h3 className="text-lg font-semibold text-gold-light mb-2">Tipo Evento</h3>
                                <p className="text-gold break-words">{event.type}</p>
                            </div>
                            <div className="max-w-xs break-words">
                                <h3 className="text-lg font-semibold text-gold-light mb-2">Location</h3>
                                <p className="text-gold break-words">{event.location}</p>
                            </div>
                        </div>
                        <Button icon="clock" className="mt-6" onClick={() => window.open(event.bookingUrl, '_blank')}>
                            { event.isTicketAvailable ? 'Prenota' : 'Scopri di più' }
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDetailPage