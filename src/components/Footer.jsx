import { Link } from 'react-router-dom'
import { footerLinks } from '../data/siteData'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>AGLF Foundation</h3>
          <p>
            A diaspora-led endowment platform engineered to fund African education
            and innovation for generations.
          </p>
          <Link to="/contribute" className="aglf-btn">
            Become a Visionary Partner
          </Link>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className="footer-links">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>Copyright {new Date().getFullYear()} AGLF Foundation. Built for generational impact.</p>
      </div>
    </footer>
  )
}

export default Footer
