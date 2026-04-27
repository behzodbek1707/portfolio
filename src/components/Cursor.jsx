import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef()
  const trailRef = useRef()
  const pos = useRef({ mx: 0, my: 0, tx: 0, ty: 0 })
  const raf = useRef()

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }
    const animate = () => {
      const p = pos.current
      p.tx += (p.mx - p.tx) * 0.1
      p.ty += (p.my - p.ty) * 0.1
      if (trailRef.current) {
        trailRef.current.style.left = p.tx + 'px'
        trailRef.current.style.top  = p.ty + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }
    const onEnter = () => {
      if (dotRef.current)   dotRef.current.style.transform = 'translate(-50%,-50%) scale(2.5)'
      if (trailRef.current) trailRef.current.style.transform = 'translate(-50%,-50%) scale(2)'
    }
    const onLeave = () => {
      if (dotRef.current)   dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
      if (trailRef.current) trailRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
    }
    document.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)
    const els = document.querySelectorAll('a, button, [data-hover]')
    els.forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave) })
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      els.forEach(el => { el.removeEventListener('mouseenter', onEnter); el.removeEventListener('mouseleave', onLeave) })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{ position:'fixed', pointerEvents:'none', zIndex:9999, width:8, height:8, borderRadius:'50%', background:'#00f0ff', transform:'translate(-50%,-50%)', transition:'transform 0.15s', boxShadow:'0 0 8px #00f0ff, 0 0 20px rgba(0,240,255,0.5)', mixBlendMode:'screen' }} />
      <div ref={trailRef} style={{ position:'fixed', pointerEvents:'none', zIndex:9998, width:32, height:32, borderRadius:'50%', border:'1px solid rgba(0,240,255,0.5)', transform:'translate(-50%,-50%)', transition:'transform 0.2s' }} />
    </>
  )
}
