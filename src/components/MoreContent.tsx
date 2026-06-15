import Block from './constants/Block'
import Heading from './constants/ui/Heading'
import LiteYoutube from './constants/ui/LiteYoutube'
import ScrollStack, { ScrollStackItem } from './constants/ScrollStack'
import { useState, useEffect } from 'react'
import GlobalApi from '../utils/GlobalApi'
import type { YoutubeVideo } from '../utils/types'

const MoreContent = () => {
  const [youtubeVideos, setYoutubeVideos] = useState<YoutubeVideo[]>([]);

  useEffect(() => {
    GlobalApi.getYoutubeVideos().then((data) => {
      setYoutubeVideos(data.videos.sort((a, b) => a.displayOrder - b.displayOrder));
    });
  }, []);

  return (
    <Block className='col-span-8 h-[500px] p-1 overflow-hidden'>
        <Heading title='Altri contenuti' as="h2" className='pt-4 -mb-8' />
        <ScrollStack className='p-4 mt-10 pb-12'>
            {youtubeVideos.map((video) => (
                <ScrollStackItem key={video.videoUrl} itemClassName='!p-0 overflow-hidden'>
                    <LiteYoutube url={video.videoUrl} title={video.title} className="rounded-xl h-full" />
                </ScrollStackItem>
            ))}
        </ScrollStack>
    </Block>
  )
}

export default MoreContent
