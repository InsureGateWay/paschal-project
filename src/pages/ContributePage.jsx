import { useEffect, useState } from 'react'
import { contributionOptions } from '../data/siteData'

const AMOUNTS = [100, 500, 1000]
const TABS = [
  { id: 'one-time', label: 'One-Time' },
  { id: 'monthly', label: 'Monthly' },
  { id: 'named', label: 'Named Fund' },
]

function ContributePage() {
  const [activeTab, setActiveTab] = useState('one-time')
  const [activeAmount, setActiveAmount] = useState(500)
  useEffect(() => { document.title = 'AGLF Foundation | Contribute' }, [])
  const [customAmount, setCustomAmount] = useState('')

  return (
    <>
      {/* Hero */}
      <section className="contrib-hero">
        <div className="container">
          <div className="contrib-hero-inner">
            <span className="contrib-eyebrow">Strategic Philanthropy</span>
            <h1 className="contrib-h1">
              Your Contribution.<br />
              <em>Our Collective Legacy.</em>
            </h1>
            <p className="contrib-sub">
              By channelling global capital into a self-sustaining investment vehicle, we ensure
              that funding for African education is never subject to political or economic volatility.
            </p>
          </div>
        </div>
      </section>

      {/* Main: left content + right sticky form */}
      <section className="section contrib-main">
        <div className="container contrib-grid">

          {/* Left: 7 cols */}
          <div className="contrib-body">

            {/* Permanent asset class */}
            <div className="contrib-block">
              <h3 className="contrib-block-title">A Permanent Asset Class</h3>
              <p className="contrib-block-text">
                Unlike traditional aid which depletes, your contribution is added to our corpus.
                We only spend the returns, meaning your gift today funds a scholar 100 years from now.
              </p>
              <div className="contrib-fund-cards">
                <div className="contrib-fund-card">
                  <h4>General Fund</h4>
                  <p>Supports broad scholarships and operational oversight via institutional investment partners.</p>
                </div>
                <div className="contrib-fund-card">
                  <h4>Specific Fund</h4>
                  <p>Targeted activities in alignment with our mission across 54 nations.</p>
                </div>
              </div>
            </div>

            {/* Named foundation funds — dark card */}
            <div className="contrib-named">
              <h3>Named Foundation Funds</h3>
              <p>
                For contributions seeded at $20,000 or more, donors can elect to create a
                &#8220;Named Scholarship&#8221; (e.g., The Oben Legacy Scholarship) to honor
                individuals or families.
              </p>
              <div className="contrib-named-threshold">
                <span className="contrib-named-amount">$20,000</span>
                <span className="contrib-named-label">Minimum seed for a donor-named vehicle.</span>
              </div>
            </div>

            {/* Contribution options */}
            <div className="contrib-options">
              {contributionOptions.map((item, i) => (
                <article key={item.title} className="contrib-option-item">
                  <span className="contrib-option-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Tax disclosure */}
            <div className="contrib-tax">
              <h4>Tax Disclosure</h4>
              <p>
                AGLF is a registered 501(c)(3) organisation. Assets are distributed exclusively
                for exempt purposes within the meaning of section 501(c)(3) of the Internal
                Revenue Code.
              </p>
            </div>

          </div>

          {/* Right: sticky donation card */}
          <div className="contrib-form-col">
            <div className="contrib-form-card">
              <h3>Make an Impact</h3>

              {/* Tabs */}
              <div className="contrib-tabs" role="group" aria-label="Contribution frequency">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`contrib-tab${activeTab === tab.id ? ' contrib-tab--active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Amount grid */}
              <div className="contrib-amounts">
                {AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className={`contrib-amount-btn${activeAmount === amt ? ' contrib-amount-btn--active' : ''}`}
                    onClick={() => { setActiveAmount(amt); setCustomAmount('') }}
                  >
                    ${amt.toLocaleString()}
                  </button>
                ))}
              </div>

              <input
                type="number"
                placeholder="Other Amount (USD)"
                className="contrib-custom-input"
                value={customAmount}
                min="1"
                onChange={(e) => { setCustomAmount(e.target.value); setActiveAmount(null) }}
              />

              <button type="button" className="contrib-pay-btn">
                Continue to Payment
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <div className="contrib-secure">
                <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
                </svg>
                Secure Institutional-Grade Encryption
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="contrib-stats">
        <div className="container">
          <h2 className="contrib-stats-title">Your Stewardship at Work.</h2>
          <div className="contrib-stats-grid">
            <div>
              <p className="contrib-stat-value">100%</p>
              <p className="contrib-stat-label">Of principal remains preserved.</p>
            </div>
            <div>
              <p className="contrib-stat-value">GAAP</p>
              <p className="contrib-stat-label">Financial records and auditing standards.</p>
            </div>
            <div>
              <p className="contrib-stat-value">5%</p>
              <p className="contrib-stat-label">Max annual distribution for impact.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContributePage
