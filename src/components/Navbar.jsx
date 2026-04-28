import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [active,   setActive]   = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
        padding: '1.1rem 2rem',
        background: scrolled || menuOpen ? 'rgba(5,8,16,0.96)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid #1a2a3a' : 'none',
        transition: 'all 0.3s',
      }}>

      <a href="#hero" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'var(--accent)', letterSpacing: '-0.01em' }}>
        &lt;<span style={{ color: 'var(--text)' }}>darken</span>/&gt;
      </a>

      <ul className="nav-desktop" style={{ display: 'flex', gap: '2.2rem', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: active === l.toLowerCase() ? 'var(--accent)' : 'var(--muted)', transition: 'color 0.2s', position: 'relative' }}>
              {l}
              {active === l.toLowerCase() && (
                <motion.span layoutId="nav-ul" style={{ position: 'absolute', bottom: -4, left: 0, right: 0, height: 1, background: 'var(--accent)' }} />
              )}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.68rem', color: 'var(--muted)' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2s infinite', display: 'inline-block' }} />
        Available for hire
      </div>

      <button onClick={() => setMenuOpen(o => !o)} className="nav-mobile"
        style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: '1.5rem', cursor: 'pointer', padding: '0.2rem 0.5rem', lineHeight: 1 }}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(5,8,16,0.98)', borderBottom: '1px solid #1a2a3a', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                style={{ fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: active === l.toLowerCase() ? 'var(--accent)' : 'var(--text)' }}>
                {l}
              </a>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.68rem', color: 'var(--muted)', paddingTop: '0.6rem', borderTop: '1px solid #1a2a3a' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
              Available for hire
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}