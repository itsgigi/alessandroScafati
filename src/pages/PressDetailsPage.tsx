import { useParams, useNavigate } from 'react-router-dom';
import Heading from '../components/constants/ui/Heading';
import Block from '../components/constants/Block';
import GlobalApi from '../utils/GlobalApi';
import { useEffect, useState } from 'react';
import type { Article } from '../utils/types';

const PressDetailsPage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    setLoading(true);
    if (articleId) {
      console.log(articleId);
      GlobalApi.getArticleById(articleId).then((data) => {
        console.log(data.articles[0]);
          setArticle(data.articles[0]);
          setCurrentImageIndex(0); // Reset indice quando cambia articolo
          setLoading(false);
      });
    }
  }, [articleId]);

  function calculateReadTime(content: string) {
    if (!content) return 0;
    const words = content.split(' ').length;
    return Math.ceil(words / 200);
  }

  function toExternalHref(url: string): string {
    const trimmed = url.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('//')) {
      return trimmed;
    }
    const withoutLeadingSlashes = trimmed.replace(/^\/+/, '');
    if (withoutLeadingSlashes.startsWith('www.') || /\.[a-z]{2,}(\/|$)/i.test(withoutLeadingSlashes)) {
      return `https://${withoutLeadingSlashes}`;
    }
    return withoutLeadingSlashes;
  }

  if (loading) {
    return (
      <div className="min-h-screen text-gold font-lato flex items-center justify-center">
        <div className="text-center">
          <p className="text-gold">Caricamento articolo...</p>
        </div>
      </div>
    );
  } else if (!article) {
    
    return (
      <div className="min-h-screen text-gold font-lato flex items-center justify-center">
        <div className="text-center">
          <Heading title="Articolo non trovato" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gold font-lato">
      <div className="max-w-4xl mx-auto px-6 py-30 xl:px-0">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <span className="text-sm opacity-60">
              {calculateReadTime(article.content)} min di lettura
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>
          
          { article.author && 
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-lg opacity-80 text-nowrap">
              <span>Di {article.author}</span>
              <span>•</span>
              <span>{article.publisher}</span>
              <span>•</span>
              <span>{new Date(article.createdAt).toLocaleDateString('it-IT')}</span>
            </div>
          }
        </header>

        {/* Article Image Carousel */}
        {article.image && article.image.length > 0 && (
          <div className="mb-12 relative">
            <div className="relative flex justify-center items-center">
              {/* Immagine corrente */}
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <img
                  src={article.image[currentImageIndex].url}
                  alt={`${article.title} - Immagine ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover object-top transition-opacity duration-300"
                />
                
                {/* Frecce di navigazione */}
                {article.image.length > 1 && (
                  <>
                    {/* Freccia sinistra */}
                    <button
                      onClick={() => setCurrentImageIndex((prev) => 
                        prev === 0 ? article.image.length - 1 : prev - 1
                      )}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-200 z-10"
                      aria-label="Immagine precedente"
                    >
                      ‹
                    </button>
                    
                    {/* Freccia destra */}
                    <button
                      onClick={() => setCurrentImageIndex((prev) => 
                        (prev + 1) % article.image.length
                      )}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-200 z-10"
                      aria-label="Immagine successiva"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
            </div>
            
            {/* Indicatori (dots) */}
            {article.image.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {article.image.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-gold w-8' 
                        : 'bg-gold/40 hover:bg-gold/60'
                    }`}
                    aria-label={`Vai all'immagine ${index + 1}`}
                  />
                ))}
              </div>
            )}
            
            {/* Contatore immagini */}
            {article.image.length > 1 && (
              <div className="text-center mt-2 text-gold/70 text-sm">
                {currentImageIndex + 1} / {article.image.length}
              </div>
            )}
          </div>
        )}

        { article.content && 
          <Block>
              <div className="mb-12">
                  <p className="text-xl opacity-90 leading-relaxed pl-6">
                      {article.subtitle}
                  </p>
              </div>

              {/* Article Content */}
              <article className="prose prose-invert prose-lg max-w-none font-lato font-light">
                  <div dangerouslySetInnerHTML={{ __html: article.content }} className="mb-4"/>

                  {article.articleUrl && (
                    <a
                      className="text-sm font-semibold italic underline text-gold"
                      href={toExternalHref(article.articleUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Leggi l'articolo completo su {article.publisher}
                    </a>
                  )}
              </article>

              {/* Article Footer */}
              <footer className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                      <img
                          src={article.image[0]?.url || article.image[currentImageIndex]?.url}
                          alt={article.title}
                          className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                          <p className="font-medium">{article.author}</p>
                          <p className="text-sm opacity-60">{article.publisher}</p>
                      </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                      <button
                          onClick={() => navigate('/press')}
                          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300"
                      >
                          Altri Articoli
                      </button>
                      </div>
                  </div>
              </footer>
          </Block>
        }
      </div>
    </div>
  );
};

export default PressDetailsPage;
