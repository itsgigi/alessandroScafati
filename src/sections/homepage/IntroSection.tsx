import { Link } from 'react-router-dom'
import Heading from '../../components/constants/ui/Heading'

const areeDiImpiego = [
  'Cinema contemporaneo italiano',
  'Serie TV',
  'Cinema d’autore',
  'Produzioni teatrali',
  'Ruoli d’epoca (secondario)',
]

const puntiDiForza = [
  'Recitazione naturale e cinematografica',
  'Presenza scenica realistica',
  'Adattabilità a ruoli drammatici',
  'Esperienza in produzioni professionali',
  'Italiano neutro + dialetto marsicano/abruzzese autentico',
]

const ctaClassName =
  'bg-gold text-primary px-6 py-3 rounded-md font-lato font-medium hover:bg-gold-light transition-colors duration-200'

const IntroSection = () => {
  return (
    <div className="bg-black px-4 py-12 text-zinc-50 font-lato">
      <div className="mx-auto max-w-4xl">
        <Heading as="h1" title="Alessandro Scafati — Attore cinematografico e teatrale italiano" />
        <p className="text-lg md:text-xl font-light opacity-90 mb-6">
          Attore abruzzese (Avezzano, 1993) per cinema contemporaneo, drammatico e produzioni audiovisive
        </p>

        <p className="text-md font-light leading-relaxed mb-8">
          Alessandro Scafati è un attore italiano nato ad Avezzano (L'Aquila) nel 1993, attivo tra
          cinema, teatro e audiovisivo. Lavora in produzioni contemporanee e cinema d'autore, con una
          recitazione naturale e realistica, adatta a ruoli drammatici, moderni e di genere. Nel 2026 
          ha lavorato con Nanni Moretti nel film "Succederà questa notte" e nella fiction Rai "Una 
          finestra vista lago" diretta da Marco Pontecorvo.
        </p>

        <div className="flex gap-4 mb-8 flex-wrap justify-center">
          <Link to="/showreel" className={ctaClassName}>Showreel</Link>
          <Link to="/contatti" className={ctaClassName}>Contatti casting</Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold text-gold mb-3">Aree di impiego</h2>
            <ul className="list-disc pl-5 space-y-1 font-light">
              {areeDiImpiego.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gold mb-3">Punti di forza</h2>
            <ul className="list-disc pl-5 space-y-1 font-light">
              {puntiDiForza.map((punto) => (
                <li key={punto}>{punto}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-md font-light">
          Disponibile per casting nazionali e internazionali —{' '}
          <Link to="/contatti" className="text-gold underline hover:text-gold-light">
            contatti
          </Link>
        </p>
      </div>
    </div>
  )
}

export default IntroSection
