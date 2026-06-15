import { useState, useEffect } from 'react';
import Heading from '../components/constants/ui/Heading';
import Divider from '../components/constants/ui/Divider';
import SEO from '../components/SEO';
import GlobalApi from '../utils/GlobalApi';
import type { Showreel, YoutubeVideo } from '../utils/types';

const ShowreelPage = () => {
  const [showreel, setShowreel] = useState<Showreel | null>(null);
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);

  useEffect(() => {
    GlobalApi.getShowreel().then((data) => {
      setShowreel(data.showreels[0]);
    });
    GlobalApi.getYoutubeVideos().then((data) => {
      setVideos(data.videos.sort((a, b) => a.displayOrder - b.displayOrder));
    });
  }, []);

  return (
    <div className="min-h-screen pt-10 md:pt-15 bg-black text-gold font-lato">
      <SEO
        title="Showreel — Alessandro Scafati, attore cinematografico italiano"
        description="Showreel di Alessandro Scafati, attore italiano: scene da cinema, TV e produzioni audiovisive."
        path="/showreel"
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Heading title="Showreel — Alessandro Scafati, attore cinematografico italiano" />
        <Divider className="mb-8" />

        {showreel?.url && (
          <div className="mb-12">
            <iframe
              className="w-full rounded-xl shadow-lg shadow-[#d1af89]/20"
              height="450"
              src={showreel.url}
              title={showreel.title || 'Showreel'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}

        {videos.length > 0 && (
          <>
            <h2 className="text-xl font-semibold text-gold mb-4">Altri video</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {videos.map((video) => (
                <div key={video.videoUrl}>
                  <iframe
                    className="w-full aspect-video rounded-xl"
                    src={video.videoUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <p className="font-light mt-2">{video.title}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShowreelPage;
