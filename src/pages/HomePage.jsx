import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { getPage, getCollection } from '../services/contentService'
import { heroStats as fallbackStats, modelPillars as fallbackPillars } from '../data/siteData'

function HomePage() {
  useEffect(() => { document.title = 'AGLF Foundation | Home' }, [])
  const { data: page } = useContent(() => getPage('home'), {})
  const { data: heroStats } = useContent(() => getCollection('heroStats'), fallbackStats)
  const { data: modelPillars } = useContent(() => getCollection('modelPillars'), fallbackPillars)

  const hero = page?.hero ?? {}
  const modelSection = page?.model ?? {}

  return (
    <>
      <section className="hero-section reveal">
        <div className="hero-backdrop" />
        <div className="container hero-content">
          <p className="eyebrow on-dark">{hero.eyebrow || 'A Legacy for the Future'}</p>
          <h1>
            {hero.headingLine1 || 'Empowering Africa Through'}
            <span> {hero.headingLine2 || 'Transformative Education'}</span>
          </h1>
          <p>
            {hero.description || 'Afri-Global Legacy Foundation delivers sustainable funding and innovation for education access, teacher development, and digital learning across Africa.'}
          </p>
          <div className="hero-actions">
            <Link className="aglf-btn" to="/programs">
              Explore Programs
            </Link>
            <Link className="aglf-btn secondary" to="/partners">
              Funder Network
            </Link>
          </div>
        </div>

        <div className="container hero-stats">
          {(page?.hero?.stats || heroStats).map((item) => (
            <article key={item.label}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-header centered">
            <p className="eyebrow">{modelSection.eyebrow || 'Our Model'}</p>
            <h2>
              {modelSection.headingLine1 || 'The Cycle of'} <span>{modelSection.headingLine2 || 'Perpetual Impact'}</span>
            </h2>
            <p>
              {modelSection.description || 'We combine endowment financing with measurable program delivery to support learning systems that outlive short grant cycles.'}
            </p>
          </div>
          <div className="model-grid">
            {modelPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="model-card stagger-card"
                style={{ '--delay': `${index * 0.09}s` }}
              >
                <span className="icon-dot" />
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section callout reveal">
        <div className="container callout-inner">
          <div>
            <p className="eyebrow">Collective Mission</p>
            <h2>
              Building equitable education systems for every learner in Africa.
            </h2>
          </div>
          <Link className="aglf-btn" to="/contribute">
            Partner With AGLF
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
