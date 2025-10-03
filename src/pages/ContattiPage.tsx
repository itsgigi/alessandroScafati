import { Clapperboard, Mail, Phone } from 'lucide-react';
import Heading from '../components/constants/ui/Heading';
import Divider from '../components/constants/ui/Divider';

const ContattiPage = () => {
  const email = "alessandro.scafati@example.com";
  const phone = "+39 123 456 7890";
  const agency = "Agenzia Teatranti tra tanti";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="min-h-[85vh] pt-10 md:pt-15">
      <div className="max-w-4xl mx-auto px-6 py-16 text-gold-light">
        <Heading title="Contatti" />
        <Divider className="mb-4" />
        
        <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto ">
          {/* Email */}
          <div 
            className="flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            onClick={handleEmailClick}
          >
            <div className="w-24 h-24 bg-gold-light/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
              <Mail className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-lato">Email</h3>
            <p className="text-gold text-center break-all font-lato">{email}</p>
            <p className="text-sm text-gold mt-2 font-lato">Clicca per inviare una email</p>
          </div>

          {/* Telefono */}
          <div 
            className="flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            onClick={handlePhoneClick}
          >
            <div className="w-24 h-24 bg-gold-light/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors duration-300">
              <Phone className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-lato">Telefono</h3>
            <p className="text-gold text-center font-lato">{phone}</p>
            <p className="text-sm text-gold mt-2">Clicca per chiamare</p>
          </div>

          {/* Agenzia */}
          <div 
            className="flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            onClick={handlePhoneClick}
          >
            <div className="w-24 h-24 bg-gold-light/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors duration-300">
              <Clapperboard className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-lato">Agenzia</h3>
            <p className="text-gold text-center font-lato">{agency}</p>
            <p className="text-sm text-gold mt-2">Clicca per visitare il sito</p>
          </div>
        </div>
      </div>
    </div>
  );
};
  
  export default ContattiPage;

