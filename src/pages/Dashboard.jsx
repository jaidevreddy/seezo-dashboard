import TopSection from '../components/dashboard/TopSection'
import GraphSection from '../components/dashboard/GraphSection'
import BottomSection from '../components/dashboard/BottomSection'

export default function Dashboard() {
  return (
    <div style={{
      padding: '28px 28px 0 28px',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
    }}>
      <TopSection />
      <GraphSection />
      <BottomSection />
    </div>
  )
}