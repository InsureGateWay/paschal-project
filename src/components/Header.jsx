import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '../data/siteData'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="AGLF Foundation" onClick={closeMobileMenu}>
          <span className="brand-mark">A</span>
          <span className="brand-text">AGLF Foundation</span>
        </Link>

        <button
          type="button"
          className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((state) => !state)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-navigation ${mobileMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <ul className="nav-list">
            {navigation.map((item) => {
              return (
                <li key={item.path} className="nav-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    end={item.path === '/'}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
