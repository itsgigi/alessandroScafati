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
  
  useEffect(() => {
    if (articleId) {
      console.log(articleId);
      GlobalApi.getArticleById(articleId).then((data) => {
        console.log(data.articles[0]);
          setArticle(data.articles[0]);
      });
    }
  }, [articleId]);

  function calculateReadTime(content: string) {
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

  if (!article) {
    return (
      <div className="min-h-screen text-gold font-lato flex items-center justify-center">
        <div className="text-center">
          <Heading title="Articolo non trovato" />
          <button
            onClick={() => navigate('/press')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
          >
            Torna alla Press
          </button>
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
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-lg opacity-80 text-nowrap">
            <span>Di {article.author}</span>
            <span>•</span>
            <span>{article.publisher}</span>
            <span>•</span>
            <span>{new Date(article.createdAt).toLocaleDateString('it-IT')}</span>
          </div>
        </header>

        {/* Article Image */}
        <div className="mb-12">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={article.image.url}
              alt={article.title}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

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
                        src={article.image.url}
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
        {/* Article Excerpt */}
      </div>
    </div>
  );
};

export default PressDetailsPage;
