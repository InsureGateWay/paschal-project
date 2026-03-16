import { Navigate } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { policyPages } from '../data/siteData'

function PolicyPage({ pageKey }) {
  const policy = policyPages[pageKey]

  if (!policy) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <PageHero eyebrow="Legal" title={policy.title} description={policy.intro} />

      <section className="section-wrap reveal">
        <div className="container split-content">
          <div>
            <p className="page-eyebrow">Overview</p>
            <h2>Key points</h2>
          </div>
          <div className="tick-list">
            {policy.bullets.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PolicyPage
