import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../motion/variants'

type SectionHeadingProps = {
  index: string
  label: string
  title: string
}

export function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <motion.div
      className="section-heading"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <div className="section-heading__pill">
        <span className="section-heading__index">{index}</span>
        <span>{label}</span>
      </div>
      <h2 className="section-title">{title}</h2>
    </motion.div>
  )
}
