import Block from "./constants/Block"
import Heading from "./constants/ui/Heading"
import { useState, useEffect } from "react";
import GlobalApi from "../utils/GlobalApi";
import type { Showreel } from "../utils/types";

const ShowreelBox = () => {
  const [showreel, setShowreel] = useState<Showreel | null>(null);

  useEffect(() => {
    GlobalApi.getShowreel().then((data) => {
      setShowreel(data.showreels[0]);
    });
  }, []);

  return (
    <Block className='col-span-8 '>
      <Heading title='Showreel' />
      <iframe className='rounded-xl shadow-lg shadow-[#d1af89]/20' width="100%" height="350" src={showreel?.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </Block>
  )
}

export default ShowreelBox
