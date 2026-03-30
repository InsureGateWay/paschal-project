import { useEffect } from 'react'
import { useContent } from '../hooks/useContent'
import { getCollection } from '../services/contentService'
import { leadershipTeam as fallback } from '../data/siteData'

function LeadershipPage() {
  useEffect(() => { document.title = 'AGLF Foundation | Leadership' }, [])
  const { data: leadershipTeam } = useContent(() => getCollection('leadershipTeam'), fallback)

  return (
    <>
      <section className="page-banner">
        <div className="container banner-inner centered">
          <p className="eyebrow">Leadership and Governance</p>
          <h1>
            Leadership and <span>Governance.</span>
          </h1>
          <p>
            The foundation combines Board of Trustees oversight, advisory expertise,
            and an executive team focused on programs, investments, and partnerships.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container team-grid">
          {leadershipTeam.map((member, index) => (
            <article
              key={member.name}
              className="team-card stagger-card"
              style={{ '--delay': `${index * 0.08}s` }}
            >
              <div className="team-image-wrap">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p>{member.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default LeadershipPage
