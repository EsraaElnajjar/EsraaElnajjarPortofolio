import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import { fadeUp, viewportOnce } from '../motion/variants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <div className="container footer__inner">
        <p>
          © {year} {portfolio.name}. 
        </p>
        <motion.a
          href="#"
          className="footer__top"
          whileHover={{ y: -3, color: 'var(--accent)' }}
        >
          Back to top ↑
        </motion.a>
      </div>
    </motion.footer>
  )
}
