import Block from "./constants/Block"
import Heading from "./constants/ui/Heading"

const Showreel = () => {
  return (
    <Block className='col-span-8 '>
      <Heading title='Showreel' />
      <iframe className='rounded-xl shadow-lg shadow-[#d1af89]/20' width="100%" height="350" src="https://www.youtube.com/embed/BcgBx4V9LhE?si=y1_qdcqzDnSC1goe" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </Block>
  )
}

export default Showreel
