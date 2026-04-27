import useReveal from '../hooks/useReveal'

const stats = [
  { num: '1+',  label: 'Years Experience' },
  { num: '10+', label: 'Projects Shipped' },
  { num: '∞',   label: 'Lines of Code' },
  { num: '∞', label: 'Cups of Coffee' },
]

const skillGroups = [
  {
    title: 'Frontend',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    tags: ['Node.js', 'Express', 'REST APIs']
  },
  {
    title: 'Databases',
    tags: ['MongoDB', 'PostgreSQL']
  },
  {
    title: 'Languages',
    tags: ['JavaScript', "TypeScript", 'Python (Basics)', 'C (Basics)', "SQL"]
  },
  {
    title: 'Data Structures & Algorithms',
    tags: ['Arrays', 'Objects', 'Recursion', 'Sorting Basics', 'Problem Solving']
  },
  {
    title: 'Tools',
    tags: ['Git', 'GitHub', 'VS Code', 'Postman']
  }
]

export default function About() {
  const textRef  = useReveal()
  const statsRef = useReveal()
  const skillsRef = useReveal()

  return (
    <section id="about">
      <div className="section-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>

          <div className="reveal" ref={textRef}>
            <div className="sec-label">01 / About Me</div>
            <h2 className="sec-title">I write code that <em>matters</em>.</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '0.85rem', marginBottom: '1rem' }}>
              I'm a software engineer with a passion for building products at the intersection of great engineering and thoughtful user experience.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '0.85rem', marginBottom: '1.8rem' }}>
              I enjoy solving hard technical problems, learning new technologies, and shipping software that makes a real difference.
            </p>
            <a href="#contact" className="btn btn-outline">Get In Touch →</a>
          </div>

          <div className="reveal reveal-d2" ref={statsRef}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
            {stats.map(s => (
              <div key={s.label} className="card" style={{ textAlign: 'center', cursor: 'none' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.4rem', color: 'var(--accent)', display: 'block', marginBottom: '0.3rem' }}>{s.num}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="skills" className="reveal reveal-d2" ref={skillsRef}>
          <div className="sec-label">02 / Skills</div>
          <h2 className="sec-title" style={{ marginBottom: '2rem' }}>My Tech <em>Stack</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }}>
            {skillGroups.map(g => (
              <div key={g.title} className="card" style={{ cursor: 'none' }}>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '1rem' }}>
                  ⬡ {g.title}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {g.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
