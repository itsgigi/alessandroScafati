import { useParams, useNavigate } from 'react-router-dom';
import { pressArticles } from '../data/pressData';
import Heading from '../components/constants/ui/Heading';
import Block from '../components/constants/Block';

const PressDetailsPage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();

  const article = pressArticles.find(art => art.id === articleId);

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
              {article.readTime} min di lettura
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-sm opacity-80">
            <span>di {article.author}</span>
            <span>•</span>
            <span>{article.publication}</span>
            <span>•</span>
            <span>{new Date(article.date).toLocaleDateString('it-IT')}</span>
          </div>
        </header>

        {/* Article Image */}
        <div className="mb-12">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <Block>
            <div className="mb-12">
                <p className="text-xl opacity-90 leading-relaxed pl-6">
                    {article.excerpt}
                </p>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert prose-lg max-w-none font-lato font-light">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </article>

            {/* Article Footer */}
            <footer className="mt-16 pt-8 border-t border-white/20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-medium">{article.author}</p>
                        <p className="text-sm opacity-60">{article.publication}</p>
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
