import { cycleSteps, modelPillars } from '../data/siteData'

function ModelPage() {
  useEffect(() => { document.title = 'AGLF Foundation | Our Model' }, [])
  return (
    <>
      <section className="page-banner">
        <div className="container banner-inner centered">
          <p className="eyebrow">Our Model</p>
          <h1>
            Sustainable Funding <span>Blueprint.</span>
          </h1>
          <p>
            We combine endowment returns, socially responsible investments, and
            diversified partnerships to finance education initiatives over the long term.
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
          <h2>Operational Cycle for Lasting Impact</h2>
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
            Data-driven monitoring and evaluation allows us to refine programs,
            improve outcomes, and strengthen stakeholder trust each cycle.
          </p>
        </div>
      </section>
    </>
  )
}

export default ModelPage
