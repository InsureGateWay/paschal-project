import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { getPage, getCollection } from '../services/contentService'
import { heroStats as fallbackStats, modelPillars as fallbackPillars, heroSlides as fallbackSlides } from '../data/siteData'

// SVG icons for each model pillar card
const pillarIcons = [
  // Endowment Fund — vault / safe icon
  '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><circle cx="12" cy="15" r="2"/><path d="M12 13v-3"/><path d="M6 6V4h12v2"/></svg>',
  // Socially Responsible Investments — tree icon
  '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-7"/><path d="M9 15l3-3 3 3"/><path d="M12 3C8 3 5 6.5 5 10c0 2.5 1.5 4.5 3.5 5.5h7C17.5 14.5 19 12.5 19 10c0-3.5-3-7-7-7z"/><path d="M8 19c-2 0-3-1-3-2"/><path d="M16 19c2 0 3-1 3-2"/></svg>',
  // Revenue Diversification — pie chart icon
  '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10h-10V2z"/><path d="M20.66 7A10 10 0 0 0 14 2.05V10h8a10 10 0 0 0-1.34-3z"/></svg>',
]

function HomePage() {
  useEffect(() => { document.title = 'AGLF Foundation | Home' }, [])
  const { data: page } = useContent(() => getPage('home'), {})
  const { data: modelPillars } = useContent(() => getCollection('modelPillars'), fallbackPillars)

  const hero = page?.hero ?? {}
  const heroStats = hero.stats || fallbackStats
  const slides = hero.slides && hero.slides.length > 0 ? hero.slides : fallbackSlides
  const modelSection = page?.modelSection ?? {}

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide, slides.length])

  return (
    <>
      <section className="hero-section reveal">
        <div className="hero-slideshow">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide${index === currentSlide ? ' active' : ''}`}
              style={{ backgroundImage: `linear-gradient(120deg, rgba(4, 19, 36, 0.74), rgba(4, 57, 44, 0.6)), url('${slide.url}')` }}
            />
          ))}
        </div>
        <div className="hero-slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot${index === currentSlide ? ' active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="container hero-content">
          <p className="eyebrow on-dark">{hero.eyebrow || 'A Legacy for the Future'}</p>
          <h1>
            {hero.heading || 'Empowering Africa Through Transformative Education'}
          </h1>
          <p>
            {hero.body || 'Afri-Global Legacy Foundation delivers sustainable funding and innovation for education access, teacher development, and digital learning across Africa.'}
          </p>
          <div className="hero-actions">
            <Link className="aglf-btn" to={hero.ctaPrimary?.path || '/programs'}>
              {hero.ctaPrimary?.label || 'Explore Programs'}
            </Link>
            <Link className="aglf-btn secondary" to={hero.ctaSecondary?.path || '/partners'}>
              {hero.ctaSecondary?.label || 'Funder Network'}
            </Link>
          </div>
        </div>

        <div className="container hero-stats">
          {heroStats.map((item) => (
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
              {modelSection.heading || 'The Cycle of Perpetual Impact'}
            </h2>
            <p>
              {modelSection.body || 'We combine endowment financing with measurable program delivery to support learning systems that outlive short grant cycles.'}
            </p>
          </div>
          <div className="model-grid">
            {modelPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="model-card stagger-card"
                style={{ '--delay': `${index * 0.09}s` }}
              >
                <span className="model-icon" dangerouslySetInnerHTML={{ __html: pillarIcons[index] || pillarIcons[0] }} />
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
