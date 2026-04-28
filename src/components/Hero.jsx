import { motion } from 'framer-motion'
import useTyping from '../hooks/useTyping'

const typingWords = ['Full-Stack Developer', 'AI Systems Builder', 'Creative Engineer', 'Software Engineer']

export default function Hero() {
  const typed = useTyping(typingWords, 75, 2200)

  return (
    <>
      <style>{`
        #hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .h-wrap {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 6rem 5rem 3rem 5rem;
        }

        .h-grid {
          display: grid;
          grid-template-columns: 1fr 280px;
          column-gap: 5rem;
          align-items: center;
        }

        .h-left {
          min-width: 0;
        }

        .h-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 3.5vw, 4rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 0.1em;
        }

        .h-right {
          position: relative;
          padding: 1.5rem 0;
        }

        .h-frame {
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #1a2a3a;
          box-shadow: 0 24px 64px rgba(0,0,0,0.5);
          background: #0c1120;
        }

        .h-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .h-badge {
          position: absolute;
          background: rgba(12,17,32,0.97);
          border: 1px solid #1a2a3a;
          border-radius: 4px;
          padding: 0.5rem 0.85rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        }

        .h-badge-top {
          top: 0;
          right: -10px;
          color: #5cbeff;
        }

        .h-badge-bottom {
          bottom: 0;
          left: -10px;
          color: #e2eaf7;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .h-wrap {
            padding: 6rem 2.5rem 3rem 2.5rem;
          }
          .h-grid {
            grid-template-columns: 1fr 240px;
            column-gap: 3rem;
          }
          .h-name {
            font-size: clamp(2rem, 3vw, 3.2rem);
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .h-wrap {
            padding: 6rem 1.5rem 3rem 1.5rem;
          }
          .h-grid {
            grid-template-columns: 1fr;
            row-gap: 2.5rem;
          }
          .h-left  { order: 1; }
          .h-right {
            order: 2;
            width: 200px;
            margin: 0 auto;
          }
          .h-name {
            font-size: clamp(2rem, 8vw, 2.8rem);
          }
          .h-badge-top  { right: -4px; }
          .h-badge-bottom { left: -4px; }
        }

        @media (max-width: 400px) {
          .h-right { width: 160px; }
        }
      `}</style>

      <section id="hero">
        <div className="h-wrap">
          <div className="h-grid">

            <div className="h-left">

              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.18em',
                  color: '#00f0ff',
                  marginBottom: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: '#00f0ff',
                  animation: 'pulse 2s infinite',
                  display: 'inline-block',
                  flexShrink: 0,
                }} />
                // HELLO, WORLD
              </motion.div>

              <motion.h1
                className="h-name"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.7 }}
              >
                Behzodbek
                <span style={{
                  display: 'block',
                  WebkitTextStroke: '1px #5cbeff',
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
                  fontSize: '0.88rem',
                  color: '#5cbeff',
                  maxWidth: 400,
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
                  color: '#00f0ff',
                  marginTop: '1.2rem',
                  height: '1.2rem',
                }}
              >
                <span style={{ color: '#5cbeff' }}>&gt; </span>
                {typed}
                <span style={{
                  display: 'inline-block',
                  width: 2,
                  height: '0.85rem',
                  background: '#00f0ff',
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
              className="h-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div className="h-frame">
                <img src="/profile.jpg" alt="Behzodbek Abdumutalov" />
                <div style={{ position: 'absolute', top: 0, right: 0, width: 28, height: 28, borderTop: '2px solid #00f0ff', borderRight: '2px solid #00f0ff' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: 28, height: 28, borderBottom: '2px solid rgba(168,85,247,0.6)', borderLeft: '2px solid rgba(168,85,247,0.6)' }} />
              </div>

              <motion.div
                className="h-badge h-badge-top"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                JavaScript · Node · React
              </motion.div>

              <motion.div
                className="h-badge h-badge-bottom"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: '#00f0ff',
                  animation: 'pulse 2s infinite',
                  display: 'inline-block',
                  flexShrink: 0,
                }} />
                Open to work
              </motion.div>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            style={{
              paddingTop: '4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              fontSize: '0.62rem',
              color: '#5cbeff',
              letterSpacing: '0.12em',
            }}
          >
            <div style={{ width: 36, height: 1, background: '#5cbeff' }} />
            Scroll Down...
          </motion.div>
        </div>
      </section>
    </>
  )
}