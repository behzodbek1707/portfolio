import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const lines = [
  '> sleep...',
  '> code...',
  '> eat...',
  '> repeat...'
]

export default function BootScreen({ onComplete }) {
  const [visible, setVisible] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    lines.forEach((_, i) => {
      setTimeout(() => {
        setVisible(v => [...v, i])
        if (i === lines.length - 1)
          setTimeout(() => { setDone(true); setTimeout(onComplete, 500) }, 500)
      }, i * 350)
    })
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div className="boot-screen" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <div style={{ width: '100%', maxWidth: 440, padding: '0 2rem' }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
              &lt;<span style={{ color: '#e2eaf7' }}>darken</span>/&gt;
            </div>
            {lines.map((line, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -8 }} animate={visible.includes(i) ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.25 }}
                style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', marginBottom: '0.6rem',
                  color: i === lines.length - 1 ? 'var(--accent)' : 'var(--muted)' }}>
                {line}
                {i === visible.length - 1 && i < lines.length - 1 && (
                  <span style={{ display: 'inline-block', width: 8, height: 12, background: 'var(--accent)', marginLeft: 4, verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
                )}
              </motion.div>
            ))}
            <motion.div initial={{ scaleX: 0 }} animate={visible.length === lines.length ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7 }}
              style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', transformOrigin: 'left', marginTop: '1.2rem' }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
