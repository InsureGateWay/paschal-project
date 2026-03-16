import { leadershipTeam } from '../data/siteData'

function LeadershipPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container banner-inner centered">
          <p className="eyebrow">Leadership and Governance</p>
          <h1>
            The Visionaries <span>Behind the Legacy.</span>
          </h1>
          <p>
            Led by a dedicated board of African diaspora leaders committed to
            transforming the continent's educational landscape through institutional
            excellence.
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
