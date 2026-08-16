import { portfolio } from '../data/portfolio'
import { Marquee } from '@/components/ui/marquee'
import { Separator } from '@/components/ui/separator'
import { ParallaxSection } from './ParallaxSection'

const techStack = portfolio.skills.flatMap((group) => group.items)

export function TechMarquee() {
  return (
    <ParallaxSection className="tech-marquee" variant="elevated" aria-label="Tech stack marquee">
      <div className="container tech-marquee__header">
        <span className="tech-marquee__label">Stack</span>
        <Separator className="tech-marquee__line" />
      </div>

      <div className="tech-marquee__track-wrap">
        <Marquee pauseOnHover className="tech-marquee__marquee [--duration:38s]">
          {techStack.map((item) => (
            <span key={item} className="tech-marquee__pill">
              {item}
            </span>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="tech-marquee__marquee [--duration:46s]">
          {techStack.map((item) => (
            <span key={`rev-${item}`} className="tech-marquee__pill tech-marquee__pill--muted">
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </ParallaxSection>
  )
}
