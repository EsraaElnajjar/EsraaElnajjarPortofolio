import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, viewportOnce } from '../motion/variants'

type AnimateOnViewProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  delay?: number
}

export function AnimateOnView({
  children,
  delay = 0,
  className,
  ...props
}: AnimateOnViewProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: {
            ...fadeUp.visible.transition,
            delay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
