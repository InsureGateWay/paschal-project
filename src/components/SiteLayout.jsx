import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { useContentLoadingContext } from '../context/ContentLoadingContext.jsx'

function SiteLayout() {
  const location = useLocation()
  const { isLoading } = useContentLoadingContext()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const target = document.getElementById(id)

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return (
    <div className={`site-shell${isLoading ? ' site-shell--loading' : ''}`} aria-busy={isLoading}>
      {isLoading && (
        <div className="loading-overlay" aria-live="polite">
          <div className="loading-spinner" aria-hidden="true" />
          <p>Loading content…</p>
        </div>
      )}

      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />

      <button type="button" className="chat-orb" aria-label="Open support chat">
        <span className="chat-orb-dot" />
      </button>
    </div>
  )
}

export default SiteLayout
