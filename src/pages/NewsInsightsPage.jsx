import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const insightFilters = [
  'All Insights',
  'Press Releases',
  'Model Updates',
  'Impact Reports',
]

const featuredInsight = {
  tag: 'Featured Insight',
  date: 'Dec 2024',
  title: 'The Santiago Advantage: Why We Chose Sovereign-Scale Governance.',
  detail:
    'An in-depth look at how AGLF applies sovereign governance principles to protect operational independence, preserve the principal corpus, and sustain generational education funding.',
  image:
    'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&w=1600&q=80',
}

const insightCards = [
  {
    type: 'Press Releases',
    title: 'AGLF Formalizes Founding Operating Agreement with Strategic Partners.',
    detail:
      'Founding partners ratified the institutional framework for governance, stewardship, and long-term African education financing.',
    image:
      'https://images.unsplash.com/photo-1557426272-fc759fbb7a8d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    type: 'Model Updates',
    title: 'Defining the Named Scholarship Vehicle: A USD 20,000 Legacy Threshold.',
    detail:
      'A practical guide to how donor-named scholarship structures are seeded and governed to fund scholars over decades.',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    type: 'Impact Reports',
    title: 'Fiduciary Discipline in Practice: Implementing the 5% Spending Rule.',
    detail:
      'How AGLF caps annual distributions to preserve the endowment while maintaining measurable impact in target communities.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
  },
  {
    type: 'Model Updates',
    title: 'Annual Controls Brief: GAAP Reporting and Transaction Audit Protocols.',
    detail:
      'A summary of the compliance architecture used to track disbursements, validate recipients, and maintain donor confidence.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  },
]

function NewsInsightsPage() {
  useEffect(() => { document.title = 'AGLF Foundation | News & Insights' }, [])
  const [activeFilter, setActiveFilter] = useState('All Insights')

  const filteredInsights = useMemo(() => {
    if (activeFilter === 'All Insights') {
      return insightCards
    }

    return insightCards.filter((item) => item.type === activeFilter)
  }, [activeFilter])

  const handleSubscribe = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <section className="news-v2-hero reveal">
        <div className="container">
          <div className="news-v2-hero-inner">
            <p className="eyebrow on-dark">Knowledge Center</p>
            <h1>
              News and <br />
              <span>Insights.</span>
            </h1>
            <p>
              Exploring the intersection of institutional capital, educational innovation,
              and long-horizon development strategy across the African continent.
            </p>
          </div>
        </div>
      </section>

      <section className="news-v2-filters" aria-label="Filter insights by category">
        <div className="container news-v2-filter-row">
          <span className="news-v2-filter-label">Filter By</span>
          <div className="news-v2-filter-chips">
            {insightFilters.map((item) => (
              <button
                key={item}
                type="button"
                className={`news-v2-chip ${activeFilter === item ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section news-v2-featured">
        <div className="container">
          <article className="news-v2-featured-grid reveal">
            <div className="news-v2-featured-media">
              <img src={featuredInsight.image} alt={featuredInsight.title} className="news-v2-featured-image" />
            </div>

            <div className="news-v2-featured-copy">
              <p className="news-v2-meta">
                {featuredInsight.tag} - {featuredInsight.date}
              </p>
              <h2>{featuredInsight.title}</h2>
              <p>{featuredInsight.detail}</p>
              <Link to="/our-model" className="news-v2-read-link">
                Read Analysis <span aria-hidden="true"> </span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section news-v2-grid-wrap">
        <div className="container">
          <div className="news-v2-grid">
            {filteredInsights.map((item, index) => (
              <article
                key={item.title}
                className="news-v2-card stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <div className="news-v2-card-media">
                  <img src={item.image} alt={item.title} className="news-v2-card-image" />
                </div>
                <p className="news-v2-card-tag">{item.type}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <span className="news-v2-card-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="news-v2-report">
        <div className="container">
          <div className="news-v2-report-inner reveal">
            <div>
              <h2>Annual Institutional Report 2024</h2>
              <p>
                Our annual governance and performance brief covering endowment management,
                audit controls, and multi-country education outcomes.
              </p>
              <Link to="/impact" className="aglf-btn news-v2-report-btn">
                Download PDF (12.4 MB)
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section news-v2-subscribe">
        <div className="container news-v2-subscribe-inner">
          <h2>Subscribe to the Journal.</h2>
          <p>
            Receive monthly insights on sovereign wealth philanthropy and African
            education system development.
          </p>

          <form className="news-v2-subscribe-form" onSubmit={handleSubscribe}>
            <input type="email" placeholder="Email Address" required />
            <button type="submit" className="aglf-btn">
              Join Now
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default NewsInsightsPage
