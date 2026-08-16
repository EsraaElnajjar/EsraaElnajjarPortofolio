import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { BorderBeam } from '@/components/ui/border-beam'
import { ShineBorder } from '@/components/ui/shine-border'
import { fadeUp, staggerContainer, viewportOnce } from '../motion/variants'
import { ParallaxSection } from './ParallaxSection'
import { SectionHeading } from './SectionHeading'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-wa__icon" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.53 2 2.04 6.49 2.04 12c0 1.76.46 3.48 1.34 5L2 22l5.13-1.35A9.93 9.93 0 0 0 12.04 22c5.51 0 10-4.49 10-10 0-2.67-1.04-5.18-2.99-7.09m-7.01 15.24c-1.52 0-3.01-.4-4.32-1.17l-.31-.18-3.04.8.81-2.96-.2-.3a8.24 8.24 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.83c.01 4.54-3.7 8.24-8.17 8.24m4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3.5 9.2h3V21h-3V9.2Zm6.3 0h2.9v1.6h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.6 2 3.6 4.7V21h-3v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-3V9.2Z" />
    </svg>
  )
}

const secondaryLinks = [
  { label: 'Email', href: `mailto:${portfolio.email}`, icon: Mail, hint: portfolio.email },
  { label: 'GitHub', href: portfolio.social.github, icon: GitHubIcon, hint: '@esraaelnajjar' },
  { label: 'LinkedIn', href: portfolio.social.linkedin, icon: LinkedInIcon, hint: 'Let’s connect' },
]

export function Contact() {
  return (
    <ParallaxSection id="contact" className="section contact" variant="accent">
      <div className="container">
        <SectionHeading index="06" label="Contact" title="Start a conversation" />

        <motion.div
          className="contact__layout"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div className="contact__intro" variants={fadeUp}>
            <div className="contact__identity">
              <p className="contact__kicker">{portfolio.availability}</p>
              <h3 className="contact__name">{portfolio.name}</h3>
              <p className="contact__place">{portfolio.location}</p>
            </div>
            <p className="contact__lead">
              The fastest way to reach me is WhatsApp. Say hi, send a brief, or just ask if I’m
              free to talk.
            </p>
          </motion.div>

          <motion.a
            className="contact-wa"
            href={portfolio.whatsapp}
            target="_blank"
            rel="noreferrer"
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18 }}
          >
            <ShineBorder
              shineColor={['#25D366', '#67e8f9', '#128C7E', '#25D366']}
              borderWidth={1}
              duration={7}
            />
            <BorderBeam
              size={140}
              duration={6}
              colorFrom="#25D366"
              colorTo="#67e8f9"
              borderWidth={2}
            />
            <span className="contact-wa__rings" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="contact-wa__logo">
              <WhatsAppIcon />
            </span>
            <span className="contact-wa__copy">
              <strong>Chat on WhatsApp</strong>
              <span>{portfolio.phone}</span>
            </span>
            <span className="contact-wa__go">
              Open chat
              <ArrowUpRight className="size-4" />
            </span>
          </motion.a>

          <motion.div className="contact__secondary" variants={fadeUp}>
            {secondaryLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  className="contact__channel"
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                >
                  <span className="contact__channel-icon">
                    <Icon className="size-4" />
                  </span>
                  <span>
                    <strong>{link.label}</strong>
                    <span>{link.hint}</span>
                  </span>
                </a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
