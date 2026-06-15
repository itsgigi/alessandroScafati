import Block from "./constants/Block"
import Heading from "./constants/ui/Heading"
import LiteYoutube from "./constants/ui/LiteYoutube"
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
      <Heading title='Showreel' as="h2" />
      <LiteYoutube url={showreel?.url ?? ''} title="Showreel" className="rounded-xl shadow-lg shadow-[#d1af89]/20 h-[350px]" />
    </Block>
  )
}

export default ShowreelBox
