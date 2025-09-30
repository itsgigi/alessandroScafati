import { motion } from 'framer-motion'
import Bio from '../../components/Bio'
import Showreel from '../../components/Showreel'
import MoreContent from '../../components/MoreContent'
import Events from '../../components/Events'

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-8 gap-4"
      >
        <Bio />
        <Events />
        <Showreel />
        <MoreContent />
      </motion.div>
    </div>
  )
}

export default AboutSection
