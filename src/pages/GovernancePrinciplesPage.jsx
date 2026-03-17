import { Link } from 'react-router-dom'

const gappItems = [
  {
    code: 'GAPP 1',
    title: 'Legal Framework',
    detail:
      'AGLF ensures legal soundness through its 501(c)(3) status and transparent operating relationships with its designated financial service partners.',
  },
  {
    code: 'GAPP 4',
    title: 'Funding and Spending',
    detail:
      'Total assets under management and annual disbursements are disclosed in line with bylaws and applicable law.',
  },
  {
    code: 'GAPP 11',
    title: 'Annual Reporting',
    detail:
      'Financial records are maintained through institutional systems and presented periodically according to GAAP-aligned standards.',
  },
  {
    code: 'GAPP 19',
    title: 'Investment Style',
    detail:
      'Investment decisions prioritize long-term, risk-adjusted returns on clear economic and financial grounds.',
  },
]

function GovernancePrinciplesPage() {
  return (
    <>
      <section className="gov-v2-hero reveal">
        <div className="gov-v2-hero-bg" aria-hidden="true" />

        <div className="container gov-v2-hero-inner">
          <p className="eyebrow on-dark">Transparency and Accountability</p>
          <h1>
            The Santiago <br />
            <span>Framework.</span>
          </h1>
          <p className="gov-v2-hero-lead">
            AGLF operates under a rigorous governance framework inspired by the
            Santiago Principles (GAPP), ensuring institutional-grade stewardship
            of foundation assets.
          </p>
        </div>
      </section>

      <section className="section gov-v2-legal reveal">
        <div className="container gov-v2-legal-grid">
          <div className="gov-v2-legal-copy">
            <h2>
              Legally Sound. <br />
              Exclusively Charitable.
            </h2>
            <p>
              The foundation is a non-profit organization incorporated under the
              laws of the State of Delaware. Its purpose is exclusively
              charitable and educational, aligned with Section 501(c)(3) of the
              Internal Revenue Code.
            </p>

            <div className="gov-v2-badges">
              <span>Delaware File: 3936179</span>
              <span>Non-Stock Corporation</span>
            </div>
          </div>

          <div className="gov-v2-legal-metrics">
            <article>
              <h3>Zero</h3>
              <p className="gov-v2-metric-label">Private Inurement</p>
              <p className="gov-v2-metric-detail">
                No net earnings benefit any private individual.
              </p>
            </article>

            <article>
              <h3>100%</h3>
              <p className="gov-v2-metric-label">Asset Protection</p>
              <p className="gov-v2-metric-detail">
                Assets are distributed solely for exempt purposes on
                dissolution.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section gov-v2-gapp reveal">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Governance Application</p>
            <h2>
              GAPP <span>Implementation.</span>
            </h2>
            <p>
              How AGLF applies generally accepted principles and practices in
              law, funding transparency, reporting, and investment governance.
            </p>
          </div>

          <div className="gov-v2-gapp-list">
            {gappItems.map((item, index) => (
              <article
                key={item.code}
                className="gov-v2-gapp-item stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <div>
                  <p className="gov-v2-gapp-code">
                    {item.code}: {item.title}
                  </p>
                </div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gov-v2-ethics reveal">
        <div className="container gov-v2-ethics-grid">
          <div>
            <h2>
              Commitment to <br />
              <span>Ethical Conduct.</span>
            </h2>

            <div className="gov-v2-ethics-points">
              <article>
                <h3>Conflict of Interest</h3>
                <p>
                  Board members and staff disclose potential conflicts and
                  follow strict procedures designed to prevent self-dealing.
                </p>
              </article>

              <article>
                <h3>Internal Controls</h3>
                <p>
                  Financial management includes robust controls to safeguard
                  foundation assets and maintain donor confidence.
                </p>
              </article>
            </div>
          </div>

          <div className="gov-v2-glass">
            <h3>Governance of Impact</h3>
            <p>
              The foundation maintains documented scholarship case histories,
              including award purpose, recipient eligibility, and selection
              criteria for compliance and impact tracking.
            </p>

            <div className="gov-v2-glass-grid">
              <article>
                <p className="gov-v2-glass-label">Independent Audit</p>
                <p>
                  Internal and external audits are performed according to
                  international auditing standards.
                </p>
              </article>

              <article>
                <p className="gov-v2-glass-label">Standard of Removal</p>
                <p>
                  Criminality or significant moral lapse constitutes grounds
                  for governance removal and disciplinary action.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section gov-v2-links reveal">
        <div className="container gov-v2-links-inner">
          <h2>Stewardship for the Next Century.</h2>
          <div className="gov-v2-link-row">
            <Link to="/news-insights">Santiago Compliance</Link>
            <span>|</span>
            <Link to="/about">Bylaws Overview</Link>
            <span>|</span>
            <Link to="/contact">Governance Contact</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default GovernancePrinciplesPage
