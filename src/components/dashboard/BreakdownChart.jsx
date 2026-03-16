import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from 'recharts'
import { breakdownData } from '../../data/dashboardData'

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: '#13132a', border: '1px solid #2a2a4a',
      borderRadius: '8px', padding: '8px 12px', minWidth: '100px',
    }}>
      {payload.map((p, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          marginBottom: i < payload.length - 1 ? '4px' : 0,
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.color }} />
          <span style={{ fontSize: '12px', color: '#8888aa' }}>{p.name}:</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: p.color }}>{p.value}</span>
        </div>
      ))}
    </div>
  )
}

export default function BreakdownChart() {
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
        Breakdown
      </h3>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={breakdownData}
            margin={{ top: 4, right: 16, left: -24, bottom: 0 }}
          >
            <defs>
              <linearGradient id="lineGradA" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#9fa4e8" />
                <stop offset="100%" stopColor="#c0c3f0" />
              </linearGradient>
              <linearGradient id="lineGradB" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#6668a0" />
                <stop offset="100%" stopColor="#9fa4e8" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e1e38" vertical={false} />
            <XAxis hide />
            <YAxis
              tick={{ fontSize: 9, fill: '#8888aa' }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: 'rgba(123,127,219,0.3)', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Line
              type="monotone"
              dataKey="seriesA"
              name="Series A"
              stroke="#c0c3f0"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, fill: '#c0c3f0', stroke: '#0d0d1a', strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="seriesB"
              name="Series B"
              stroke="#6668a0"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, fill: '#9fa4e8', stroke: '#0d0d1a', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}