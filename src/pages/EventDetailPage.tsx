import { useParams } from "react-router-dom";
import { allEvents, type Event } from "../components/constants/eventsData";
import Heading from "../components/constants/ui/Heading";
import Button from "../components/constants/ui/Button";
import Divider from "../components/constants/ui/Divider";
import Paragraph from "../components/constants/ui/Paragraph";

const EventDetailPage = () => {
    const { eventId } = useParams();
    
    // Trova l'evento specifico
    const event: Event | undefined = allEvents.find(e => e.id === eventId);
    
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
            {/* Hero Section */}
            <div className="relative h-[40vh] w-full overflow-hidden">
                <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>
            
            {/* Event Information Section */}
            <div className="max-w-4xl mx-auto px-6 py-12 font-lato">
                <div className="space-y-8">
                    {/* Title */}
                    <Heading title={event.title} />
                    {/* Description */}
                    <Paragraph children={event.description} />

                    <Divider />
                    
                    {/* Additional Info Section */}
                    <div className="bg-primary border border-gold/30 rounded-2xl p-6 mt-12 w-full flex flex-col justify-center items-center">
                        <Heading title="Informazioni Evento" />
                        <div className="flex gap-12">
                            <div>
                                <h3 className="text-lg font-semibold text-gold-light mb-2">Data</h3>
                                <p className="text-gold">{event.date}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gold-light mb-2">Tipo Evento</h3>
                                <p className="text-gold">Spettacolo Teatrale</p>
                            </div>
                        </div>

                        <Button icon="clock" className="mt-6">Prenota</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDetailPage