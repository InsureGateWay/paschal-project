import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { portfolioSectors } from '../data/siteData'

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Our Portfolio"
        description="A diversified and strategic portfolio supporting Dubai's dynamic economy."
      />

      <section className="section-wrap reveal">
        <div className="container">
          <div className="section-header">
            <p className="page-eyebrow">Sector Mix</p>
            <h2>Built for resilience and long-term growth</h2>
          </div>

          <div className="portfolio-grid">
            {portfolioSectors.map((sector, index) => (
              <article
                key={sector.key}
                className="portfolio-card stagger-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <h3>{sector.title}</h3>
                <p>{sector.blurb}</p>
                <Link to={sector.path}>View details</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap muted reveal">
        <div className="container split-content">
          <div>
            <p className="page-eyebrow">Portfolio Approach</p>
            <h2>Strategic capital with active ownership discipline</h2>
          </div>
          <div className="tick-list">
            <p>Diversify across complementary sectors and market cycles.</p>
            <p>Protect and strengthen critical strategic assets.</p>
            <p>Scale through governance-led and value-focused oversight.</p>
            <p>Support long-term economic priorities for Dubai.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioPage
