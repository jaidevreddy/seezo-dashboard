import FirewallChart from './FirewallChart'
import AlertVolumeChart from './AlertVolumeChart'
import BreakdownChart from './BreakdownChart'

export default function GraphSection() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr 1.4fr',
      gap: '14px',
      height: '280px',
      marginBottom: '14px',
    }}>
      <FirewallChart />
      <AlertVolumeChart />
      <BreakdownChart />
    </div>
  )
}