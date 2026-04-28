import { motion } from 'framer-motion'
import useTyping from '../hooks/useTyping'

const typingWords = ['Full-Stack Developer', 'AI Systems Builder', 'Creative Engineer', 'Software Engineer']

export default function Hero() {
  const typed = useTyping(typingWords, 75, 2200)

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '6rem 5rem 3rem',
      }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: '4rem',
          alignItems: 'center',
        }}>

          <div style={{ minWidth: 0 }}>

            <motion.div
              initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ fontSize: '0.7rem', letterSpacing: '0.18em', color: '#00f0ff', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00f0ff', animation: 'pulse 2s infinite', display: 'inline-block', flexShrink: 0 }} />
              // HELLO, WORLD
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 3.8vw, 4rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              Behzodbek
              <span style={{ display: 'block', WebkitTextStroke: '1px #5cbeff', color: 'transparent' }}>
                Abdumutalov
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              style={{ fontSize: '0.88rem', color: '#5cbeff', maxWidth: 400, lineHeight: 1.85, marginTop: '1.4rem' }}
            >
              Software Engineer crafting fast, scalable, and thoughtfully
              designed web applications. I turn complex problems into clean code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              style={{ fontSize: '0.78rem', color: '#00f0ff', marginTop: '1.2rem', height: '1.4rem' }}
            >
              <span style={{ color: '#5cbeff' }}>&gt; </span>
              {typed}
              <span style={{ display: 'inline-block', width: 2, height: '0.85rem', background: '#00f0ff', marginLeft: 2, verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}
            >
              <a href="#about" className="btn btn-primary">Explore Profile →</a>
              <a href="/Behzodbek-Abdumutalov.pdf" download="Behzodbek-Abdumutalov.pdf" className="btn btn-outline">Download CV ↓</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            style={{ position: 'relative', padding: '1.5rem 0' }}
          >
            <div style={{
              width: '100%',
              aspectRatio: '3 / 4',
              borderRadius: 8,
              overflow: 'hidden',
              border: '1px solid #1a2a3a',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
              background: '#0c1120',
              position: 'relative',
            }}>
              <img
                src="/profile.jpg"
                alt="Behzodbek Abdumutalov"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div style={{ position: 'absolute', top: 0, right: 0, width: 28, height: 28, borderTop: '2px solid #00f0ff', borderRight: '2px solid #00f0ff' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: 28, height: 28, borderBottom: '2px solid rgba(168,85,247,0.6)', borderLeft: '2px solid rgba(168,85,247,0.6)' }} />
            </div>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: 0, right: -10,
                background: 'rgba(12,17,32,0.97)', border: '1px solid #1a2a3a',
                borderRadius: 4, padding: '0.5rem 0.85rem',
                fontFamily: 'Space Mono, monospace', fontSize: '0.65rem',
                color: '#5cbeff', whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              JavaScript · Node · React
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: 0, left: -10,
                background: 'rgba(12,17,32,0.97)', border: '1px solid #1a2a3a',
                borderRadius: 4, padding: '0.5rem 0.85rem',
                fontFamily: 'Space Mono, monospace', fontSize: '0.65rem',
                color: '#e2eaf7', whiteSpace: 'nowrap',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00f0ff', animation: 'pulse 2s infinite', display: 'inline-block', flexShrink: 0 }} />
              Open to work
            </motion.div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          style={{ paddingTop: '4rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.62rem', color: '#5cbeff', letterSpacing: '0.12em' }}
        >
          <div style={{ width: 36, height: 1, background: '#5cbeff' }} />
          Scroll Down...
        </motion.div>

      </div>
    </section>
  )
}