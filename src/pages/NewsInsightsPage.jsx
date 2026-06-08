import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { useContentLoading } from '../hooks/useContentLoading'
import { getPage } from '../services/contentService'

const defaultFilters = ['All Insights', 'Press Releases', 'Model Updates', 'Impact Reports']

const defaultFeatured = {
  tag: 'Featured Insight',
  date: 'Dec 2024',
  title: 'The Santiago Advantage: Why We Chose Sovereign-Scale Governance.',
  detail:
    'An in-depth look at how AGLF applies sovereign governance principles to protect operational independence, preserve the principal corpus, and sustain generational education funding.',
  image:
    'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&w=1600&q=80',
}

const defaultArticles = [
  {
    slug: 'aglf-founding-operating-agreement',
    type: 'Press Releases',
    title: 'AGLF Formalizes Founding Operating Agreement with Strategic Partners.',
    detail:
      'Founding partners ratified the institutional framework for governance, stewardship, and long-term African education financing.',
    image:
      'https://images.unsplash.com/photo-1557426272-fc759fbb7a8d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'named-scholarship-vehicle',
    type: 'Model Updates',
    title: 'Defining the Named Scholarship Vehicle: A USD 20,000 Legacy Threshold.',
    detail:
      'A practical guide to how donor-named scholarship structures are seeded and governed to fund scholars over decades.',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'fiduciary-discipline-spending-rule',
    type: 'Impact Reports',
    title: 'Fiduciary Discipline in Practice: Implementing the 5% Spending Rule.',
    detail:
      'How AGLF caps annual distributions to preserve the endowment while maintaining measurable impact in target communities.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'gaap-reporting-audit-protocols',
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
  const { data: page, loading: pageLoading } = useContent(() => getPage('news-insights'), {})
  useContentLoading('news-insights-page', pageLoading)
  const [activeFilter, setActiveFilter] = useState('All Insights')

  const hero = page?.hero ?? {}
  const filters = page?.filters?.length ? page.filters : defaultFilters
  const featured = page?.featured?.title ? page.featured : defaultFeatured
  const articles = page?.articles?.length ? page.articles : defaultArticles
  const report = page?.report ?? {}
  const subscribe = page?.subscribe ?? {}

  const filteredInsights = useMemo(() => {
    if (activeFilter === 'All Insights' || activeFilter === filters[0]) {
      return articles
    }
    return articles.filter((item) => item.type === activeFilter)
  }, [activeFilter, articles, filters])

  const handleSubscribe = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <section className="news-v2-hero reveal">
        <div className="container">
          <div className="news-v2-hero-inner">
            <p className="eyebrow on-dark">{hero.eyebrow || 'Knowledge Center'}</p>
            <h1>
              {hero.heading || <>News and <br /><span>Insights.</span></>}
            </h1>
            <p>
              {hero.body || 'Exploring the intersection of institutional capital, educational innovation, and long-horizon development strategy across the African continent.'}
            </p>
          </div>
        </div>
      </section>

      <section className="news-v2-filters" aria-label="Filter insights by category">
        <div className="container news-v2-filter-row">
          <span className="news-v2-filter-label">Filter By</span>
          <div className="news-v2-filter-chips">
            {filters.map((item) => (
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
              <img src={featured.image} alt={featured.title} className="news-v2-featured-image" />
            </div>

            <div className="news-v2-featured-copy">
              <p className="news-v2-meta">
                {featured.tag} - {featured.date}
              </p>
              <h2>{featured.title}</h2>
              <p>{featured.detail}</p>
              <Link to="/about#model" className="news-v2-read-link">
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
              <Link
                to={`/news-insights/${item.slug || index}`}
                key={item.slug || item.title}
                className="news-v2-card stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <div className="news-v2-card-media">
                  <img src={item.image} alt={item.title} className="news-v2-card-image" />
                </div>
                <p className="news-v2-card-tag">{item.type}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <span className="news-v2-read-more">Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="news-v2-report">
        <div className="container">
          <div className="news-v2-report-inner reveal">
            <div>
              <h2>{report.heading || 'Annual Institutional Report 2024'}</h2>
              <p>
                {report.body || 'Our annual governance and performance brief covering endowment management, audit controls, and multi-country education outcomes.'}
              </p>
              <Link to="/impact" className="aglf-btn news-v2-report-btn">
                {report.ctaLabel || 'Download PDF (12.4 MB)'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section news-v2-subscribe">
        <div className="container news-v2-subscribe-inner">
          <h2>{subscribe.heading || 'Subscribe to the Journal.'}</h2>
          <p>
            {subscribe.body || 'Receive monthly insights on sovereign wealth philanthropy and African education system development.'}
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
