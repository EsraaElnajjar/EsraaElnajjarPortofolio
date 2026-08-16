import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import type { PortfolioProject } from '../data/portfolio'
import { fadeUp, viewportOnce } from '../motion/variants'
import { ParallaxSection } from './ParallaxSection'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

const gradients = [
  'linear-gradient(135deg, #a78bfa 0%, #6d28d9 100%)',
  'linear-gradient(135deg, #67e8f9 0%, #0891b2 100%)',
  'linear-gradient(135deg, #f0abfc 0%, #a21caf 100%)',
  'linear-gradient(135deg, #818cf8 0%, #4338ca 100%)',
  'linear-gradient(135deg, #5eead4 0%, #0d9488 100%)',
  'linear-gradient(135deg, #c4b5fd 0%, #7c3aed 100%)',
]

export function Projects() {
  return (
    <ParallaxSection id="projects" className="section projects" variant="deep">
      <div className="container">
        <div className="projects__header">
          <SectionHeading index="03" label="Projects" title="Selected work & explorations" />
          <p className="projects__lead">
            Selected client work and products I designed or built — from live platforms and
            delivery apps to university and side projects.
          </p>
        </div>

        <div className="projects__list">
          {(portfolio.projects as unknown as PortfolioProject[]).map((project: PortfolioProject, index: number) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              gradient={gradients[index % gradients.length]}
            />
          ))}
        </div>

        <motion.div
          className="projects__cta"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div>
            <h3>More work on the way</h3>
            <p>Digital products, interfaces, and experiments built with care.</p>
          </div>
          <a href="#contact" className="btn btn--primary">
            Start a conversation
            <ArrowUpRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
