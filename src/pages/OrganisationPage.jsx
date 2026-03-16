import PageHero from '../components/PageHero'
import { organisationPillars } from '../data/siteData'

function OrganisationPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Organisation"
        title="Our Organisation"
        description="ICD is entrusted with creating wealth and long-term value to the Emirate of Dubai through strategic ownership and disciplined governance."
      />

      <section id="director-message" className="section-wrap reveal">
        <div className="container split-content">
          <div>
            <p className="page-eyebrow">Managing Director's Message</p>
            <h2>Executing with discipline, building with confidence</h2>
          </div>
          <p>
            ICD remains committed to resilient growth by aligning operational
            performance with strategic mandate. We continue to prioritize value
            creation, governance excellence and agility across all portfolio segments.
          </p>
        </div>
      </section>

      <section id="governance" className="section-wrap muted reveal">
        <div className="container">
          <div className="section-header">
            <p className="page-eyebrow">How We Work</p>
            <h2>Governance-driven operating model</h2>
          </div>

          <div className="pillar-grid">
            {organisationPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="pillar-card stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="operating-model" className="section-wrap reveal">
        <div className="container split-content">
          <div>
            <p className="page-eyebrow">Operating Model</p>
            <h2>Integrated oversight across portfolio companies</h2>
          </div>
          <div className="tick-list">
            <p>Performance monitoring through strategic and financial dashboards.</p>
            <p>Capital planning linked to long-term mandate and risk profile.</p>
            <p>Cross-portfolio collaboration to capture operational synergies.</p>
            <p>Value-protection measures guided by strong compliance standards.</p>
          </div>
        </div>
      </section>

      <section id="investment-strategy" className="section-wrap muted reveal">
        <div className="container split-content">
          <div>
            <p className="page-eyebrow">Investment Strategy</p>
            <h2>
              Maximize value over the long term while preserving strategic stability
            </h2>
          </div>
          <p>
            ICD's investment strategy is derived from the mandate to consolidate and
            manage the Government of Dubai's portfolio, while providing strategic
            oversight that drives growth, diversification and sustained long-term
            prosperity.
          </p>
        </div>
      </section>
    </>
  )
}

export default OrganisationPage
