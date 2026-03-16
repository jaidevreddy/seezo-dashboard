import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import FilesPage from './pages/FilesPage'
import AnalyticsPage from './pages/AnalyticsPage'
import ExportsPage from './pages/ExportsPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import CheckAlertsPage from './pages/CheckAlertsPage'

function AnimatedRoutes() {
  const location = useLocation()
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.remove('page-enter')
      void ref.current.offsetWidth
      ref.current.classList.add('page-enter')
    }
  }, [location.pathname])

  return (
    <div ref={ref} className="page-enter flex-1 overflow-y-auto overflow-x-hidden">
      <Routes location={location}>
        <Route path="/"             element={<Dashboard />} />
        <Route path="/files"        element={<FilesPage />} />
        <Route path="/analytics"    element={<AnalyticsPage />} />
        <Route path="/exports"      element={<ExportsPage />} />
        <Route path="/profile"      element={<ProfilePage />} />
        <Route path="/settings"     element={<SettingsPage />} />
        <Route path="/check-alerts" element={<CheckAlertsPage />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', background: '#0d0d1a', overflow: 'hidden' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar />
        <AnimatedRoutes />
      </div>
    </div>
  )
}