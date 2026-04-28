import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const projects = [
  { id: '01', featured: true,
    name: 'Node.js-Trello',
    desc: '🗂️ Backend service for a Trello-inspired project management system built with Node.js. Handles core task orchestration logic including board structures, card operations, and user interactions. Designed with modular architecture, RESTful API patterns, and scalability in mind.',
    stack: ['Node.js', 'Express.js', 'PostgreSQL'],
    demo: null, repo: 'https://github.com/behzod1205/nodejs-trello-service', emoji: '📋' },
  { id: '02', featured: false,
    name: 'Coin Collector Manager',
    desc: '💰 A structured coin collection management system built with Node.js. Designed to help users catalog, organize, and track coin collections with scalable data models and clean API architecture for easy integration with frontend or mobile apps.',
    stack: ['Node.js', 'Express.js', 'PostgreSQL'],
    demo: null, repo: 'https://github.com/behzod1205/coin_collection_manager' },
  { id: '03', featured: false,
    name: 'Expense Tracker',
    desc: '💸 A simple yet effective expense tracking system for personal finance management. Built to help users log income and expenses, categorize transactions, and gain insights into their spending patterns through a clean and structured interface.',
    stack: ['Node.js', 'Express.js', 'HTML', 'CSS'],
    demo: null, repo: 'https://github.com/behzod1205/portfolio/tree/main/Project_1' },
]

function Card({ p, delay }) {
  const ref = useReveal()
  const [hov, setHov] = useState(false)

  return (
    <div className={`card reveal reveal-d${delay} ${p.featured ? 'project-featured' : ''}`} ref={ref}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 0,
        cursor: 'none',
        borderColor: hov ? 'rgba(0,240,255,0.28)' : 'var(--border)',
        transform: hov ? 'translateY(-5px)' : 'none',
        boxShadow: hov ? '0 20px 48px rgba(0,0,0,0.5)' : 'none',
        transition: 'all 0.3s',
      }}>

      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '0.63rem', color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: '0.7rem' }}>
          PROJECT_{p.id}
        </div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: hov ? 'var(--accent)' : 'var(--text)', marginBottom: '0.75rem', transition: 'color 0.25s' }}>
          {p.name}
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.2rem', flex: 1 }}>
          {p.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.3rem' }}>
          {p.stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
        </div>
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
          {p.demo && <a href={p.demo} className="btn btn-primary" style={{ fontSize: '0.7rem', padding: '0.55rem 1.2rem' }}>Live Demo ↗</a>}
          {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ fontSize: '0.7rem', padding: '0.55rem 1.2rem' }}>GitHub ⌥</a>}
        </div>
      </div>

      {p.featured && (
        <div className="project-visual">{p.emoji}</div>
      )}
    </div>
  )
}

export default function Projects() {
  const titleRef = useReveal()

  return (
    <section id="projects">
      <div className="section-wrap">
        <div className="reveal" ref={titleRef}>
          <div className="sec-label">03 / Projects</div>
          <h2 className="sec-title" style={{ marginBottom: '2.5rem' }}>Featured <em>Work</em></h2>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => <Card key={p.id} p={p} delay={i + 1} />)}
        </div>
      </div>
    </section>
  )
}