import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { getFooter } from '../services/contentService'
import { footerLinks } from '../data/siteData'

const fallbackFooter = {
  brandHeading: 'AGLF Foundation',
  brandBody:
    'A diaspora-led endowment platform engineered to fund African education and innovation for generations.',
  ctaLabel: 'Become a Visionary Partner',
  ctaPath: '/contribute',
  links: footerLinks,
  copyright: `Copyright ${new Date().getFullYear()} AGLF Foundation. Built for generational impact.`,
}

function Footer() {
  const { data: footer, loading: footerLoading } = useContent(getFooter, fallbackFooter)

  if (footerLoading || !footer) {
    return null
  }

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>{footer.brandHeading}</h3>
          <p>{footer.brandBody}</p>
          <Link to={footer.ctaPath || '/contribute'} className="aglf-btn">
            {footer.ctaLabel}
          </Link>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className="footer-links">
            {(footer.links || []).map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>{footer.copyright || `Copyright ${new Date().getFullYear()} AGLF Foundation. Built for generational impact.`}</p>
      </div>
    </footer>
  )
}

export default Footer
