import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { getNavigation } from '../services/contentService'
import { navigation as fallbackNav } from '../data/siteData'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { data: navigation } = useContent(getNavigation, fallbackNav)

  const isItemActive = (item) => {
    if (location.pathname === item.path) {
      return true
    }

    if (item.children?.some((child) => child.path === location.pathname)) {
      return true
    }

    return false
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Afriglobal Legacy Foundation" onClick={closeMobileMenu}>
          <img src="/unnamed.png" alt="Afriglobal Legacy Foundation" className="brand-logo" />
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
                <li key={item.path} className={`nav-item ${item.children ? 'has-submenu' : ''}`}>
                  <NavLink
                    to={item.path}
                    className={() => `nav-link ${isItemActive(item) ? 'active' : ''}`}
                    end={item.path === '/'}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>

                  {item.children ? (
                    <ul className="nav-submenu" aria-label={`${item.label} submenu`}>
                      {item.children.map((child) => (
                        <li key={child.path} className="nav-subitem">
                          <NavLink
                            to={child.path}
                            className={({ isActive }) => `nav-sublink ${isActive ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  ) : null}
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
