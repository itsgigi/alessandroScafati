import Button from "../constants/ui/Button";
import Heading from "../constants/ui/Heading";

const Experiences = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 py-8 flex flex-col gap-4 items-center">
            <Heading title="Le mie esperienze" />
            <p className="text-md font-lato font-light opacity-80 mb-4">
                Vivo a Roma, sono alto 177cm, occhi castani, peso 70Kg, amo il canto, il pianoforte e la chitarra, parlo il dialetto abruzzese, romanesco e napoletano.
                <br />
                -Ho preso parte in produzioni del Teatro Stabile d’Abruzzo
                <br />
                -Ho preso parte in produzioni della "Seven Cults" di Roma Tor Bella Monaca
                <br />
                -Sono socio della compagnia professionale “Teatranti tra tanti”
                <br />
                -Sono interprete nel festival “Pescasseroli legge” con la direzione di Dacia Maraini
                <br />
                <br />
                <b>PREMI</b>
                <br />
                
                2024 “Alla fermata del treno” premio “Battito di cuore” al concorso Nazionale per monologhi e corti teatrali Fivizzano (Ms)
                <br />
                2012 “Abruzzo talent show” Primo classificato
                <br />
                2011 “Migliore attore” nel concorso Nazionale “Certamen Comicum” di Mondaino
                <br />
                <br />

                <b>FORMAZIONE</b>
                <br />

                2025 “Masterclass” con Giulio Manfredonia
                <br />
                2025 “Workshop” con Maurilio Mangano
                <br />
                2023 "Laboratorio di recitazione cinematografica" con Francesco D'Ignazio
                <br />
                2022 "Stage di recitazione" con Emanuela Giordano
                <br />
                2022 "Masterclass" con Marco Bellocchio
                <br />
                2021/22 “Workshop sul personaggio” con S. Galateri
                <br />
                2020/21 “Accademia del doppiaggio” con C. Iansante e R. Pedicini
                <br />
                2018 “La strategia dell’attore” corso di recitazione cinematografica con Francesca Borromeo e Davide Zurolo
                <br />
                2014/17 Diplomato presso l'accademia “Beatrice Bracco” di Roma
                <br />
                2014 “Sentire l'umanità” laboratorio sul teatro di Carlo Goldoni con Massimiliano Farau
                <br />
                2009/11 Scuola di recitazione “Giù la maschera!” con Giuseppe Bisogno
            </p>
            <Button icon="download">Scarica Curriculum</Button>
        </section>
    );
  };
  
  export default Experiences;

