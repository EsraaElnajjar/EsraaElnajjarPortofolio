import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'
import { ease } from '../motion/variants'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="container navbar__inner">
        <motion.a
          href="#"
          className="navbar__logo"
          onClick={closeMenu}
          whileHover={{ scale: 1.03 }}
        >
          {portfolio.name}
          <span className="navbar__logo-mark" aria-hidden="true">
            _
          </span>
        </motion.a>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {links.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.06, duration: 0.5, ease }}
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.button
            type="button"
            className="navbar__backdrop"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}
