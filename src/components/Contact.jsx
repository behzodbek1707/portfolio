import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const channels = [
  { icon: '✉',  label: 'bek.abdumutalov12@gmail.com',              
    href: 'mailto:bek.abdumutalov12@gmail.com' },
  { icon: '⌥',  label: 'github.com/behzodbek1707',                 
    href: 'https://github.com/behzodbek1707' },
  { icon: 'in', label: 'linkedin.com/in/behzodbek-abdumutalov',    
    href: 'https://www.linkedin.com/in/behzodbek-abdumutalov/' },
  { icon: '✈',  label: '@idle_coder',                              
    href: 'https://t.me/idle_coder' },
]

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Contact() {
  const leftRef  = useReveal()
  const rightRef = useReveal()
  const [form,   setForm]   = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errMsg, setErrMsg] = useState('')

  const set = (k) => (e) => setForm(v => ({ ...v, [k]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrMsg('Please fill in all fields.'); setStatus('error'); return
    }
    setStatus('sending'); setErrMsg('')
    try {
      const res  = await fetch(`${API_URL}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) { setErrMsg(data.error || 'Something went wrong.'); setStatus('error'); return }
      setStatus('sent'); setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setErrMsg('Could not reach the server. Please try again.'); setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inp = { width: '100%', padding: '0.75rem 1rem', background: 'rgba(12,17,32,0.8)', border: '1px solid var(--border)', color: 'var(--text)', fontFamily: 'var(--mono)', fontSize: '0.8rem', borderRadius: 3, outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s' }
  const onFocus = e => { e.target.style.borderColor = 'rgba(0,240,255,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,240,255,0.07)' }
  const onBlur  = e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }

  return (
    <section id="contact">
      <div className="section-wrap">
        <div className="two-col">

          <div className="reveal" ref={leftRef}>
            <div className="sec-label">04 / Contact</div>
            <h2 className="sec-title">Let's build something <em>great</em>.</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.9, marginBottom: '2rem' }}>
              Open to new opportunities, freelance projects, or just a conversation about technology.
              I'll get back to you within 24-48 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {channels.map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="card"
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 1.2rem', transition: 'all 0.2s', cursor: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,240,255,0.3)'; e.currentTarget.style.transform = 'translateX(5px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.95rem', width: 20, textAlign: 'center' }}>{c.icon}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text)', wordBreak: 'break-all' }}>{c.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="card reveal reveal-d2" ref={rightRef} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'none' }}>
            {[{ k:'name', l:'Name', p:'Your name', t:'text' }, { k:'email', l:'Email', p:'your@email.com', t:'email' }].map(f => (
              <div key={f.k}>
                <label style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '0.4rem' }}>{f.l}</label>
                <input type={f.t} placeholder={f.p} value={form[f.k]} onChange={set(f.k)} style={inp} onFocus={onFocus} onBlur={onBlur} />
              </div>
            ))}
            <div>
              <label style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '0.4rem' }}>Message</label>
              <textarea rows={4} placeholder="Tell me about your project..." value={form.message} onChange={set('message')} style={{ ...inp, resize: 'none' }} onFocus={onFocus} onBlur={onBlur} />
            </div>
            {status === 'error' && (
              <div style={{ fontSize: '0.72rem', color: '#f87171', padding: '0.6rem 0.9rem', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: 3 }}>⚠ {errMsg}</div>
            )}
            <button onClick={handleSubmit} disabled={status === 'sending' || status === 'sent'}
              className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.3rem', opacity: status === 'sending' ? 0.7 : 1, background: status === 'sent' ? '#0aff9d' : undefined }}>
              {status === 'idle'    && 'Send Message →'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent'    && '✓ Message Sent!'}
              {status === 'error'   && 'Send Message →'}
            </button>
            {status === 'sent' && <p style={{ fontSize: '0.72rem', color: 'var(--accent)', marginTop: '-0.5rem' }}>You'll receive an auto-reply shortly. I'll be in touch soon!</p>}
          </div>

        </div>
      </div>
    </section>
  )
}