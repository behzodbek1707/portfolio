export default function Footer() {
  return (
    <footer style={{ position: 'relative', zIndex: 10, borderTop: '1px solid var(--border)', padding: '1.8rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: 'var(--muted)' }}>
      <span>&lt;behzodbek.dev/&gt;</span>
      <span style={{ color: 'var(--accent)' }}>© {new Date().getFullYear()}</span>
    </footer>
  )
}
