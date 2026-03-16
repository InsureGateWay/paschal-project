import { Link, Navigate } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { sectorContent } from '../data/siteData'

function SectorPage({ sectorKey }) {
  const sector = sectorContent[sectorKey]

  if (!sector) {
    return <Navigate to="/our-portfolio" replace />
  }

  return (
    <>
      <PageHero
        eyebrow={sector.eyebrow}
        title={sector.title}
        description={sector.intro}
      />

      <section className="section-wrap reveal">
        <div className="container split-content">
          <div>
            <p className="page-eyebrow">Focus Areas</p>
            <h2>Strategic priorities in {sector.title.toLowerCase()}</h2>
          </div>
          <div className="tick-list">
            {sector.focusAreas.map((area) => (
              <p key={area}>{area}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap muted reveal">
        <div className="container split-content">
          <div>
            <p className="page-eyebrow">Strategic Notes</p>
            <h2>How this sector contributes to the wider mandate</h2>
          </div>
          <div className="tick-list">
            {sector.strategicNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap reveal">
        <div className="container centered-cta">
          <Link to="/our-portfolio" className="icd-button">
            Return to portfolio overview
          </Link>
        </div>
      </section>
    </>
  )
}

export default SectorPage
