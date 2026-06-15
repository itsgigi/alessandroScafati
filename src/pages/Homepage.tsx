import AboutSection from "../sections/homepage/AboutSection";
import HeroSection from "../sections/homepage/HeroSection";
import IntroSection from "../sections/homepage/IntroSection";
import SEO from "../components/SEO";

// TODO: verify these profile URLs resolve before deploy
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alessandro Scafati",
  jobTitle: "Attore",
  hasOccupation: { "@type": "Occupation", name: "Attore" },
  birthDate: "1993-11-11",
  birthPlace: {
    "@type": "Place",
    name: "Avezzano",
    address: { "@type": "PostalAddress", addressRegion: "Abruzzo", addressCountry: "IT" },
  },
  nationality: "Italian",
  description:
    "Attore cinematografico e teatrale italiano nato ad Avezzano (L'Aquila) nel 1993. Attivo in cinema, fiction Rai e teatro.",
  image: "https://www.alessandroscafati.it/ale2copia.png",
  url: "https://www.alessandroscafati.it",
  sameAs: [
    "https://www.imdb.com/it/name/nm9682513/",
    "https://it.e-talenta.eu/members/profile/alessandro-scafati",
    "https://www.rbcasting.com/rb/web/alessandroscafati",
    "https://www.mymovies.it/persone/alessandro-scafati/548104/",
    "https://www.facebook.com/AlessandroScafatiAttore/",
  ],
};

const Homepage = () => {
    return (
      <>
        <SEO
          title="Alessandro Scafati | Attore cinematografico e teatrale · Avezzano, Abruzzo"
          description="Alessandro Scafati, attore abruzzese (Avezzano, 1993). Cinema, fiction Rai, teatro. Disponibile per casting in film, serie TV e produzioni audiovisive. Showreel e contatti."
          path="/"
          type="profile"
          jsonLd={personJsonLd}
        />
        <HeroSection />
        <IntroSection />
        <AboutSection />
      </>
    );
  };

  export default Homepage;