import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { useContentLoading } from '../hooks/useContentLoading'
import { getCollection, getPage } from '../services/contentService'
import {
  aboutKpis as fallbackKpis,
  leadershipTeam as fallbackTeam,
  missionVisionCards as fallbackMV,
  funderGroups as fallbackFunderGroups,
  partnerHighlights as fallbackPartnerHighlights,
  cycleSteps as fallbackCycleSteps,
  modelPillars as fallbackModelPillars,
} from '../data/siteData'

const fallbackGovernancePrinciples = [
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

const fallbackGappItems = [
  {
    title: 'GAPP 1: Legal Framework',
    detail:
      'AGLF ensures legal soundness through its 501(c)(3) status and transparent operating relationships with its designated financial service partners.',
  },
  {
    title: 'GAPP 4: Funding and Spending',
    detail:
      'Total assets under management and annual disbursements are disclosed in line with bylaws and applicable law.',
  },
  {
    title: 'GAPP 11: Annual Reporting',
    detail:
      'Financial records are maintained through institutional systems and presented periodically according to GAAP-aligned standards.',
  },
  {
    title: 'GAPP 19: Investment Style',
    detail:
      'Investment decisions prioritize long-term, risk-adjusted returns on clear economic and financial grounds.',
  },
]

const fallbackCommunicationAssets = [
  'Pitch deck with mission, traction, and collaboration opportunities.',
  'Concept notes with budget transparency and implementation timelines.',
  'Annual impact reporting with independent validation and field evidence.',
]

function AboutPage() {
  const location = useLocation()

  useEffect(() => { document.title = 'AGLF Foundation | About' }, [])

  const { data: page, loading: pageLoading } = useContent(() => getPage('about'), null)
  const { data: aboutKpis, loading: aboutKpisLoading } = useContent(() => getCollection('aboutKpis'), [])
  const { data: leadershipTeam, loading: leadershipTeamLoading } = useContent(() => getCollection('leadershipTeam'), [])
  const { data: missionVisionCards, loading: missionVisionCardsLoading } = useContent(() => getCollection('missionVisionCards'), [])
  const { data: funderGroups, loading: funderGroupsLoading } = useContent(
    () => getCollection('funderGroups'),
    [],
  )
  const { data: partnerHighlights, loading: partnerHighlightsLoading } = useContent(
    () => getCollection('partnerHighlights'),
    [],
  )
  const { data: cycleSteps, loading: cycleStepsLoading } = useContent(
    () => getCollection('cycleSteps'),
    [],
  )
  const { data: modelPillars, loading: modelPillarsLoading } = useContent(
    () => getCollection('modelPillars'),
    [],
  )
  const loading =
    pageLoading ||
    aboutKpisLoading ||
    leadershipTeamLoading ||
    missionVisionCardsLoading ||
    funderGroupsLoading ||
    partnerHighlightsLoading ||
    cycleStepsLoading ||
    modelPillarsLoading
  useContentLoading(
    'about-page',
    loading,
  )

  useEffect(() => {
    if (loading || !location.hash) return
    const target = document.getElementById(location.hash.slice(1))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [loading, location.hash])

  if (loading) return null

  const hero = page?.hero || {}
  const purpose = page?.purpose || {}
  const governance = page?.governance || {}
  const leadership = page?.leadership || {}
  const partnerships = page?.partnerships || {}
  const model = page?.model || {}
  const cta = page?.cta || {}

  const mission = missionVisionCards.find((card) => card.kind === 'mission')
  const vision = missionVisionCards.find((card) => card.kind === 'vision')
  const displayedKpis = purpose.kpis?.length ? purpose.kpis : aboutKpis.length ? aboutKpis : fallbackKpis
  const displayedTeam = leadership.members?.length
    ? leadership.members
    : leadershipTeam.length
      ? leadershipTeam
      : fallbackTeam
  const displayedFunders = partnerships.groups?.length
    ? partnerships.groups
    : funderGroups.length
      ? funderGroups
      : fallbackFunderGroups
  const displayedHighlights = partnerships.highlights?.length
    ? partnerships.highlights
    : partnerHighlights.length
      ? partnerHighlights
      : fallbackPartnerHighlights
  const displayedPillars = model.pillars?.length
    ? model.pillars
    : modelPillars.length
      ? modelPillars
      : fallbackModelPillars
  const displayedSteps = model.steps?.length
    ? model.steps
    : cycleSteps.length
      ? cycleSteps
      : fallbackCycleSteps

  return (
    <>
      <section className="about-hero reveal">
        <div className="about-hero-media" aria-hidden="true">
          <video autoPlay muted loop playsInline>
            <source
              src={hero.videoUrl || 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-modern-city-skyscraper-4437-large.mp4'}
              type="video/mp4"
            />
          </video>
          <div className="about-hero-overlay" />
        </div>

        <div className="container about-hero-content">
          <div className="about-hero-copy">
            <p className="eyebrow on-dark">{hero.eyebrow || 'Our Organisation'}</p>
            <h1>{hero.heading || 'Engineering Sovereign Freedom.'}</h1>
            <p className="about-hero-lead">
              {hero.body ||
                'The Afri-Global Legacy Foundation (AGLF) is a diaspora-led institution dedicated to building enduring systems that fund African development through education, innovation, and disciplined capital stewardship.'}
            </p>
          </div>
        </div>
      </section>

      <section className="section about-purpose reveal">
        <div className="container about-purpose-grid">
          <div className="about-purpose-title">
            <h2>{purpose.heading || 'The Essence of Our Purpose.'}</h2>
          </div>

          <div className="about-purpose-copy">
            <p>{purpose.body || 'Established for charitable and educational impact, AGLF is designed to fund scholarships and education systems transformation for learners across Africa and African immigrant communities in the United States.'}</p>
            <p>
              {purpose.missionBody || mission?.body || fallbackMV[0].body}
            </p>

            <div className="about-purpose-cards">
              <article className="about-purpose-card stagger-card" style={{ '--delay': '0.08s' }}>
                <h3>The Vision</h3>
                <p>{purpose.visionBody || vision?.body || fallbackMV[1].body}</p>
              </article>
              <article className="about-purpose-card stagger-card" style={{ '--delay': '0.16s' }}>
                <h3>The Mandate</h3>
                <p>{purpose.mandateBody || 'Preserve and grow the principal corpus so that education funding remains stable, independent, and resilient across economic cycles.'}</p>
              </article>
            </div>

            <div className="kpi-row about-kpis">
              {displayedKpis.map((item) => (
                <article key={item.label}>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section about-governance reveal" id="governance">
        <div className="container">
          <div className="about-governance-head">
            <div>
              <p className="eyebrow">{governance.eyebrow || 'Institutional Stewardship'}</p>
              <h2>{governance.heading || 'Governance and Principles.'}</h2>
            </div>
            <p className="about-governance-note">
              {governance.note || 'Our governance framework applies global best practices to ensure transparency, operational independence, and measurable accountability.'}
            </p>
          </div>

          <div className="about-governance-grid">
            {(governance.principles?.length ? governance.principles : fallbackGovernancePrinciples).map((item, index) => (
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

          <div className="gov-v2-gapp-list">
            {(governance.gappItems?.length ? governance.gappItems : fallbackGappItems).map((item, index) => (
              <article
                key={item.title}
                className="gov-v2-gapp-item stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <div><p className="gov-v2-gapp-code">{item.title}</p></div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-leadership reveal" id="leadership">
        <div className="container">
          <div className="section-header centered">
            <p className="eyebrow">{leadership.eyebrow || 'Leadership & Governance'}</p>
            <h2>{leadership.heading || 'Experienced Leadership Guiding the Foundation.'}</h2>
            <p>{leadership.body || 'AGLF is led by a cross-functional executive team aligned with our mission to fund education systems through disciplined capital and strategic partnerships.'}</p>
          </div>

          <div className="about-partners-grid">
            {displayedTeam.map((member, index) => (
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

      <section className="section about-partnerships reveal" id="partners">
        <div className="container">
          <div className="section-header centered">
            <p className="eyebrow">{partnerships.eyebrow || 'Funder Network'}</p>
            <h2>{partnerships.heading || 'Mobilizing Partners and Impact Investors.'}</h2>
            <p>{partnerships.body || 'We work with philanthropists, institutional donors, and CSR partners to build a durable funding ecosystem for education access, teacher development, and digital learning.'}</p>
          </div>

          <div className="about-partnerships-grid">
            {displayedFunders.map((group, index) => (
              <article
                key={group.title}
                className="about-partner-card stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <h3>{group.title}</h3>
                <p>{group.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="section muted">
          <div className="container model-grid">
            {displayedHighlights.map((partner, index) => (
              <article
                key={partner.title}
                className="model-card stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <h3>{partner.title}</h3>
                <p>{partner.detail}</p>
              </article>
            ))}
          </div>
          <div className="container criteria-panel">
            <h3>{partnerships.assetsHeading || 'Communication Materials'}</h3>
            <ul>
              {(partnerships.communicationAssets?.length
                ? partnerships.communicationAssets
                : fallbackCommunicationAssets
              ).map((asset) => <li key={asset}>{asset}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section about-model reveal" id="model">
        <div className="container">
          <div className="section-header centered">
            <p className="eyebrow">{model.eyebrow || 'Our Model'}</p>
            <h2>{model.heading || 'Built for Long-Term Education Impact.'}</h2>
            <p>{model.body || 'AGLF combines an endowment structure with responsible investment practices and program partnerships to fund outcomes that last.'}</p>
          </div>

          <div className="model-grid">
            {displayedPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="model-card stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>

          <div className="cycle-board reveal">
            <h2>{model.cycleHeading || 'Operational Cycle for Lasting Impact'}</h2>
            <div className="cycle-steps">
            {displayedSteps.map((step, index) => (
              <article
                key={step.title}
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <div className="cycle-node" />
                <h3>{step.title}</h3>
                <p>{step.subtitle}</p>
              </article>
            ))}
            </div>
            <p className="cycle-note">{model.cycleNote || 'Data-driven monitoring and evaluation allows us to refine programs, improve outcomes, and strengthen stakeholder trust each cycle.'}</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-inner">
          <div className="about-cta-copy">
            <h2>{cta.heading || 'Join the Legacy.'}</h2>
            <p>{cta.body || 'Collaborate with AGLF to close Africa’s education gap through institutional funding models built for permanence.'}</p>
          </div>
          <div className="about-cta-actions">
            <Link className="aglf-btn" to="/contribute">
              {cta.primaryLabel || 'Establish a Fund'}
            </Link>
            <Link className="aglf-btn secondary about-cta-outline" to="/contact">
              {cta.secondaryLabel || 'Contact Governance'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
