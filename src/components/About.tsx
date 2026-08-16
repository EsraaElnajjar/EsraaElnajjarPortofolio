import { motion } from 'framer-motion'
import profilePhoto from '../assets/profile.png'
import { portfolio } from '../data/portfolio'
import { fadeUp, slideFromLeft, slideFromRight, staggerContainer, viewportOnce } from '../motion/variants'
import { ParallaxSection } from './ParallaxSection'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <ParallaxSection id="about" className="section about" variant="warm">
      <div className="container">
        <SectionHeading index="01" label="About" title="Who I am" />

        <div className="about__grid">
          <motion.div
            className="about__photo-col"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideFromLeft}
          >
            <div className="about__photo-frame">
              <img src={profilePhoto} alt={portfolio.profileAlt} className="about__photo" />
              <div className="about__photo-accent" aria-hidden="true" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.p className="about__intro" variants={fadeUp}>
              {portfolio.about.intro}
            </motion.p>

            <motion.ul className="about__highlights" variants={staggerContainer}>
              {portfolio.about.highlights.map((item) => (
                <motion.li key={item} variants={slideFromRight}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className="about__education" variants={fadeUp}>
              <span className="about__edu-label">Education</span>
              <h3>{portfolio.education.degree}</h3>
              <p className="about__edu-school">{portfolio.education.school}</p>
              <p className="about__edu-meta">
                {portfolio.education.period} · {portfolio.education.focus}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </ParallaxSection>
  )
}
