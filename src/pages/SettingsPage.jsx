import { Settings } from 'lucide-react'
function PlaceholderPage({ icon: Icon, title, desc }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', animation: 'fadeSlideUp 0.3s ease' }}>
      <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: 'rgba(123,127,219,0.1)', border: '1px solid rgba(123,127,219,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <Icon size={30} color='#7b7fdb' strokeWidth={1.5} />
      </div>
      <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#e8e8f5', letterSpacing: '-0.5px', marginBottom: '8px' }}>{title}</h1>
      <p style={{ color: '#8888aa', fontSize: '14px' }}>{desc}</p>
    </div>
  )
}
export default function SettingsPage() {
  return <PlaceholderPage icon={Settings} title="Settings" desc="Configuration panel coming soon." />
}