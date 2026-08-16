import { motion } from 'framer-motion'
import { GitBranch } from 'lucide-react'
import { Marquee } from '@/components/ui/marquee'
import { ShineBorder } from '@/components/ui/shine-border'
import { portfolio } from '../data/portfolio'
import { fadeUp, staggerContainer, viewportOnce } from '../motion/variants'
import { ParallaxSection } from './ParallaxSection'
import { SectionHeading } from './SectionHeading'

const featuredStack = [
  'React.js',
  'NestJS',
  'UI/UX',
  'Flutter',
  'Full Stack',
  'Figma',
]

export function Skills() {
  const totalSkills = portfolio.skills.reduce((sum, group) => sum + group.items.length, 0)

  return (
    <ParallaxSection id="skills" className="section skills" variant="cool">
      <div className="container">
        <div className="skills__header">
          <div className="skills__header-row">
            <SectionHeading index="02" label="Skills" title="Toolbox" />
            <motion.div
              className="skills__stat"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
            >
              <span className="skills__stat-value">{totalSkills}</span>
              <span className="skills__stat-label">tools in rotation</span>
            </motion.div>
          </div>

          <motion.p
            className="skills__subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            The stack I reach for on real projects — not a buzzword dump.
          </motion.p>
        </div>

        <motion.div
          className="skills__bento"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {portfolio.skills.map((group, groupIndex) => {
            const isTechnical = groupIndex === 0

            return (
              <motion.article
                key={group.category}
                className={`skills__panel ${isTechnical ? 'skills__panel--wide' : ''}`}
                variants={fadeUp}
              >
                <header className="skills__panel-head">
                  <span className="skills__panel-index">
                    {String(groupIndex + 1).padStart(2, '0')}
                  </span>
                  <h3>{group.category}</h3>
                </header>

                <ul
                  className={`skills__chips ${isTechnical ? 'skills__chips--grid' : 'skills__chips--flow'}`}
                >
                  {group.items.map((skill) => (
                    <li key={skill} className="skills__chip">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}

          <motion.div className="skills__combo" variants={fadeUp}>
            <div className="skills__combo-inner">
              <ShineBorder
                shineColor={['#a78bfa', '#67e8f9', '#c4b5fd', '#a78bfa']}
                borderWidth={1}
                duration={14}
              />

              <div className="skills__combo-head">
                <div className="skills__combo-icon" aria-hidden="true">
                  <GitBranch className="size-5" />
                </div>
                <div className="skills__combo-copy">
                  <span className="skills__combo-eyebrow">Shipped together</span>
                  <h3 className="skills__combo-title">Often in the same repo</h3>
                  <p className="skills__combo-desc">
                    The default combo when a project moves from design to production.
                  </p>
                </div>
              </div>

              <div className="skills__combo-track skills__combo-track--desktop">
                <Marquee pauseOnHover className="skills__combo-marquee [--duration:34s]">
                  {featuredStack.map((skill) => (
                    <span key={skill} className="skills__combo-pill">
                      <span className="skills__combo-pill-dot" aria-hidden="true" />
                      {skill}
                    </span>
                  ))}
                </Marquee>
              </div>

              <div className="skills__combo-static">
                {featuredStack.map((skill) => (
                  <span key={skill} className="skills__combo-pill">
                    <span className="skills__combo-pill-dot" aria-hidden="true" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
