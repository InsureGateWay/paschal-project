import { contributionOptions } from '../data/siteData'

function ContributePage() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="section contribute-bg">
      <div className="container contribute-wrap">
        <div>
          <p className="eyebrow">Contribute</p>
          <h1>
            Join the <span>Legacy</span>
          </h1>
          <p className="contribute-copy">
            Whether you are an individual donor, institution, or corporate CSR team,
            your contribution helps deliver scholarships, teacher training, digital
            learning tools, and policy advocacy across underserved communities.
          </p>

          <div className="benefit-list">
            {contributionOptions.map((item) => (
              <article key={item.title} className="benefit-item">
                <span className="icon-heart" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <form className="contribute-form" onSubmit={handleSubmit}>
          <h2>Contribution Form</h2>

          <div className="name-row">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" type="text" required />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" required />
            </div>
          </div>

          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="partnerType">Partner Type</label>
          <select id="partnerType" name="partnerType" defaultValue="Individual" required>
            <option>Individual</option>
            <option>Community Group</option>
            <option>Corporate Partner</option>
            <option>Philanthropic Organization</option>
          </select>

          <button type="submit" className="aglf-btn">
            Submit Partnership Interest
          </button>
          <p className="form-note">
            AGLF is a registered 501(c)(3) organization. Contributions may be
            tax-deductible.
          </p>
        </form>
      </div>
    </section>
  )
}

export default ContributePage
