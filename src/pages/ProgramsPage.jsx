import { scholarshipEligibility, scholarshipTracks } from '../data/siteData'

const priorityAreas = [
  {
    title: 'Access to Education',
    body: 'Build and refurbish schools, increase enrollment, and remove financial barriers for low-income families.',
  },
  {
    title: 'Teacher Development',
    body: 'Strengthen pedagogy, subject expertise, and retention through continuous learning and mentorship.',
  },
  {
    title: 'Digital Learning',
    body: 'Deploy devices, localized content, and school connectivity to scale learning opportunities.',
  },
  {
    title: 'Policy Advocacy',
    body: 'Work with public and private stakeholders to improve education policy and implementation outcomes.',
  },
]

function ProgramsPage() {
  return (
    <>
      <section className="page-banner muted">
        <div className="container banner-inner centered">
          <p className="eyebrow">Education Programs</p>
          <h1>
            Priority Initiatives for <span>Transformative Learning.</span>
          </h1>
          <p>
            Our portfolio is designed around access, teacher quality, digital learning,
            and policy reform to deliver measurable education outcomes at scale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container model-grid">
          {priorityAreas.map((item, index) => (
            <article
              key={item.title}
              className="model-card stagger-card"
              style={{ '--delay': `${index * 0.08}s` }}
            >
              <span className="icon-dot" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Scholarship Initiative</p>
            <h2>
              Support for Underserved <span>Secondary and Tertiary Students</span>
            </h2>
          </div>

          <div className="dual-card-grid">
            {scholarshipTracks.map((track, index) => (
              <article
                key={track.title}
                className="mission-card stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <h3>{track.title}</h3>
                <p>{track.detail}</p>
              </article>
            ))}
          </div>

          <div className="criteria-panel">
            <h3>Eligibility Focus</h3>
            <ul>
              {scholarshipEligibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProgramsPage