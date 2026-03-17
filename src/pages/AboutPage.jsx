import { Link } from 'react-router-dom'
import { aboutKpis, missionVisionCards } from '../data/siteData'

function AboutPage() {
  return (
    <>
      <section className="section reveal">
        <div className="container story-grid">
          <div className="story-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1300&q=80"
              alt="Founders meeting"
              className="story-image"
            />
          </div>

          <div>
            <p className="eyebrow">Our Collective Mission</p>
            <h1>
              Our Foundation for <span>Education Equity.</span>
            </h1>
            <p>
              Afri-Global Legacy Foundation exists to sustainably fund and support
              transformative education initiatives across Africa.
            </p>
            <p>
              We work with communities, institutions, governments, and global funders
              to create equitable access, strengthen teaching quality, and accelerate
              digital learning adoption.
            </p>
            <div className="kpi-row">
              {aboutKpis.map((item) => (
                <article key={item.label}>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section muted reveal">
        <div className="container dual-card-grid">
          {missionVisionCards.map((card, index) => (
            <article
              key={card.title}
              className={`mission-card ${card.kind === 'mission' ? 'is-dark' : ''} stagger-card`}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <p className="card-kicker">{card.title}</p>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <div className="container section-header centered">
          <p className="eyebrow">Leadership and Governance</p>
          <h2>
            Governance Designed for <span>Accountability and Scale.</span>
          </h2>
          <p>
            Our structure combines board oversight, an expert advisory council, and a
            focused executive team to ensure transparency and measurable impact.
          </p>
          <Link className="aglf-btn" to="/leadership">
            View Leadership Structure
          </Link>
        </div>
      </section>
    </>
  )
}

export default AboutPage
