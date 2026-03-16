import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, Cell,
} from 'recharts'
import { alertVolumeData } from '../../data/dashboardData'
import { useState } from 'react'

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

function CustomBar(props) {
  const { x, y, width, height, fill, hovered } = props
  const radius = 6
  return (
    <g>
      <defs>
        <linearGradient id={`barGrad-${x}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={hovered ? '#c0c3f0' : '#9fa4e8'} stopOpacity={1} />
          <stop offset="100%" stopColor={hovered ? '#7b7fdb' : '#3a3f8a'} stopOpacity={0.4} />
        </linearGradient>
      </defs>
      <path
        d={`M${x},${y + radius} Q${x},${y} ${x + radius},${y} L${x + width - radius},${y} Q${x + width},${y} ${x + width},${y + radius} L${x + width},${y + height} L${x},${y + height} Z`}
        fill={`url(#barGrad-${x})`}
      />
    </g>
  )
}

export default function AlertVolumeChart() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

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
        Alert Volume
      </h3>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={alertVolumeData}
            margin={{ top: 4, right: 4, left: -24, bottom: 0 }}
            barCategoryGap="30%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#1e1e38" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 10, fill: '#8888aa' }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fontSize: 9, fill: '#8888aa' }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(123,127,219,0.06)' }}
            />
            <Bar
              dataKey="value"
              shape={(props) => (
                <CustomBar {...props} hovered={props.index === hoveredIndex} />
              )}
              onMouseEnter={(_, index) => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {alertVolumeData.map((entry, index) => (
                <Cell key={index} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}