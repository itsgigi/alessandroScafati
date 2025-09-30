import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const DividerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}

type DividerProps = {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <motion.div
      variants={DividerVariants}
      initial="initial"
      animate="animate"
      className={twMerge('w-full h-[1px] bg-gold/30', className)}
    >
    </motion.div>
  )
}

export default Divider
