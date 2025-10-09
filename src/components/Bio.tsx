import Block from './constants/Block'
import Heading from './constants/ui/Heading'
import GlobalApi from '../utils/GlobalApit'
import { useState, useEffect } from 'react'

const Bio = () => {
  const [bio, setBio] = useState<string>('');
  
  useEffect(() => {
    GlobalApi.getBio().then((data) => {
      setBio(data.bios[0].content);
    });
  }, []);
  
  return (
    <Block className='col-span-8 md:col-span-4'>
        <Heading title='Biografia' />
        <p className='text-md mt-8 md:mt-0 font-lato font-light align-center items-center flex justify-center h-[85%]'>
          {bio}
        </p>
    </Block>
  )
}

export default Bio
