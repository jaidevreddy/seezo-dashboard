import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { firewallData } from '../../data/dashboardData'

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: '#13132a', border: '1px solid #2a2a4a',
      borderRadius: '8px', padding: '8px 12px',
    }}>
      <div style={{ fontSize: '11px', color: '#8888aa', marginBottom: '2px' }}>{label}</div>
      <div style={{ fontSize: '14px', fontWeight: 700, color: '#9fa4e8' }}>{payload[0].value}</div>
    </div>
  )
}

export default function FirewallChart() {
  return (
    <div style={{
      background: '#11112a',
      border: '1px solid #1e1e38',
      borderRadius: '16px',
      padding: '20px 16px 12px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h3 style={{
        fontSize: '16px', fontWeight: 700,
        color: '#e8e8f5', marginBottom: '16px', letterSpacing: '-0.3px',
      }}>
        Firewall Activity
      </h3>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={firewallData} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
            <defs>
              <linearGradient id="firewallGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#7b7fdb" stopOpacity={0.5} />
                <stop offset="75%"  stopColor="#7b7fdb" stopOpacity={0.08} />
                <stop offset="100%" stopColor="#7b7fdb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e1e38" vertical={false} />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 9, fill: '#8888aa' }}
              tickLine={false}
              axisLine={false}
              interval={5}
            />
            <YAxis
              tick={{ fontSize: 9, fill: '#8888aa' }}
              tickLine={false}
              axisLine={false}
              ticks={[0, 100, 200, 400]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#7b7fdb', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#7b7fdb"
              strokeWidth={2}
              fill="url(#firewallGrad)"
              dot={false}
              activeDot={{ r: 4, fill: '#9fa4e8', stroke: '#0d0d1a', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}