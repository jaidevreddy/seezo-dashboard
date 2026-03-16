import { useState } from 'react'

const HOURS = ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22']
const DAYS  = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// Deterministic pseudo-random data seeded by position
function generateHeatmapData() {
  const data = []
  const seed = [
    [0.1, 0.1, 0.2, 0.5, 0.8, 0.9, 0.7, 0.6, 0.8, 0.7, 0.4, 0.2],
    [0.1, 0.2, 0.3, 0.6, 0.9, 1.0, 0.8, 0.7, 0.9, 0.8, 0.5, 0.2],
    [0.1, 0.1, 0.2, 0.4, 0.7, 0.8, 0.6, 0.5, 0.7, 0.6, 0.3, 0.1],
    [0.2, 0.2, 0.3, 0.5, 0.8, 0.9, 0.7, 0.6, 0.8, 0.7, 0.4, 0.2],
    [0.1, 0.1, 0.2, 0.6, 0.9, 1.0, 0.9, 0.8, 0.9, 0.8, 0.5, 0.3],
    [0.0, 0.1, 0.1, 0.2, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.1, 0.1],
    [0.0, 0.1, 0.1, 0.2, 0.2, 0.3, 0.2, 0.2, 0.2, 0.2, 0.1, 0.0],
  ]
  for (let d = 0; d < DAYS.length; d++) {
    for (let h = 0; h < HOURS.length; h++) {
      const intensity = seed[d][h]
      data.push({ day: d, hour: h, intensity, value: Math.round(intensity * 100) })
    }
  }
  return data
}

const heatmapData = generateHeatmapData()

function getColor(intensity) {
  if (intensity === 0)      return 'rgba(123,127,219,0.04)'
  if (intensity < 0.2)      return 'rgba(123,127,219,0.12)'
  if (intensity < 0.4)      return 'rgba(123,127,219,0.25)'
  if (intensity < 0.6)      return 'rgba(123,127,219,0.45)'
  if (intensity < 0.75)     return 'rgba(159,164,232,0.65)'
  if (intensity < 0.9)      return 'rgba(192,195,240,0.82)'
  return 'rgba(232,232,245,0.95)'
}

function getBorderColor(intensity) {
  if (intensity > 0.85) return 'rgba(232,232,245,0.4)'
  if (intensity > 0.6)  return 'rgba(159,164,232,0.25)'
  return 'transparent'
}

export default function OperationsChart() {
  const [hovered, setHovered] = useState(null)

  const CELL_W = 13
  const CELL_H = 13
  const GAP    = 3
  const LEFT   = 28
  const TOP    = 16

  const svgW = LEFT + HOURS.length * (CELL_W + GAP)
  const svgH = TOP  + DAYS.length  * (CELL_H + GAP) + 20

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
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#e8e8f5', letterSpacing: '-0.3px' }}>
          Operations
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '10px', color: '#555580' }}>Low</span>
          {[0.08, 0.22, 0.42, 0.62, 0.80, 0.95].map((v, i) => (
            <div key={i} style={{
              width: '10px', height: '10px', borderRadius: '3px',
              background: getColor(v),
              border: `1px solid ${getBorderColor(v)}`,
            }} />
          ))}
          <span style={{ fontSize: '10px', color: '#555580' }}>High</span>
        </div>
      </div>

      {/* Hovered info pill */}
      <div style={{
        height: '20px',
        marginBottom: '6px',
        display: 'flex',
        alignItems: 'center',
      }}>
        {hovered ? (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(123,127,219,0.12)',
            border: '1px solid #2a2a4a',
            borderRadius: '20px',
            padding: '2px 10px',
            fontSize: '11px',
            color: '#c0c3f0',
            animation: 'fadeSlideUp 0.15s ease',
          }}>
            <div style={{
              width: '7px', height: '7px', borderRadius: '2px',
              background: getColor(hovered.intensity),
            }} />
            <span style={{ color: '#8888aa' }}>{DAYS[hovered.day]}</span>
            <span>{HOURS[hovered.hour]}:00</span>
            <span style={{ fontWeight: 700, color: hovered.intensity > 0.7 ? '#ef4444' : '#9fa4e8' }}>
              {hovered.value}% load
            </span>
          </div>
        ) : (
          <span style={{ fontSize: '11px', color: '#555580' }}>Hover a cell to inspect</span>
        )}
      </div>

      {/* Heatmap SVG */}
      <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center' }}>
        <svg
          width="100%"
          viewBox={`0 0 ${svgW} ${svgH}`}
          preserveAspectRatio="xMidYMid meet"
          style={{ overflow: 'visible' }}
        >
          {/* Day labels */}
          {DAYS.map((day, d) => (
            <text
              key={day}
              x={LEFT - 4}
              y={TOP + d * (CELL_H + GAP) + CELL_H / 2 + 1}
              textAnchor="end"
              dominantBaseline="middle"
              fill="#555580"
              fontSize={7}
            >
              {day}
            </text>
          ))}

          {/* Hour labels */}
          {HOURS.map((hr, h) => (
            <text
              key={hr}
              x={LEFT + h * (CELL_W + GAP) + CELL_W / 2}
              y={svgH - 4}
              textAnchor="middle"
              fill="#555580"
              fontSize={6.5}
            >
              {hr}
            </text>
          ))}

          {/* Cells */}
          {heatmapData.map((cell, idx) => {
            const cx = LEFT + cell.hour * (CELL_W + GAP)
            const cy = TOP  + cell.day  * (CELL_H + GAP)
            const isHovered = hovered?.day === cell.day && hovered?.hour === cell.hour

            return (
              <rect
                key={idx}
                x={cx} y={cy}
                width={CELL_W} height={CELL_H}
                rx={3}
                fill={getColor(cell.intensity)}
                stroke={isHovered ? '#9fa4e8' : getBorderColor(cell.intensity)}
                strokeWidth={isHovered ? 1.2 : 0.8}
                style={{
                  cursor: 'pointer',
                  transition: 'fill 0.15s ease, stroke 0.15s ease',
                  transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                  transformOrigin: `${cx + CELL_W / 2}px ${cy + CELL_H / 2}px`,
                }}
                onMouseEnter={() => setHovered(cell)}
                onMouseLeave={() => setHovered(null)}
              />
            )
          })}
        </svg>
      </div>
    </div>
  )
}