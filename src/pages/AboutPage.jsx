import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { useContentLoading } from '../hooks/useContentLoading'
import { getCollection } from '../services/contentService'
import {
  aboutKpis as fallbackKpis,
  leadershipTeam as fallbackTeam,
  missionVisionCards as fallbackMV,
} from '../data/siteData'

const governancePrinciples = [
  {
    title: 'GAAP',
    detail:
      'Financial statements are prepared and audited according to Generally Accepted Accounting Principles.',
  },
  {
    title: '5%',
    detail:
      'Distributions are capped to protect the principal corpus and preserve perpetual funding capacity.',
  },
  {
    title: 'Stewardship',
    detail:
      'Assets are managed through professional investment partners for long-term resilience and disciplined growth.',
  },
]

function AboutPage() {
  useEffect(() => { document.title = 'AGLF Foundation | About' }, [])
  const { data: aboutKpis, loading: aboutKpisLoading } = useContent(() => getCollection('aboutKpis'), fallbackKpis)
  const { data: leadershipTeam, loading: leadershipTeamLoading } = useContent(() => getCollection('leadershipTeam'), fallbackTeam)
  const { data: missionVisionCards, loading: missionVisionCardsLoading } = useContent(() => getCollection('missionVisionCards'), fallbackMV)
  useContentLoading('about-page', aboutKpisLoading || leadershipTeamLoading || missionVisionCardsLoading)
  const mission = missionVisionCards.find((card) => card.kind === 'mission')
  const vision = missionVisionCards.find((card) => card.kind === 'vision')

  return (
    <>
      <section className="about-hero reveal">
        <div className="about-hero-media" aria-hidden="true">
          <video autoPlay muted loop playsInline>
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-modern-city-skyscraper-4437-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="about-hero-overlay" />
        </div>

        <div className="container about-hero-content">
          <div className="about-hero-copy">
            <p className="eyebrow on-dark">Our Organisation</p>
            <h1>
              Engineering <br />
              <span>Sovereign Freedom.</span>
            </h1>
            <p className="about-hero-lead">
              The Afri-Global Legacy Foundation (AGLF) is a diaspora-led institution
              dedicated to building enduring systems that fund African development
              through education, innovation, and disciplined capital stewardship.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-purpose reveal">
        <div className="container about-purpose-grid">
          <div className="about-purpose-title">
            <h2>The Essence of Our Purpose.</h2>
          </div>

          <div className="about-purpose-copy">
            <p>
              Established for charitable and educational impact, AGLF is designed to
              fund scholarships and education systems transformation for learners
              across Africa and African immigrant communities in the United States.
            </p>
            <p>
              {mission?.body} Our endowment-first structure safeguards principal
              capital while generating sustainable annual distributions for long-term,
              multi-generational progress.
            </p>

            <div className="about-purpose-cards">
              <article className="about-purpose-card stagger-card" style={{ '--delay': '0.08s' }}>
                <h3>The Vision</h3>
                <p>{vision?.body}</p>
              </article>
              <article className="about-purpose-card stagger-card" style={{ '--delay': '0.16s' }}>
                <h3>The Mandate</h3>
                <p>
                  Preserve and grow the principal corpus so that education funding
                  remains stable, independent, and resilient across economic cycles.
                </p>
              </article>
            </div>

            <div className="kpi-row about-kpis">
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

      <section className="section about-governance reveal">
        <div className="container">
          <div className="about-governance-head">
            <div>
              <p className="eyebrow">Institutional Stewardship</p>
              <h2>Governance and Principles.</h2>
            </div>
            <p className="about-governance-note">
              Our governance framework applies global best practices to ensure
              transparency, operational independence, and measurable accountability.
            </p>
          </div>

          <div className="about-governance-grid">
            {governancePrinciples.map((item, index) => (
              <article
                key={item.title}
                className="about-governance-card stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-partners reveal">
        <div className="container">
          <div className="section-header centered">
            <p className="eyebrow">Founding Partners</p>
            <h2>
              The Collective Leadership <span>Driving Our Mandate.</span>
            </h2>
            <p>
              Experienced leadership across governance, investments, and partnerships
              ensures strategy turns into measurable outcomes.
            </p>
          </div>

          <div className="about-partners-grid">
            {leadershipTeam.map((member, index) => (
              <article
                key={member.name}
                className="about-partner-card stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <div className="about-partner-media">
                  <img src={member.image} alt={member.name} className="about-partner-image" />
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p>{member.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-inner">
          <div className="about-cta-copy">
            <h2>Join the Legacy.</h2>
            <p>
              Collaborate with AGLF to close Africa&apos;s education gap through
              institutional funding models built for permanence.
            </p>
          </div>
          <div className="about-cta-actions">
            <Link className="aglf-btn" to="/contribute">
              Establish a Fund
            </Link>
            <Link className="aglf-btn secondary about-cta-outline" to="/partners">
              Contact Governance
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
