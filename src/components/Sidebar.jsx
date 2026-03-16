import { useNavigate, useLocation } from 'react-router-dom'
import { Home, FolderOpen, BarChart2, ArrowUpRight, User, Settings, LogOut } from 'lucide-react'

const navItems = [
  { icon: Home,         path: '/',          label: 'Home' },
  { icon: FolderOpen,   path: '/files',      label: 'Files' },
  { icon: BarChart2,    path: '/analytics',  label: 'Analytics' },
  { icon: ArrowUpRight, path: '/exports',    label: 'Exports' },
  { icon: User,         path: '/profile',    label: 'Profile' },
]

const bottomItems = [
  { icon: Settings, path: '/settings', label: 'Settings' },
  { icon: LogOut,   path: '/',         label: 'Logout' },
]

function SidebarIcon({ icon: Icon, path, label, active }) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(path)}
      title={label}
      style={{
        width: '42px',
        height: '42px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: active ? 'rgba(123,127,219,0.25)' : 'rgba(123,127,219,0.08)',
        color: active ? '#9fa4e8' : '#6668a0',
        transition: 'all 0.2s ease',
        outline: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.15) translateY(-1px)'
        e.currentTarget.style.background = 'rgba(123,127,219,0.22)'
        e.currentTarget.style.color = '#9fa4e8'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1) translateY(0)'
        e.currentTarget.style.background = active ? 'rgba(123,127,219,0.25)' : 'rgba(123,127,219,0.08)'
        e.currentTarget.style.color = active ? '#9fa4e8' : '#6668a0'
      }}
    >
      <Icon size={18} />
    </button>
  )
}

export default function Sidebar() {
  const location = useLocation()

  return (
    <div style={{
      width: '68px',
      background: '#0d0d1a',
      borderRight: '1px solid #1e1e38',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '80px',
      paddingBottom: '16px',
      gap: '10px',
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        {navItems.map(item => (
          <SidebarIcon
            key={item.path}
            {...item}
            active={location.pathname === item.path}
          />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {bottomItems.map(item => (
          <SidebarIcon
            key={item.label}
            {...item}
            active={false}
          />
        ))}
      </div>
    </div>
  )
}