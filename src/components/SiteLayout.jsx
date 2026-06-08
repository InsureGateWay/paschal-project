import { useEffect, useContext } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ContentLoadingContext } from '../context/ContentLoadingContext'
import LoadingScreen from './LoadingScreen'
import Footer from './Footer'
import Header from './Header'

function SiteLayout() {
  const location = useLocation()
  const { isReady } = useContext(ContentLoadingContext) || { isReady: false }

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
    <div className="site-shell">
      <Header />
      <main className="site-main" aria-busy={!isReady}>
        <Outlet />
      </main>
      <Footer />

      {!isReady && <LoadingScreen />}

      <button type="button" className="chat-orb" aria-label="Open support chat">
        <span className="chat-orb-dot" />
      </button>
    </div>
  )
}

export default SiteLayout
