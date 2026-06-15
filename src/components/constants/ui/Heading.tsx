import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

type Headingrops = {
  title: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

const HeadingVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}

const headingTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
}

const Heading = ({ title, className, as = 'h1' }: Headingrops) => {
  const Component = headingTags[as]

  return (
    <Component
      variants={HeadingVariants}
      initial="initial"
      animate="animate"
      className={twMerge('text-4xl font-bold mb-4 font-dancing-script text-[#d1af89]', className)}
    >
        {title}
    </Component>
  )
}

export default Heading
