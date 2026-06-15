import Block from './constants/Block'
import Heading from './constants/ui/Heading'
import GlobalApi from '../utils/GlobalApi'
import { useState, useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Bio = () => {
  const [bio, setBio] = useState<string>('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    GlobalApi.getBio().then((data) => {
      setBio(data.bios[0].content);
    });
  }, []);

  return (
    <Block className='col-span-8 md:col-span-4'>
        <Heading title='Biografia' as="h2" />
        <p className={`text-md mt-8 md:mt-0 font-lato font-light text-center ${expanded ? '' : 'line-clamp-5'}`}>
          {bio}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-4 flex items-center gap-2 mx-auto text-gold hover:text-gold-light transition-colors duration-200 font-lato"
          aria-expanded={expanded}
        >
          {expanded ? 'Mostra meno' : 'Leggi tutto'}
          <FaChevronDown className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
        </button>
    </Block>
  )
}

export default Bio
