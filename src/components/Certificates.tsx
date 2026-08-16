import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { slideFromLeft, slideFromRight, staggerContainer, viewportOnce } from '../motion/variants'
import { ParallaxSection } from './ParallaxSection'
import { SectionHeading } from './SectionHeading'

export function Certificates() {
  return (
    <ParallaxSection id="certificates" className="section certificates" variant="cool">
      <div className="container">
        <div className="certificates__header">
          <SectionHeading index="05" label="A favourite" title="The one I hold closest" />
          <p className="certificates__lead">
            I have more certificates than this page shows — this ICPC placement is the one I
            keep returning to. The contest, the teammates, and that August day at Menofia
            still feel like a memory worth pinning here.
          </p>
        </div>

        <div className="certificates__list">
          {portfolio.certificates.map((item) => (
            <motion.article
              key={item.title}
              className="certificates__card"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.a
                className="certificates__preview"
                href={item.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${item.title}`}
                variants={slideFromLeft}
              >
                <img src={item.image} alt={item.imageAlt} />
              </motion.a>

              <motion.div className="certificates__body" variants={slideFromRight}>
                <span className="certificates__badge">
                  <Award className="size-4" aria-hidden="true" />
                  {item.result}
                </span>
                <h3>{item.title}</h3>
                <p className="certificates__event">{item.event}</p>
                <p className="certificates__meta">
                  {item.issuer} · {item.date}
                </p>
                <p className="certificates__school">{item.institution}</p>

                <div className="certificates__team">
                  <span>Team</span>
                  <ul>
                    {item.team.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}
