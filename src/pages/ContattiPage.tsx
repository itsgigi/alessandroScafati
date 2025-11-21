import { Mail, Phone } from 'lucide-react';
import Heading from '../components/constants/ui/Heading';
import Divider from '../components/constants/ui/Divider';

const ContattiPage = () => {
  const email = "alexscafati93@gmail.com";
  const phone = "+39 327 925 4991";
  //const agency = "Agenzia Teatranti Tra Tanti";
  
  const agency2Name = "Marion Arras Talent Studio";
  const agency2Address = "Via Graziano Tubi, 4";
  const agency2City = "23900 Lecco, Italia";
  const agency2Phone = "+39 320 175 8767";
  const agency2Email = "marion.arras@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`;
  };

  /* const handleAgencyClick = () => {
    window.location.href = `https://www.teatrantitratanti.it/`;
  }; */

  const handleAgency2EmailClick = () => {
    window.location.href = `mailto:${agency2Email}`;
  };

  const handleAgency2PhoneClick = () => {
    window.location.href = `tel:${agency2Phone}`;
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

          {/* Agenzia 1 */}
          {/* 
          <div 
            className="flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            onClick={handleAgencyClick}
          >
            <div className="w-24 h-24 bg-gold-light/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors duration-300">
              <Clapperboard className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-lato">Agenzia</h3>
            <p className="text-gold text-center font-lato">{agency}</p>
            <p className="text-sm text-gold mt-2">Clicca per visitare il sito</p>
          </div> */}

          {/* Agenzia 2 */}
          <div 
            className="flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="p-4 bg-white w-24 h-24 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors duration-300 overflow-hidden">
              <img 
                src="/agenzia2.jpeg" 
                alt={agency2Name}
                className="w-full h-full object-fill"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-lato">{agency2Name}</h3>
            <p className="text-gold text-center font-lato mb-2">{agency2Address}</p>
            <p className="text-gold text-center font-lato mb-4">{agency2City}</p>
            <div className="flex flex-col gap-2 w-full">
              <div 
                className="flex items-center justify-center gap-2 cursor-pointer hover:text-gold-light transition-colors"
                onClick={handleAgency2PhoneClick}
              >
                <Phone className="w-4 h-4" />
                <p className="text-sm text-gold font-lato">{agency2Phone}</p>
              </div>
              <div 
                className="flex items-center justify-center gap-2 cursor-pointer hover:text-gold-light transition-colors"
                onClick={handleAgency2EmailClick}
              >
                <Mail className="w-4 h-4" />
                <p className="text-sm text-gold font-lato break-all">{agency2Email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  
  export default ContattiPage;

