import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ShieldCheck } from 'lucide-react'

export default function CheckAlertsPage() {
  const navigate = useNavigate()

  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0',
      animation: 'fadeSlideUp 0.35s ease',
    }}>
      {/* Glow ring */}
      <div style={{
        width: '100px', height: '100px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px',
        border: '1px solid rgba(34,197,94,0.2)',
      }}>
        <ShieldCheck size={44} color='#22c55e' strokeWidth={1.5} />
      </div>

      <h1 style={{
        fontSize: '1.9rem', fontWeight: 800,
        color: '#e8e8f5', letterSpacing: '-0.5px',
        marginBottom: '8px',
      }}>
        All Clear
      </h1>

      <p style={{
        color: '#8888aa', fontSize: '14px',
        marginBottom: '32px', textAlign: 'center', maxWidth: '280px',
        lineHeight: 1.6,
      }}>
        No active alerts at this time. All systems are operating normally.
      </p>

      {/* Status pills */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '36px' }}>
        {[
          { label: 'Firewall', status: 'Active' },
          { label: 'Auth',     status: 'Stable' },
          { label: 'DB',       status: 'Healthy' },
        ].map(item => (
          <div key={item.label} style={{
            padding: '6px 14px',
            borderRadius: '20px',
            background: 'rgba(34,197,94,0.08)',
            border: '1px solid rgba(34,197,94,0.2)',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            <div style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#22c55e',
              animation: 'pulse 2s ease infinite',
            }} />
            <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: 500 }}>
              {item.label}
            </span>
            <span style={{ fontSize: '11px', color: '#16a34a' }}>
              {item.status}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/')}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '11px 24px', borderRadius: '12px',
          background: 'rgba(123,127,219,0.12)',
          border: '1px solid #2a2a4a',
          color: '#9fa4e8', cursor: 'pointer',
          fontSize: '14px', fontWeight: 600,
          transition: 'all 0.2s ease',
          letterSpacing: '0.01em',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(123,127,219,0.22)'
          e.currentTarget.style.borderColor = '#7b7fdb'
          e.currentTarget.style.color = '#e8e8f5'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(123,127,219,0.12)'
          e.currentTarget.style.borderColor = '#2a2a4a'
          e.currentTarget.style.color = '#9fa4e8'
        }}
      >
        <ArrowLeft size={15} /> Back to Dashboard
      </button>
    </div>
  )
}