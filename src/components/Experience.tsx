import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import { slideFromLeft, staggerContainer, viewportOnce } from '../motion/variants'
import { ParallaxSection } from './ParallaxSection'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <ParallaxSection id="experience" className="section experience" variant="elevated">
      <div className="container">
        <SectionHeading index="04" label="Experience" title="Where I've worked" />

        <motion.div
          className="timeline"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {portfolio.experience.map((job) => (
            <motion.article
              key={job.company}
              className="timeline__item"
              variants={slideFromLeft}
            >
              <motion.div
                className="timeline__marker"
                aria-hidden="true"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewportOnce}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              />
              <div className="timeline__content">
                <div className="timeline__header">
                  <div>
                    <h3>{job.role ?? job.company}</h3>
                    <p className="timeline__company">
                      {job.role ? `${job.company} — ${job.location}` : job.location}
                    </p>
                  </div>
                  {job.period ? <time className="timeline__period">{job.period}</time> : null}
                </div>
                {job.description && <p>{job.description}</p>}
                {job.bullets && job.bullets.length > 0 ? (
                  <ul className="timeline__bullets">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
