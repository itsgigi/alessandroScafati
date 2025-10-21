import Block from './constants/Block'
import Heading from './constants/ui/Heading'
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
        <Heading title='Altri contenuti' className='pt-4 -mb-8' />
        <ScrollStack className='p-4 mt-10 pb-12'>
            {youtubeVideos.map((video) => (
                <ScrollStackItem itemClassName='!p-0 overflow-hidden'>
                    <iframe className='rounded-xl' width="100%" height="100%" src={video.videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </ScrollStackItem>
            ))}
        </ScrollStack>
    </Block>
  )
}

export default MoreContent
