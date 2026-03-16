import { Link } from 'react-router-dom'
import { heroStats, modelPillars } from '../data/siteData'

function HomePage() {
  return (
    <>
      <section className="hero-section reveal">
        <div className="hero-backdrop" />
        <div className="container hero-content">
          <p className="eyebrow on-dark">A Legacy for the Future</p>
          <h1>
            Building Africa's
            <span> Sovereign Future</span>
          </h1>
          <p>
            Inspired by sovereign wealth funds, we are building a sustainable
            endowment to empower African development through transformational
            education and world-class skill-building initiatives.
          </p>
          <div className="hero-actions">
            <Link className="aglf-btn" to="/contribute">
              Join the Legacy
            </Link>
            <Link className="aglf-btn secondary" to="/about">
              Our Vision
            </Link>
          </div>
        </div>

        <div className="container hero-stats">
          {heroStats.map((item) => (
            <article key={item.label}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-header centered">
            <p className="eyebrow">Our Model</p>
            <h2>
              The Cycle of <span>Perpetual Impact</span>
            </h2>
            <p>
              We aggregate long-term capital, invest globally and activate returns in
              education systems that outlive every grant cycle.
            </p>
          </div>
          <div className="model-grid">
            {modelPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="model-card stagger-card"
                style={{ '--delay': `${index * 0.09}s` }}
              >
                <span className="icon-dot" />
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section callout reveal">
        <div className="container callout-inner">
          <div>
            <p className="eyebrow">Collective Mission</p>
            <h2>
              A legacy forged in common purpose and institutional discipline.
            </h2>
          </div>
          <Link className="aglf-btn" to="/contribute">
            Become a Visionary Partner
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
