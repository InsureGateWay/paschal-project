import { useEffect } from 'react'
import { useContent } from '../hooks/useContent'
import { useContentLoading } from '../hooks/useContentLoading'
import { getCollection } from '../services/contentService'
import { funderGroups as fallbackFunders, partnerHighlights as fallbackHighlights } from '../data/siteData'

const communicationAssets = [
  'Pitch deck with mission, traction, and collaboration opportunities.',
  'Concept notes with budget transparency and implementation timelines.',
  'Annual impact reporting with independent validation and field evidence.',
]

function PartnersPage() {
  useEffect(() => { document.title = 'AGLF Foundation | Partners' }, [])
  const { data: funderGroups, loading: funderGroupsLoading } = useContent(() => getCollection('funderGroups'), fallbackFunders)
  const { data: partnerHighlights, loading: partnerHighlightsLoading } = useContent(() => getCollection('partnerHighlights'), fallbackHighlights)
  useContentLoading('partners-page', funderGroupsLoading || partnerHighlightsLoading)
  return (
    <>
      <section className="page-banner">
        <div className="container banner-inner centered">
          <p className="eyebrow">Funder Network</p>
          <h1>
            Partnerships Built for <span>Long-Term Education Impact.</span>
          </h1>
          <p>
            We convene philanthropists, international donors, and corporate partners
            through structured engagement, transparent reporting, and shared outcomes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container dual-card-grid">
          {funderGroups.map((group, index) => (
            <article
              key={group.title}
              className="mission-card stagger-card"
              style={{ '--delay': `${index * 0.08}s` }}
            >
              <h3>{group.title}</h3>
              <p>{group.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="container model-grid">
          {partnerHighlights.map((partner, index) => (
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
          <h3>Communication Materials</h3>
          <ul>
            {communicationAssets.map((asset) => (
              <li key={asset}>{asset}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default PartnersPage