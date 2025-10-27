import Heading from '../components/constants/ui/Heading';
import Divider from '../components/constants/ui/Divider';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-[85vh] pt-10 md:pt-15">
      <div className="max-w-4xl mx-auto px-6 py-16 text-gold-light">
        <Heading title="Privacy Policy" />
        <Divider className="mb-8" />
        
        <div className="space-y-6 font-lato text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">1. Titolare del Trattamento</h2>
            <p>
              Il titolare del trattamento dei dati è Alessandro Scafati, con email: alexscafati93@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">2. Tipi di Dati Raccolti</h2>
            <div className="space-y-3">
              <p>
                Il presente sito web raccoglie i seguenti tipi di dati personali:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Dati di navigazione:</strong> Il sito raccoglie automaticamente informazioni tecniche relative 
                  alla navigazione come indirizzo IP, tipo di browser, dispositivo utilizzato, sistema operativo, 
                  pagine visitate e durata della visita attraverso file di log e tecnologie simili.
                </li>
                <li>
                  <strong>Dati di contatto:</strong> I dati forniti volontariamente tramite la pagina "Contatti" 
                  (nome, email, telefono, messaggio) per richiedere informazioni o contatti.
                </li>
                <li>
                  <strong>Cookie e tecnologie simili:</strong> Il sito utilizza cookie tecnici necessari per il 
                  funzionamento del sito stesso.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">3. Base Giuridica del Trattamento</h2>
            <div className="space-y-3">
              <p>
                I dati vengono trattati sulla base delle seguenti giustificazioni legali:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Consenso dell'interessato:</strong> Per i cookie di profilazione e marketing, previa acquisizione 
                  del consenso dell'utente.
                </li>
                <li>
                  <strong>Esecuzione di un contratto o misure precontrattuali:</strong> Per rispondere alle richieste di 
                  contatto e fornire i servizi richiesti.
                </li>
                <li>
                  <strong>Interesse legittimo:</strong> Per garantire la sicurezza e il corretto funzionamento del sito web.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">4. Finalità del Trattamento</h2>
            <div className="space-y-3">
              <p>I dati personali raccolti sono utilizzati per le seguenti finalità:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornire e migliorare i servizi del sito web</li>
                <li>Rispondere alle richieste di contatto e informazioni</li>
                <li>Garantire la sicurezza e prevenire abusi</li>
                <li>Analizzare il traffico del sito per migliorarne le prestazioni</li>
                <li>Rispettare gli obblighi di legge e le disposizioni delle autorità competenti</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">5. Modalità di Trattamento</h2>
            <p>
              Il trattamento dei dati personali viene effettuato mediante strumenti informatici e telematici, con modalità 
              organizzative e con logiche strettamente correlate alle finalità indicate. I dati vengono trattati in conformità 
              ai principi di correttezza, liceità, trasparenza, necessità, pertinenza e non eccedenza rispetto agli scopi 
              perseguiti.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">6. Conservazione dei Dati</h2>
            <p>
              I dati personali vengono conservati per il tempo necessario al conseguimento delle finalità per le quali sono 
              stati raccolti e trattati, o per il periodo previsto dalle norme di legge applicabili. Successivamente, i dati 
              verranno cancellati o resi anonimi, salvo diversamente previsto dalla legge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">7. Comunicazione e Diffusione dei Dati</h2>
            <p>
              I dati personali non vengono diffusi, venduti o ceduti a terzi, salvo nei seguenti casi:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Quando necessario per adempiere a obblighi di legge o disposizioni delle autorità competenti</li>
              <li>Quando la comunicazione è necessaria per la prestazione dei servizi richiesti dall'utente</li>
              <li>Quando effettuata a fornitori di servizi che operano come responsabili del trattamento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">8. Servizi di Terze Parti</h2>
            <p>
              Il sito web utilizza servizi di terze parti per il funzionamento e l'analisi. Questi servizi possono raccogliere 
              dati personali secondo le loro politiche sulla privacy. Di seguito i servizi utilizzati:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google Fonts:</strong> Per il caricamento dei font utilizzati sul sito. 
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline ml-1">
                  (Vedi privacy policy)
                </a>
              </li>
              <li>
                <strong>Hygraph CMS:</strong> Per la gestione dei contenuti. 
                <a href="https://hygraph.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline ml-1">
                  (Vedi privacy policy)
                </a>
              </li>
              <li>
                <strong>Vercel:</strong> Per l'hosting del sito. 
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline ml-1">
                  (Vedi privacy policy)
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">9. Diritti degli Interessati</h2>
            <p>
              In conformità al Regolamento (UE) 2016/679 (GDPR), l'utente ha diritto a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Accesso:</strong> Ottenere conferma dell'esistenza dei propri dati e conoscere il contenuto, l'origine, 
                le finalità e le modalità di trattamento</li>
              <li><strong>Rettifica:</strong> Richiedere la correzione dei dati inesatti o l'integrazione di quelli incompleti</li>
              <li><strong>Cancellazione:</strong> Richiedere la cancellazione dei dati trattati in violazione di legge</li>
              <li><strong>Limitazione:</strong> Richiedere la limitazione del trattamento dei propri dati</li>
              <li><strong>Portabilità:</strong> Ricevere i propri dati in formato strutturato e trasmetterli a un altro titolare</li>
              <li><strong>Opposizione:</strong> Opporsi al trattamento dei propri dati</li>
              <li><strong>Revoca del consenso:</strong> Revocare il consenso precedentemente prestato</li>
            </ul>
            <p className="mt-3">
              Per esercitare questi diritti, è possibile contattare il titolare del trattamento all'indirizzo email: 
              alexscafati93@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">10. Cookie</h2>
            <div className="space-y-3">
              <p>
                Il presente sito utilizza cookie tecnici necessari per il funzionamento del sito stesso, che non richiedono 
                il consenso dell'utente ai sensi dell'art. 122 comma 1 del D.Lgs. 196/2003.
              </p>
              <p>
                I cookie tecnici utilizzati sono:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cookie di sessione:</strong> Necessari per il corretto funzionamento del sito e non memorizzati 
                  in modo persistente
                </li>
                <li>
                  <strong>Cookie di sicurezza:</strong> Utilizzati per garantire la sicurezza del sito
                </li>
              </ul>
              <p>
                L'utente può disabilitare i cookie modificando le impostazioni del proprio browser, tuttavia ciò potrebbe 
                compromettere alcune funzionalità del sito.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">11. Misure di Sicurezza</h2>
            <p>
              Il titolare del trattamento adotta misure tecniche e organizzative appropriate per garantire la sicurezza 
              dei dati personali e prevenire la perdita, l'uso improprio, l'accesso non autorizzato, la modifica o la 
              divulgazione degli stessi. Tuttavia, nessun metodo di trasmissione o memorizzazione elettronica è completamente 
              sicuro.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">12. Modifiche alla Privacy Policy</h2>
            <p>
              Il titolare si riserva il diritto di modificare la presente Privacy Policy in qualsiasi momento. Gli utenti 
              saranno informati di eventuali modifiche mediante pubblicazione della nuova versione sulla pagina web. 
              L'utilizzo continuato del sito dopo la modifica della Privacy Policy comporta l'accettazione delle modifiche 
              apportate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">13. Autorità di Controllo</h2>
            <p>
              Gli interessati hanno diritto di proporre reclamo al Garante per la protezione dei dati personali qualora 
              ritengano che il trattamento dei loro dati personali violi il Regolamento (UE) 2016/679.
            </p>
            <p>
              <strong>Garante per la Protezione dei Dati Personali</strong>
              <br />
              Piazza di Monte Citorio, 121 - 00186 Roma
              <br />
              Tel: +39 06 696771
              <br />
              Email: garante@gpdp.it
              <br />
              Web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                www.garanteprivacy.it
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-gold">14. Contatti</h2>
            <p>
              Per qualsiasi domanda, richiesta o informazione riguardo al trattamento dei dati personali, è possibile 
              contattare il titolare del trattamento:
            </p>
            <p className="mt-3">
              <strong>Alessandro Scafati</strong>
              <br />
              Email: alexscafati93@gmail.com
              <br />
              Telefono: +39 327 925 4991
            </p>
          </section>

          <section className="pt-4 text-xs text-gold/70">
            <p>
              Ultima revisione: {new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

