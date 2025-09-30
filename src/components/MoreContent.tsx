import Block from './constants/Block'
import Heading from './constants/ui/Heading'
import ScrollStack, { ScrollStackItem } from './constants/ScrollStack'

const MoreContent = () => {
  return (
    <Block className='col-span-8 h-[500px] p-1 overflow-hidden'>
        <Heading title='Altri contenuti' className='pt-4 -mb-8' />
        <ScrollStack>
            <ScrollStackItem itemClassName='!p-0 overflow-hidden'>
                <iframe className='rounded-xl' width="100%" height="100%" src="https://www.youtube.com/embed/GlHl35rjHJ0?si=Zg7Nc5XPPfgQXJH-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </ScrollStackItem>
            <ScrollStackItem itemClassName='!p-0 overflow-hidden'>
                <iframe className='rounded-xl' width="100%" height="100%" src="https://www.youtube.com/embed/4YPrH2eIGfQ?si=OMG102QVlPRGMECE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </ScrollStackItem>
            <ScrollStackItem itemClassName='!p-0 overflow-hidden'>
                <iframe className='rounded-xl' width="100%" height="100%" src="https://www.youtube.com/embed/eg8ddqrAdig?si=I-eMTHRiqqtWkqTf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </ScrollStackItem>
            <ScrollStackItem itemClassName='!p-0 overflow-hidden'>
                <iframe className='rounded-xl' width="100%" height="100%" src="https://www.youtube.com/embed/1g4TSnCTwKo?si=ts7ooAOvRX5TATKi" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </ScrollStackItem>
        </ScrollStack>
    </Block>
  )
}

export default MoreContent
