import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const auditChecks = [
  {
    title: 'Rank Verification',
    detail:
      'We request academic results to ensure scholarships are awarded to high-performing students as designed by fund owners.',
  },
  {
    title: 'Transaction Audits',
    detail:
      'Legacy keeps transaction records showing exactly where and how donor capital is delivered to approved partner schools.',
  },
  {
    title: 'Case Histories',
    detail:
      'We maintain recipient records, award purpose, and selection documentation to prevent misuse and improve governance.',
  },
]

const caseStudies = [
  {
    tag: 'Cameroon Excellence Hub',
    title: 'Bridging the STEM Gap in Douala.',
    detail:
      'A donor-named fund seeded with USD 20,000 supported four-year tuition for selected students in digital engineering.',
    image:
      'https://images.unsplash.com/photo-1523240693567-510e807b9400?auto=format&fit=crop&w=1400&q=80',
  },
  {
    tag: 'Nigeria Skill-Building',
    title: 'Vocational Mastery in Lagos.',
    detail:
      'General fund returns enabled a vocational apprenticeship pathway that built practical, industry-ready competencies.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80',
  },
]

function ImpactPage() {
  useEffect(() => { document.title = 'AGLF Foundation | Impact' }, [])
  return (
    <>
      <section className="impact-v2-hero">
        <div className="container impact-v2-hero-grid">
          <div className="impact-v2-hero-copy reveal">
            <p className="eyebrow on-dark">Regional Impact</p>
            <h1>
              A Continental <span>Mandate.</span>
            </h1>
            <p className="impact-v2-lead">
              Our operations span 54 nations, focused on secondary school partnerships
              and scholarship funding through a sustainable investment model.
            </p>

            <div className="impact-v2-stats">
              <article>
                <h3>08</h3>
                <p>Priority Countries</p>
              </article>
              <article>
                <h3>4-YR</h3>
                <p>Partner Commitments</p>
              </article>
            </div>
          </div>

          <div className="impact-v2-map reveal" aria-hidden="true">
            <span className="impact-v2-pin impact-v2-pin-a" />
            <span className="impact-v2-pin impact-v2-pin-b" />
            <span className="impact-v2-pin impact-v2-pin-c" />
            <div className="impact-v2-market-note">
              <p className="impact-v2-market-kicker">Primary Markets</p>
              <p>Active partnerships in Nigeria, Cameroon, and Kenya.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section impact-v2-audit">
        <div className="container">
          <div className="impact-v2-intro">
            <h2>Audited for Excellence.</h2>
            <p>
              Trust is our core currency. We run rigorous review systems to verify
              student ranking, financial flows, and compliance from commitment to
              disbursement.
            </p>
          </div>

          <div className="impact-v2-audit-grid">
            {auditChecks.map((item, index) => (
              <article
                key={item.title}
                className="impact-v2-audit-card stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section impact-v2-stories">
        <div className="container">
          <div className="section-header centered">
            <h2>Legacy in Motion.</h2>
            <p>Stories of scholars funded through interest-only returns.</p>
          </div>

          <div className="impact-v2-stories-grid">
            {caseStudies.map((story, index) => (
              <article
                key={story.title}
                className="impact-v2-story-card stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <div className="impact-v2-story-media">
                  <img src={story.image} alt={story.title} className="impact-v2-story-image" />
                  <span className="impact-v2-story-tag">{story.tag}</span>
                </div>

                <h3>{story.title}</h3>
                <p>{story.detail}</p>
                <Link to="/partners" className="impact-v2-story-link">
                  Read Full Case Study 
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-v2-transparency">
        <div className="container impact-v2-transparency-inner">
          <h2>Institutional Transparency.</h2>
          <p>
            Annually, the foundation issues letters to fund owners detailing
            performance and disbursement against elected purpose.
          </p>
          <div className="impact-v2-actions">
            <Link to="/impact" className="aglf-btn">
              2024 Impact Letter
            </Link>
            <Link to="/partners" className="aglf-btn impact-v2-outline">
              Audit Reports
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}

export default ImpactPage
