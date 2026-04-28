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
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(1.25rem, 5vw, 5rem)',
          paddingRight: 'clamp(1.25rem, 5vw, 5rem)',
          paddingTop: '6rem',
          paddingBottom: '3rem',
        }}
      >

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="hero-layout"
        >

          <div style={{ minWidth: 0 }}>
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                color: 'var(--accent)',
                marginBottom: '1.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2s infinite', display: 'inline-block', flexShrink: 0 }} />
              // HELLO, WORLD
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                marginBottom: '0.15em',
              }}
            >
              Behzodbek
              <span style={{ display: 'block', WebkitTextStroke: '1px var(--muted)', color: 'transparent' }}>
                Abdumutalov
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              style={{
                fontSize: '0.95rem',
                color: 'var(--muted)',
                maxWidth: 440,
                lineHeight: 1.8,
                marginTop: '1.6rem',
              }}
            >
              Software Engineer crafting fast, scalable, and thoughtfully designed web applications.
              I turn complex problems into clean code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              style={{ fontSize: '0.78rem', color: 'var(--accent)', marginTop: '1.4rem', height: '1.2rem' }}
            >
              <span style={{ color: 'var(--muted)' }}>&gt; </span>
              {typed}
              <span style={{ display: 'inline-block', width: 2, height: '0.85rem', background: 'var(--accent)', marginLeft: 2, verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}
            >
              <a href="#about" className="btn btn-primary">Explore Profile →</a>
              <a href="/Behzodbek-Abdumutalov.pdf" download="Behzodbek-Abdumutalov.pdf" className="btn btn-outline">Download CV ↓</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            style={{
              position: 'relative',
              /* Extra padding to give floating badges room without overflow */
              paddingTop: '1.5rem',
              paddingBottom: '1.5rem',
              paddingRight: '1rem',
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '3/4',
                position: 'relative',
                background: 'rgba(12,17,32,0.9)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src="/profile.jpg"
                alt="Behzodbek Abdumutalov"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
              <div style={{ position: 'absolute', top: 0, right: 0, width: 32, height: 32, borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: 32, height: 32, borderBottom: '2px solid rgba(168,85,247,0.6)', borderLeft: '2px solid rgba(168,85,247,0.6)' }} />
            </div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: -12,
                background: 'rgba(12,17,32,0.97)',
                border: '1px solid var(--border)',
                padding: '0.55rem 0.9rem',
                borderRadius: 4,
                backdropFilter: 'blur(20px)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.68rem',
                color: 'var(--text)',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2s infinite', display: 'inline-block', flexShrink: 0 }} />
              Open to work
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: 'rgba(12,17,32,0.97)',
                border: '1px solid var(--border)',
                padding: '0.55rem 0.9rem',
                borderRadius: 4,
                backdropFilter: 'blur(20px)',
                fontSize: '0.68rem',
                color: 'var(--muted)',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              JavaScript · Node · React
            </motion.div>
          </motion.div>

        </div>

        <div style={{ paddingTop: '4rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.12em' }}>
          <div style={{ width: 36, height: 1, background: 'var(--muted)' }} />
          Scroll Down...
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-layout > div:first-child  { order: 1; }
          .hero-layout > div:last-child   {
            order: 2;
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }
        }
        @media (max-width: 520px) {
          .hero-layout > div:last-child { max-width: 240px !important; }
        }
      `}</style>
    </section>
  )
}
