import { useNavigate } from 'react-router-dom'
import { kpiData, userData } from '../../data/dashboardData'
import KpiCard from './KpiCard'

export default function TopSection() {
  const navigate = useNavigate()

  return (
    <div style={{ marginBottom: '24px' }}>

      {/* Row: Hello text + Check Alerts button */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '20px',
       
      }}>
        {/* Greeting */}
        <h1 style={{
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 800,
          color: '#e8e8f5',
          letterSpacing: '-1px',
          lineHeight: 1.1,
        }}>
          Hello {userData.name.toLowerCase()}
        </h1>

        {/* Check Alerts button — top right */}
        <button
          onClick={() => navigate('/check-alerts')}
          style={{
            padding: '9px 20px',
            borderRadius: '10px',
            border: '1px solid #7b7fdb',
            background: 'rgba(123,127,219,0.12)',
            color: '#c0c3f0',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            letterSpacing: '0.01em',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
            marginTop: '4px',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(123,127,219,0.25)'
            e.currentTarget.style.color = '#e8e8f5'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(123,127,219,0.12)'
            e.currentTarget.style.color = '#c0c3f0'
          }}
        >
          Check Alerts
        </button>
      </div>

      {/* KPI Cards row — aligned to the right half */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '14px',
        marginLeft: 'auto',
        width: '65%',
        animation: 'fadeSlideUp 0.3s ease'
      }}>
        {kpiData.map((kpi, i) => (
          <KpiCard key={kpi.id} data={kpi} delay={i * 80} />
        ))}
      </div>
    </div>
  )
}