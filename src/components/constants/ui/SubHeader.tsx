import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

type SubHeaderProps = {
  title: string;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const SubHeaderVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}

const SubHeader = ({ title, className, onClick, hoverEffect = false }: SubHeaderProps) => {
  return (
    <motion.h2
      variants={SubHeaderVariants}
      initial="initial"
      animate="animate"
      className={twMerge(`text-lg font-bold font-dancing-script text-[#d1af89] ${hoverEffect ? 'hover:text-gold-light' : ''}`, className)}
      onClick={onClick}
    >
        {title}
    </motion.h2>
  )
}

export default SubHeader
