import OperationsChart from './OperationsChart'
import AlertQueue from './AlertQueue'

export default function BottomSection() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr 1.4fr',
      gap: '14px',
      height: '280px',
      marginBottom: '28px',
    }}>
      {/* Operations — same width as Firewall above */}
      <OperationsChart />

      {/* Alert Queue — spans the remaining 2 columns */}
      <div style={{ gridColumn: '2 / 4' }}>
        <AlertQueue />
      </div>
    </div>
  )
}