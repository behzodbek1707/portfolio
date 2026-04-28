export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container)',
          marginInline: 'auto',
          paddingInline: 'var(--gutter)',
          paddingBlock: '1.8rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.68rem',
          color: 'var(--muted)',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span>&lt;behzodbek.dev/&gt;</span>
        <span style={{ color: 'var(--accent)' }}>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}