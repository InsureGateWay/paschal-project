import { cycleSteps, modelPillars } from '../data/siteData'

function ModelPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container banner-inner centered">
          <p className="eyebrow">Our Model</p>
          <h1>
            Our Sovereign <span>Wealth Blueprint.</span>
          </h1>
          <p>
            Charity creates dependency. Endowments create sovereignty. We apply the
            same discipline as a national wealth fund to solve Africa's education
            deficit permanently.
          </p>
        </div>
      </section>

      <section className="section muted">
        <div className="container model-grid">
          {modelPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="model-card stagger-card"
              style={{ '--delay': `${index * 0.08}s` }}
            >
              <span className="icon-dot" />
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container cycle-board reveal">
          <h2>The Cycle of Perpetual Impact</h2>
          <div className="cycle-steps">
            {cycleSteps.map((step) => (
              <article key={step.title}>
                <div className="cycle-node" />
                <h3>{step.title}</h3>
                <p>{step.subtitle}</p>
              </article>
            ))}
          </div>
          <p className="cycle-note">
            Unlike traditional non-profits, our principal investment remains
            untouched, funding Africa's future through interest alone.
          </p>
        </div>
      </section>
    </>
  )
}

export default ModelPage
