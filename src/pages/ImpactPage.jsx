import { Link } from 'react-router-dom'
import { impactMetrics, impactPrograms } from '../data/siteData'

function ImpactPage() {
  return (
    <>
      <section className="page-banner muted">
        <div className="container impact-head">
          <div>
            <p className="eyebrow">Results and Data</p>
            <h1>
              Measuring What <span>Matters Most.</span>
            </h1>
            <p>
              We track enrollment growth, scholarships delivered, teachers trained,
              and digital access expansion to continuously improve program design.
            </p>
          </div>
          <Link to="/partners" className="report-button">
            View Funder Engagement Model
          </Link>
        </div>
      </section>

      <section className="section muted">
        <div className="container model-grid">
          {impactMetrics.map((metric, index) => (
            <article
              key={metric.label}
              className="model-card stagger-card"
              style={{ '--delay': `${index * 0.08}s` }}
            >
              <h3>{metric.label}</h3>
              <p>{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container impact-grid">
          {impactPrograms.map((program, index) => (
            <article
              key={program.title}
              className="impact-card stagger-card"
              style={{ '--delay': `${index * 0.08}s`, '--image': `url(${program.image})` }}
            >
              <div className="impact-overlay" />
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ImpactPage
