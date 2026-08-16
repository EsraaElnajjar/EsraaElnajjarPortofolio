import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Code2, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import profilePhoto from '../assets/profile.png'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { ShineBorder } from '@/components/ui/shine-border'
import { portfolio } from '../data/portfolio'
import { ease, fadeUp, slideFromRight, staggerContainer } from '../motion/variants'

const socialLinks = [
  { label: 'GitHub', href: portfolio.social.github },
  { label: 'LinkedIn', href: portfolio.social.linkedin },
  { label: 'WhatsApp', href: portfolio.whatsapp },
]

function HeroPhotoVisual() {
  const visualRef = useRef<HTMLDivElement>(null)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [9, -9]), {
    stiffness: 180,
    damping: 22,
  })
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 180,
    damping: 22,
  })
  const glareX = useSpring(useTransform(pointerX, [-0.5, 0.5], [30, 70]), {
    stiffness: 200,
    damping: 25,
  })
  const glareY = useSpring(useTransform(pointerY, [-0.5, 0.5], [25, 65]), {
    stiffness: 200,
    damping: 25,
  })
  const tiltTransform = useMotionTemplate`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.28), transparent 48%)`

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!visualRef.current || event.pointerType === 'touch') return
    const rect = visualRef.current.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const handlePointerLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.div
      ref={visualRef}
      className="hero__visual"
      initial="hidden"
      animate="visible"
      variants={slideFromRight}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero__photo-stage" aria-hidden="true">
        <span className="hero__photo-grid" />
        <span className="hero__photo-reflection" />
      </div>

      <motion.div className="hero__photo-tilt" style={{ transform: tiltTransform }}>
        <motion.div
          className="hero__photo-float"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="hero__photo-frame">
            <ShineBorder
              shineColor={['#a78bfa', '#67e8f9', '#f0abfc', '#a78bfa']}
              borderWidth={1}
              duration={8}
            />
            <BorderBeam
              size={120}
              duration={7}
              delay={2}
              colorFrom="#a78bfa"
              colorTo="#67e8f9"
              borderWidth={2}
            />
            <div className="hero__photo-surface">
              <img
                src={profilePhoto}
                alt={portfolio.profileAlt}
                className="hero__photo"
                width={400}
                height={500}
              />
              <motion.span
                className="hero__photo-glare"
                style={{ background: glareBackground }}
                aria-hidden="true"
              />
              <span className="hero__photo-scan" aria-hidden="true" />
              <span className="hero__photo-vignette" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__chip hero__chip--exp"
        initial={{ opacity: 0, scale: 0.9, x: 12 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.45, duration: 0.55, ease }}
      >
        <span className="hero__chip-value">{portfolio.yearsExperience}</span>
        <span className="hero__chip-label">Experience</span>
      </motion.div>

      <motion.div
        className="hero__chip hero__chip--role"
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.55, ease }}
      >
        <Code2 className="size-4" aria-hidden="true" />
        <span>Full Stack</span>
      </motion.div>

      <motion.div
        className="hero__float"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6, ease }}
      >
        <Sparkles className="size-4 text-primary" aria-hidden="true" />
        <div>
          <strong>Super Full Stack</strong>
          <span>Web · Mobile · UI</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__mesh" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <a href="#contact" className="hero__availability">
              <span className="hero__availability-inner">
                <ShineBorder
                  shineColor={['#a78bfa', '#67e8f9', '#c4b5fd', '#a78bfa']}
                  borderWidth={1}
                  duration={10}
                />
                <span className="hero__availability-status" aria-hidden="true">
                  <span className="hero__availability-pulse" />
                  <span className="hero__availability-dot" />
                </span>
                <span className="hero__availability-copy">
                  <span className="hero__availability-label">Available now</span>
                  <span className="hero__availability-text">{portfolio.availability}</span>
                </span>
                <ArrowUpRight className="hero__availability-icon" aria-hidden="true" />
              </span>
            </a>
          </motion.div>

          <motion.h1 className="hero__headline" variants={fadeUp}>
            <span className="hero__greeting">Hi, I'm</span>
            <span className="hero__name">{portfolio.name}</span>
            <span className="hero__role">{portfolio.title}</span>
          </motion.h1>

          <motion.p className="hero__tagline" variants={fadeUp}>
            {portfolio.tagline}
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <Button size="lg" className="rounded-full px-6" render={<a href="#projects" />}>
              View projects
              <ArrowUpRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-border/70 bg-card/40 px-6 backdrop-blur-sm"
              render={<a href="#contact" />}
            >
              Contact me
            </Button>
          </motion.div>

          <motion.div className="hero__cards" variants={fadeUp}>
            {[
              { label: 'Location', value: portfolio.location },
              { label: 'Experience', value: `${portfolio.yearsExperience} years` },
              { label: 'Email', value: portfolio.email, href: `mailto:${portfolio.email}` },
            ].map((item) => (
              <div key={item.label} className="hero__card">
                <span className="hero__card-label">{item.label}</span>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div className="hero__social" variants={fadeUp}>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <HeroPhotoVisual />
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6, ease }}
      >
        <span className="hero__scroll-line" />
      </motion.a>
    </section>
  )
}
