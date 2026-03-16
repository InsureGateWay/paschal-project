import PageHero from '../components/PageHero'
import { esgPillars } from '../data/siteData'

function EsgPage() {
  return (
    <>
      <PageHero
        eyebrow="ESG Framework"
        title="Environmental, Social and Governance Framework"
        description="ICD embeds ESG priorities across strategic planning, operations and portfolio oversight."
      />

      <section className="section-wrap reveal">
        <div className="container split-content">
          <div>
            <p className="page-eyebrow">Walking The Talk</p>
            <h2>Responsible growth through measurable commitments</h2>
          </div>
          <p>
            ICD's ESG approach aligns long-term value creation with practical action.
            It supports resilient decision-making, responsible operations and clear
            governance accountability across the portfolio.
          </p>
        </div>
      </section>

      <section className="section-wrap muted reveal">
        <div className="container">
          <div className="section-header">
            <p className="page-eyebrow">Group Focus on ESG</p>
            <h2>Three integrated pillars</h2>
          </div>

          <div className="pillar-grid">
            {esgPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="pillar-card stagger-card"
                style={{ '--delay': `${index * 0.09}s` }}
              >
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default EsgPage
