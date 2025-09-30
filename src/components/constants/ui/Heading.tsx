import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

type Headingrops = {
  title: string;
  className?: string;
}

const HeadingVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}

const Heading = ({ title, className }: Headingrops) => {
  return (
    <motion.h1
      variants={HeadingVariants}
      initial="initial"
      animate="animate"
      className={twMerge('text-3xl font-bold mb-4 font-dancing-script text-[#d1af89]', className)}
    >
        {title}
    </motion.h1>
  )
}

export default Heading
