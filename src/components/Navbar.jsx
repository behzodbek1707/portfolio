import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      let cur = ''
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 180) cur = s.id })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.1rem 4rem',
        background: scrolled ? 'rgba(5,8,16,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #1a2a3a' : 'none',
        transition: 'all 0.3s',
      }}>
      <a href="#hero" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'var(--accent)', letterSpacing: '-0.01em' }}>
        &lt;<span style={{ color: 'var(--text)' }}>darken</span>/&gt;
      </a>

      <ul style={{ display: 'flex', gap: '2.2rem', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: active === l.toLowerCase() ? 'var(--accent)' : 'var(--muted)',
              transition: 'color 0.2s', position: 'relative',
            }}>
              {l}
              {active === l.toLowerCase() && (
                <motion.span layoutId="nav-ul"
                  style={{ position: 'absolute', bottom: -4, left: 0, right: 0, height: 1, background: 'var(--accent)' }} />
              )}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.68rem', color: 'var(--muted)' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2s infinite', display: 'inline-block' }} />
        Available for hire
      </div>
    </motion.nav>
  )
}
