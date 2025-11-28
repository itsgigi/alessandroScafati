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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    useEffect(() => {
        if (eventId) {
            GlobalApi.getEventById(eventId).then((data) => {
                setEvent(data.events[0].eventEntry[0]);
                setCurrentImageIndex(0); // Reset indice quando cambia evento
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

    console.log('event.image', event.image);
    
    return (
        <div className="min-h-screen bg-black">
            {/* Event Information Section */}
            <div className="max-w-4xl mx-auto px-6 py-12 pt-30 font-lato">
                {/* Event Image Carousel */}
                {event.image && event.image.length > 0 && (
                    <div className="mb-8 relative">
                        <div className="relative flex justify-center items-center">
                            {/* Immagine corrente */}
                            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
                                <img 
                                    src={event.image[currentImageIndex].url} 
                                    alt={`${event.title} - Immagine ${currentImageIndex + 1}`}
                                    className="max-w-full h-auto w-full object-cover transition-opacity duration-300"
                                />
                                
                                {/* Frecce di navigazione */}
                                {event.image.length > 1 && (
                                    <>
                                        {/* Freccia sinistra */}
                                        <button
                                            onClick={() => setCurrentImageIndex((prev) => 
                                                prev === 0 ? event.image.length - 1 : prev - 1
                                            )}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-200 z-10"
                                            aria-label="Immagine precedente"
                                        >
                                            ‹
                                        </button>
                                        
                                        {/* Freccia destra */}
                                        <button
                                            onClick={() => setCurrentImageIndex((prev) => 
                                                (prev + 1) % event.image.length
                                            )}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-200 z-10"
                                            aria-label="Immagine successiva"
                                        >
                                            ›
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                        
                        {/* Indicatori (dots) */}
                        {event.image.length > 1 && (
                            <div className="flex justify-center gap-2 mt-4">
                                {event.image.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                            index === currentImageIndex 
                                                ? 'bg-gold w-8' 
                                                : 'bg-gold/40 hover:bg-gold/60'
                                        }`}
                                        aria-label={`Vai all'immagine ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                        
                        {/* Contatore immagini */}
                        {event.image.length > 1 && (
                            <div className="text-center mt-2 text-gold/70 text-sm">
                                {currentImageIndex + 1} / {event.image.length}
                            </div>
                        )}
                    </div>
                )}
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