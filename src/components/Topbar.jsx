import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bell } from 'lucide-react'
import { notificationsData, userData } from '../data/dashboardData'

export default function Topbar() {
  const navigate = useNavigate()
  const [notifOpen, setNotifOpen] = useState(false)
  const notifRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div style={{
      height: '60px',
      background: '#0d0d1a',
      borderBottom: '1px solid #1e1e38',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px',
      flexShrink: 0,
      position: 'relative',
      zIndex: 50,
    }}>

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src="/logo.png"
          alt="Seezo"
          style={{
            height: '100px',
            width: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }} ref={notifRef}>

        {/* Bell */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setNotifOpen(v => !v)}
            style={{
              width: '36px', height: '36px', borderRadius: '50%',
              border: '1px solid #2a2a4a',
              background: notifOpen ? 'rgba(123,127,219,0.15)' : 'transparent',
              color: '#9fa4e8', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            <Bell size={16} />
            <span style={{
              position: 'absolute', top: '6px', right: '6px',
              width: '7px', height: '7px', borderRadius: '50%',
              background: '#ef4444', border: '1.5px solid #0d0d1a',
            }} />
          </button>

          {/* Notification dropdown */}
          {notifOpen && (
            <div style={{
              position: 'absolute', top: '46px', right: 0,
              width: '300px',
              background: '#13132a',
              border: '1px solid #2a2a4a',
              borderRadius: '12px',
              padding: '12px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              animation: 'fadeSlideUp 0.2s ease',
              zIndex: 100,
            }}>
              <div style={{
                fontSize: '12px', fontWeight: 600, color: '#8888aa',
                marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>
                Notifications
              </div>
              {notificationsData.map(n => (
                <div
                  key={n.id}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                    padding: '8px', borderRadius: '8px',
                    cursor: 'pointer', transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(123,127,219,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: n.dot, marginTop: '5px', flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontSize: '13px', color: '#e8e8f5', lineHeight: 1.4 }}>{n.text}</div>
                    <div style={{ fontSize: '11px', color: '#8888aa', marginTop: '2px' }}>{n.time}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Avatar */}
        <button
          onClick={() => navigate('/profile')}
          style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #9fa4e8, #4a4f9a)',
            border: '2px solid #2a2a4a',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: 700, color: '#fff',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          {userData.name.charAt(0)}
        </button>
      </div>
    </div>
  )
}