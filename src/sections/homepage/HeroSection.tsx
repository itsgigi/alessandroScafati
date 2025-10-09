import { useEffect, useState } from "react";
import BlurText from "../../components/constants/ui/BlurText";
import type { Media } from "../../utils/types";
import GlobalApi from "../../utils/GlobalApit";

const HeroSection = () => {
  const screenWidth = window.innerWidth;
  const [images, setImages] = useState<Media[]>([]);
  const [blurStrength, setBlurStrength] = useState('blur(60px)');
  const [blurSize, setBlurSize] = useState('scale(0.3)');

  useEffect(() => {
    GlobalApi.getHomeImages().then((data) => {
      setImages(data.homeImages[0].images);
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const displayMs = 4000; // tempo visibile
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, displayMs);
    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    setBlurSize(screenWidth > 1024 ? 'scale(0.2)' : 'scale(0.6)');
    setBlurStrength(screenWidth > 720 ? 'blur(120px)' : 'blur(60px)');
  }, [screenWidth]);
  
  return (
    <div className="h-screen w-screen overflow-hidden relative">
        {/* Layer immagini in crossfade */}
        <div className="w-full h-full absolute inset-0">
          {images.map((src, idx) => (
            <div
              key={src.url}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `url('${src.url}')`,
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
            <div className="absolute top-20 inset-0 rounded-full z-10" style={{
                background: 'radial-gradient(circle, rgba(194, 132, 64, 0.8) 10%, rgba(194, 132, 64, 0.6) 40%, rgba(194, 132, 64, 0.4) 70%, rgba(194, 132, 64, 0.1) 100%)',
                filter: blurStrength,
                transform: blurSize
            }}></div>
            <img className="relative w-auto h-32 color-gold z-10" src="/firmaAle.svg" alt="" />
            <BlurText
              text="Attore • Performer • Artista"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-lg md:text-2xl font-lato font-light opacity-90 drop-shadow-md z-1000"
            />
          </div>
        </div>
      </div>
  )
}

export default HeroSection;
