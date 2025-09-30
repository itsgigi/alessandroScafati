import { useEffect, useMemo, useState } from "react";
import BlurText from "../../components/constants/ui/BlurText";

const HeroSection = () => {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

  const images = useMemo(() => [
    "/sorriso1.jpg",
    "/SORRISO-TREQUARTI.jpg",
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const displayMs = 4000; // tempo visibile
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, displayMs);
    return () => clearInterval(intervalId);
  }, [images.length]);

  
  return (
    <div className="h-screen w-screen overflow-hidden relative">
        {/* Layer immagini in crossfade */}
        <div className="w-full h-full absolute inset-0">
          {images.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `url('${src}')`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            />
          ))}
        </div>

        {/* Gradiente + contenuto sopra */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end justify-center pb-16">
          <div className="text-center flex flex-col items-center justify-center text-white max-w-4xl px-8">
              <h1 className="text-6xl font-dancing-script font-light mb-4 drop-shadow-lg md:text-5xl sm:text-4xl text-[#d1af89]">
                  Alessandro Scafati
              </h1>
              <BlurText
              text="Attore • Performer • Artista"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl font-lato font-light opacity-90 tracking-wide drop-shadow-md md:text-xl sm:text-lg"
              />
          </div>
        </div>
      </div>
  )
}

export default HeroSection;
