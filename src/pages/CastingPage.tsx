import { useState, useEffect } from 'react';
import Heading from '../components/constants/ui/Heading';
import Divider from '../components/constants/ui/Divider';
import SEO from '../components/SEO';
import GlobalApi from '../utils/GlobalApi';

const schedaCasting: [string, string][] = [
  ['Anno e luogo di nascita', '1993, Avezzano (AQ)'],
  ['Età scenica (playing age)', '28–38'],
  ['Capelli', 'Castano scuro / moro'],
  ['Occhi', 'Marroni'],
  ['Altezza', '180 cm'],
  ['Fisicità', 'Atletica / Snella'],
  ['Lingue', 'Italiano neutro'],
  ['Dialetti', 'Marsicano, Romano, Abruzzese, Napoletano (base)'],
  ['Tono recitativo', 'Realistico, cinematografico, comico'],
  ['Tipologia ruoli', 'Drammatico, contemporaneo, supporto d’autore'],
  ['Base operativa', 'Roma / Avezzano / Milano'],
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Chi è Alessandro Scafati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Alessandro Scafati è un attore italiano nato ad Avezzano (L'Aquila) nel 1993, capelli castano scuro. Attivo in cinema, fiction Rai e teatro, con una recitazione naturale e realistica.",
      },
    },
    {
      '@type': 'Question',
      name: 'In quali produzioni ha lavorato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nel 2025 ha lavorato in una fiction Rai diretta da Marco Pontecorvo e nello spot internazionale Peroni Nastro Azzurro. Per l’elenco completo dei credit, vedi la pagina Curriculum.',
      },
    },
    {
      '@type': 'Question',
      name: 'È disponibile per casting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, Alessandro Scafati è disponibile per casting nazionali e internazionali. Per contattarlo vedi la pagina Contatti.',
      },
    },
  ],
};

const CastingPage = () => {
  const [bio, setBio] = useState<string>('');

  useEffect(() => {
    GlobalApi.getBio().then((data) => {
      setBio(data.bios[0].content);
    });
  }, []);

  return (
    <div className="min-h-screen pt-10 md:pt-15 bg-black text-gold font-lato">
      <SEO
        title="Attore per cinema e televisione — Alessandro Scafati"
        description="Alessandro Scafati, attore abruzzese (Avezzano, 1993). Cinema, fiction Rai, teatro. Disponibile per casting in film, serie TV e produzioni audiovisive. Scheda casting e contatti."
        path="/casting"
        jsonLd={faqJsonLd}
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Heading title="Attore per cinema e televisione — Alessandro Scafati" />
        <Divider className="mb-8" />

        <p className="text-md font-light leading-relaxed mb-8">
          {bio ||
            "Alessandro Scafati è un attore italiano nato ad Avezzano (L'Aquila) nel 1993, attivo tra cinema, teatro e audiovisivo. Lavora in produzioni contemporanee e cinema d'autore, con una recitazione naturale e realistica, adatta a ruoli drammatici, moderni e di genere."}
        </p>

        <h2 className="text-xl font-semibold text-gold mb-4">Scheda casting</h2>
        <table className="w-full text-left mb-12 border border-gold/30">
          <tbody>
            {schedaCasting.map(([campo, valore]) => (
              <tr key={campo} className="border-b border-gold/10 last:border-b-0">
                <th scope="row" className="px-4 py-2 font-semibold text-gold-light w-1/3 align-top">
                  {campo}
                </th>
                <td className="px-4 py-2 font-light">{valore}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-xl font-semibold text-gold mb-4">Domande frequenti</h2>
        <dl className="space-y-6">
          {faqJsonLd.mainEntity.map((item) => (
            <div key={item.name}>
              <dt className="font-semibold text-gold-light mb-1">{item.name}</dt>
              <dd className="font-light">{item.acceptedAnswer.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default CastingPage;
