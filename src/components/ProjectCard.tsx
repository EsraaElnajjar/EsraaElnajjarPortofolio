import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import type { PortfolioProject } from '../data/portfolio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { fadeUp, viewportOnce } from '../motion/variants'

function ProjectLogo({ project }: { project: PortfolioProject }) {
  const [failed, setFailed] = useState(false)
  const initial = project.title.trim().charAt(0).toUpperCase()

  if (!project.logo || failed) {
    return (
      <span className="project-card__logo project-card__logo--fallback" aria-hidden="true">
        {initial}
      </span>
    )
  }

  const logoClass = [
    'project-card__logo',
    project.logoBg === 'light' ? 'project-card__logo--light' : '',
    project.logoTall ? 'project-card__logo--tall' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={logoClass}>
      <img src={project.logo} alt="" onError={() => setFailed(true)} />
    </span>
  )
}

type ProjectCardProps = {
  project: PortfolioProject
  index: number
  gradient: string
}

export function ProjectCard({ project, index, gradient }: ProjectCardProps) {
  const primaryLink = project.links[0]
  const reversed = index % 2 === 1
  const visualAlt = project.imageAlt ?? `${project.title} preview`

  const visual = project.image ? (
    <img
      src={project.image}
      alt={visualAlt}
      className="project-card__image"
      loading="lazy"
      decoding="async"
    />
  ) : (
    <div className="project-card__placeholder" aria-hidden="true">
      <span>{String(index + 1).padStart(2, '0')}</span>
      <strong>{project.title}</strong>
    </div>
  )

  return (
    <motion.article
      className={`project-card ${reversed ? 'project-card--reversed' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <div className="project-card__visual">
        {primaryLink ? (
          <a
            href={primaryLink.href}
            target="_blank"
            rel="noreferrer"
            className="project-card__image-link"
            aria-label={`${primaryLink.label} — ${project.title}`}
          >
            {visual}
          </a>
        ) : (
          visual
        )}
        <div className="project-card__visual-tint" style={{ background: gradient }} aria-hidden="true" />
        <div className="project-card__visual-overlay" aria-hidden="true" />
        <Badge variant="secondary" className="project-card__index-badge">
          {String(index + 1).padStart(2, '0')}
        </Badge>
      </div>

      <div className="project-card__body">
        <ProjectLogo project={project} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-card__tech">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="project-card__links">
            {project.links.map((link) => (
              <Button
                key={`${link.label}-${link.href}`}
                variant={link.label.toLowerCase().includes('github') ? 'outline' : 'default'}
                size="sm"
                className="rounded-full"
                render={<a href={link.href} target="_blank" rel="noreferrer" />}
              >
                {link.label}
                <ArrowUpRight className="size-3.5" />
              </Button>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}
