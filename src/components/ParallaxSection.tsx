import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import {
  forwardRef,
  useCallback,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

export type SectionVariant =
  | 'transparent'
  | 'base'
  | 'elevated'
  | 'warm'
  | 'cool'
  | 'deep'
  | 'accent'

type ParallaxSectionProps = ComponentPropsWithoutRef<'section'> & {
  variant?: SectionVariant
  children: ReactNode
}

function ParallaxLayer({
  className,
  y,
}: {
  className?: string
  y: MotionValue<string>
}) {
  return <motion.div className={className} style={{ y }} aria-hidden="true" />
}

export const ParallaxSection = forwardRef<HTMLElement, ParallaxSectionProps>(
  function ParallaxSection(
    { variant = 'base', className, children, ...props },
    forwardedRef,
  ) {
    const localRef = useRef<HTMLElement>(null)
    const reduceMotion = useReducedMotion()

    const setRef = useCallback(
      (node: HTMLElement | null) => {
        localRef.current = node
        if (typeof forwardedRef === 'function') {
          forwardedRef(node)
        } else if (forwardedRef) {
          forwardedRef.current = node
        }
      },
      [forwardedRef],
    )

    const { scrollYProgress } = useScroll({
      target: localRef,
      offset: ['start end', 'end start'],
    })

    const gridY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])
    const markY = useTransform(scrollYProgress, [0, 1], ['-6%', '10%'])
    const showParallax = variant !== 'transparent' && !reduceMotion

    return (
      <section
        ref={setRef}
        className={cn('parallax-section', `parallax-section--${variant}`, className)}
        {...props}
      >
        <div className="parallax-section__fill" aria-hidden="true" />

        {showParallax && (
          <>
            <ParallaxLayer className="parallax-section__grid" y={gridY} />
            <ParallaxLayer className="parallax-section__mark" y={markY} />
          </>
        )}

        <div className="parallax-section__content">{children}</div>
      </section>
    )
  },
)
