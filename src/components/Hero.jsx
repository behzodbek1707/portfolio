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
      <style>{`
        .hero-wrapper {
          width: 100%;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          padding-left: clamp(1.5rem, 5vw, 5rem);
          padding-right: clamp(1.5rem, 5vw, 5rem);
          padding-top: 6rem;
          padding-bottom: 3rem;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 3rem;
          align-items: center;
        }

        .hero-text-col {
          min-width: 0;
          overflow: hidden;
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 4.5vw, 4.5rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 0.15em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .hero-image-col {
          position: relative;
          padding-top: 1.8rem;
          padding-bottom: 1.8rem;
        }

        .hero-image-frame {
          width: 100%;
          aspect-ratio: 3 / 4;
          position: relative;
          background: rgba(12,17,32,0.9);
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.5);
        }

        .hero-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .hero-badge-top {
          position: absolute;
          top: 0;
          right: -8px;
          background: rgba(12,17,32,0.97);
          border: 1px solid var(--border);
          padding: 0.5rem 0.85rem;
          border-radius: 4px;
          backdrop-filter: blur(20px);
          font-size: 0.65rem;
          color: var(--muted);
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          font-family: var(--mono);
        }

        .hero-badge-bottom {
          position: absolute;
          bottom: 0;
          left: -8px;
          background: rgba(12,17,32,0.97);
          border: 1px solid var(--border);
          padding: 0.5rem 0.85rem;
          border-radius: 4px;
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.65rem;
          color: var(--text);
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          font-family: var(--mono);
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 260px;
            gap: 2.5rem;
          }
          .hero-name {
            font-size: clamp(1.8rem, 4vw, 3.5rem);
            white-space: normal;
          }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-text-col { order: 1; }

          .hero-image-col {
            order: 2;
            width: 220px;
            margin-left: auto;
            margin-right: auto;
            padding-top: 1.2rem;
            padding-bottom: 1.2rem;
          }

          .hero-name {
            font-size: clamp(2rem, 10vw, 3rem);
            white-space: normal;
          }

          .hero-badge-top  { right: -4px; }
          .hero-badge-bottom { left: -4px; }
        }

        @media (max-width: 400px) {
          .hero-image-col { width: 180px; }
          .hero-name { font-size: 2rem; }
        }
      `}</style>

      <div className="hero-wrapper">
        <div className="hero-grid">

          <div className="hero-text-col">

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
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--accent)',
                animation: 'pulse 2s infinite',
                display: 'inline-block',
                flexShrink: 0,
              }} />
              // HELLO, WORLD
            </motion.div>
=
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              Behzodbek
              <span style={{
                display: 'block',
                WebkitTextStroke: '1px var(--muted)',
                color: 'transparent',
              }}>
                Abdumutalov
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              style={{
                fontSize: '0.9rem',
                color: 'var(--muted)',
                maxWidth: 420,
                lineHeight: 1.85,
                marginTop: '1.4rem',
              }}
            >
              Software Engineer crafting fast, scalable, and thoughtfully
              designed web applications. I turn complex problems into clean code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              style={{
                fontSize: '0.78rem',
                color: 'var(--accent)',
                marginTop: '1.2rem',
                height: '1.2rem',
              }}
            >
              <span style={{ color: 'var(--muted)' }}>&gt; </span>
              {typed}
              <span style={{
                display: 'inline-block',
                width: 2,
                height: '0.85rem',
                background: 'var(--accent)',
                marginLeft: 2,
                verticalAlign: 'middle',
                animation: 'blink 1s step-end infinite',
              }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}
            >
              <a href="#about" className="btn btn-primary">Explore Profile →</a>
              <a
                href="/Behzodbek-Abdumutalov.pdf"
                download="Behzodbek-Abdumutalov.pdf"
                className="btn btn-outline"
              >
                Download CV ↓
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-image-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="hero-image-frame">
              <img src="/profile.jpg" alt="Behzodbek Abdumutalov" />
              
              <div style={{ position: 'absolute', top: 0, right: 0, width: 28, height: 28, borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: 28, height: 28, borderBottom: '2px solid rgba(168,85,247,0.6)', borderLeft: '2px solid rgba(168,85,247,0.6)' }} />
            </div>

            <motion.div
              className="hero-badge-top"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              JavaScript · Node · React
            </motion.div>

            <motion.div
              className="hero-badge-bottom"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--accent)',
                animation: 'pulse 2s infinite',
                display: 'inline-block',
                flexShrink: 0,
              }} />
              Open to work
            </motion.div>
          </motion.div>

        </div>

        <div style={{
          paddingTop: '4rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          fontSize: '0.62rem',
          color: 'var(--muted)',
          letterSpacing: '0.12em',
        }}>
          <div style={{ width: 36, height: 1, background: 'var(--muted)' }} />
          Scroll Down...
        </div>
      </div>
    </section>
  )
}
