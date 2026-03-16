import { alertQueueData } from '../../data/dashboardData'

const statusStyles = {
  green:  { bg: 'rgba(34,197,94,0.15)',   text: '#22c55e',  label: 'High'   },
  red:    { bg: 'rgba(239,68,68,0.15)',    text: '#ef4444',  label: 'Urgent' },
  yellow: { bg: 'rgba(245,158,11,0.15)',   text: '#f59e0b',  label: 'Medium' },
  blue:   { bg: 'rgba(123,127,219,0.15)',  text: '#9fa4e8',  label: 'Low'    },
}

const actionStyles = {
  'In-Progress':  { color: '#9fa4e8' },
  'In-Line-Next': { color: '#c0c3f0' },
  'Completed':    { color: '#22c55e' },
  'Pending':      { color: '#f59e0b' },
}

const colStyle = {
  fontSize: '13px',
  color: '#e8e8f5',
  padding: '11px 12px',
}

const headStyle = {
  fontSize: '12px',
  fontWeight: 600,
  color: '#8888aa',
  padding: '0 12px 10px',
  textAlign: 'left',
  letterSpacing: '0.02em',
}

export default function AlertQueue() {
  return (
    <div style={{
      background: '#11112a',
      border: '1px solid #1e1e38',
      borderRadius: '16px',
      padding: '20px 16px 12px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <h3 style={{
        fontSize: '16px', fontWeight: 700,
        color: '#e8e8f5', marginBottom: '16px', letterSpacing: '-0.3px',
      }}>
        Alert queue
      </h3>

      <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1e1e38' }}>
              <th style={headStyle}>Time</th>
              <th style={headStyle}>Alert ID</th>
              <th style={headStyle}>Severity</th>
              <th style={headStyle}>Status</th>
              <th style={{ ...headStyle, textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {alertQueueData.map((row, i) => {
              const status = statusStyles[row.statusColor] || statusStyles.blue
              const action = actionStyles[row.action] || { color: '#e8e8f5' }

              return (
                <tr
                  key={row.id}
                  style={{
                    borderBottom: i < alertQueueData.length - 1 ? '1px solid #17172e' : 'none',
                    transition: 'background 0.15s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(123,127,219,0.06)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ ...colStyle, color: '#8888aa', fontSize: '12px' }}>{row.time}</td>
                  <td style={{ ...colStyle, fontWeight: 600, color: '#c0c3f0' }}>{row.alertId}</td>
                  <td style={{ ...colStyle, color: '#a0a0cc' }}>{row.severity}</td>
                  <td style={{ ...colStyle }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '3px 10px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: 700,
                      background: status.bg,
                      color: status.text,
                      letterSpacing: '0.02em',
                    }}>
                      {row.status}
                    </span>
                  </td>
                  <td style={{ ...colStyle, textAlign: 'right', fontWeight: 500, color: action.color }}>
                    {row.action}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}