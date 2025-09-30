import Block from './constants/Block'
import Heading from './constants/ui/Heading'

const Bio = () => {
  return (
    <Block className='col-span-8 md:col-span-4'>
        <Heading title='Biografia' />
        <p className='text-md font-lato font-light align-center items-center flex justify-center h-[85%]'>
            Sono nato ad Avezzano (Aq) l'11/11/1993. La passione per la recitazione nasce per gioco tra i banchi di scuola, così vengo coinvolto nell'attività teatrale del Liceo, interpretando da subito la parte del protagonista in una commedia di Plauto. Inizio la scuola di recitazione "Giù la maschera!" con il M° Giuseppe Bisogno.
            Nel 2011 partecipo assieme al gruppo teatrale del Liceo al concorso Nazionale "Certamen comicum" di Mondaino dove vinco il premio come "Migliore attore".
            Nel 2017 mi diplomo presso l'Accademia Beatrice Bracco di Roma.
            Dal 2018 sono attore e socio della compagnia teatrale “Teatrantitratanti” riconosciuta dal MIC
            Dal 2024 entro a fare parte della "Seven arts theatre studio" come docente di cinema
            Così, tante sono le esperienze nel mondo della recitazione fino ad ora.        
        </p>
    </Block>
  )
}

export default Bio
