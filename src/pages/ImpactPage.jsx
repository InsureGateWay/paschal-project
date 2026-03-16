import { impactPrograms } from '../data/siteData'

function ImpactPage() {
  return (
    <>
      <section className="page-banner muted">
        <div className="container impact-head">
          <div>
            <p className="eyebrow">Results and Data</p>
            <h1>
              Fueling the <span>Knowledge Engine.</span>
            </h1>
            <p>
              We measure success not by donations received, but by the industrial-
              grade competencies built within African communities.
            </p>
          </div>
          <a
            href="https://reporting.icd.gov.ae/2024/"
            target="_blank"
            rel="noreferrer"
            className="report-button"
          >
            Read Global Impact Report
          </a>
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
