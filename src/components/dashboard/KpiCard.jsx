import { useEffect, useRef } from 'react'

export default function KpiCard({ data, delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(12px)'
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, delay)
    return () => clearTimeout(t)
  }, [delay])

  const badgeColor = data.positive
    ? { bg: 'rgba(0,0,0,0.15)', text: '#1a3a1a', border: 'rgba(0,0,0,0.2)' }
    : { bg: 'rgba(0,0,0,0.15)', text: '#3a1a1a', border: 'rgba(0,0,0,0.2)' }

  return (
    <div
      ref={ref}
      style={{
        background: '#a5b7ff',
        border: '1px solid rgba(255,255,255,0.25)',
        borderRadius: '14px',
        padding: '18px 20px 16px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(165,183,255,0.3)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Subtle shine overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '50%',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)',
        pointerEvents: 'none',
        borderRadius: '14px 14px 0 0',
      }} />

      {/* Label */}
      <div style={{
        fontSize: '12px',
        fontWeight: 500,
        color: '#1d1d1f',
        marginBottom: '10px',
        textAlign: 'right',
        letterSpacing: '0.02em',
      }}>
        {data.label}
      </div>

      {/* Value + Badge row */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        gap: '8px',
      }}>
        <span style={{
          fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
          fontWeight: 800,
          color: '#0a0a1a',
          letterSpacing: '-1px',
          lineHeight: 1,
        }}>
          {data.value}
        </span>
        <span style={{
          fontSize: '11px',
          fontWeight: 700,
          color: data.positive ? '#0a3a0a' : '#3a0a0a',
          background: data.positive ? 'rgba(0,80,0,0.15)' : 'rgba(80,0,0,0.15)',
          padding: '2px 7px',
          borderRadius: '20px',
          marginBottom: '3px',
          letterSpacing: '0.02em',
        }}>
          {data.change}
        </span>
      </div>
    </div>
  )
}