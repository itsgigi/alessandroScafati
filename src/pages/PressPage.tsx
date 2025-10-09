import { useNavigate } from 'react-router-dom';
import Heading from '../components/constants/ui/Heading';
import Divider from '../components/constants/ui/Divider';
import { useState, useEffect } from 'react';
import GlobalApi from '../utils/GlobalApit';
import type { Article } from '../utils/types';

const PressPage = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  
  useEffect(() => {
    GlobalApi.getArticles().then((data) => {
      setArticles(data.articles);
    });
  }, []);

  const handleArticleClick = (articleId: string) => {
    navigate(`/press/${articleId}`);
  };

  function calculateReadTime(content: string) {
    const words = content.split(' ').length;
    return Math.ceil(words / 200);
  }

  return (
    <div className="min-h-screen text-gold font-lato">
      <div className="max-w-6xl mx-auto px-6 xl:px-0 pt-25 md:pt-30">
        <Heading title="Press" />

        <Divider className="mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => handleArticleClick(article.id)}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer group border border-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={article.image.url}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                    {article.category.toUpperCase()}
                  </span>
                  <span className="text-xs opacity-60">
                    {calculateReadTime(article.content)} min
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {article.title}
                </h3>
                
               {/*  <p className="text-sm opacity-80 mb-4 line-clamp-3">
                  {article.excerpt}
                </p> */}
                
                <div className="flex items-center justify-between text-sm opacity-60">
                  <span>{article.publisher}</span>
                  <span>{new Date(article.createdAt).toLocaleDateString('it-IT')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
  
export default PressPage;

