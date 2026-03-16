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
              A Legacy Forged in <span>Common Purpose.</span>
            </h1>
            <p>
              The Africa-Global Legacy Foundation is not just a non-profit; it is a
              financial movement. Founded by members of the African diaspora, we
              recognized that charity provides relief, but endowments provide freedom.
            </p>
            <p>
              By channeling global capital into a self-sustaining investment vehicle,
              we ensure that the funding for African education is never subject to
              political or economic volatility.
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
            The Visionaries <span>Behind the Legacy.</span>
          </h2>
          <p>
            Led by a dedicated board of African diaspora leaders committed to
            transforming the continent's educational landscape through institutional
            excellence.
          </p>
          <Link className="aglf-btn" to="/leadership">
            Meet the Leadership Team
          </Link>
        </div>
      </section>
    </>
  )
}

export default AboutPage
