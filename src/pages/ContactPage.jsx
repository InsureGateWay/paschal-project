import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { getPage } from '../services/contentService'
import { contactProfile as fallbackProfile, partnerTypeOptions as fallbackOptions } from '../data/siteData'

function ContactPage() {
  useEffect(() => { document.title = 'AGLF Foundation | Contact' }, [])
  const { data: page } = useContent(() => getPage('contact'), {})
  const contactProfile = page?.contactProfile ?? fallbackProfile
  const partnerTypeOptions = page?.partnerTypeOptions ?? fallbackOptions

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <section className="contact-v2-hero">
        <div className="container contact-v2-hero-content">
          <div className="contact-v2-hero-copy reveal">
            <p className="eyebrow on-dark">Connect with Governance</p>
            <h1>
              Global <br />
              <span>Coordination.</span>
            </h1>
            <p className="contact-v2-hero-lead">{contactProfile.intro}</p>
          </div>
        </div>
      </section>

      <section className="section contact-v2-main">
        <div className="container contact-v2-grid">
          <div className="contact-v2-info">
            <article className="contact-v2-block">
              <h3>Registered Office</h3>
              <address className="contact-v2-address">
                {contactProfile.officeAddress.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </article>

            <article className="contact-v2-block">
              <h3>Partnership Elicitation</h3>
              <p className="contact-v2-email">
                <a href={`mailto:${contactProfile.inquiryEmail}`}>{contactProfile.inquiryEmail}</a>
              </p>
              <p>{contactProfile.inquiryNote}</p>
            </article>

            <article className="contact-v2-note">
              <h3>{contactProfile.financialPartnerTitle}</h3>
              <p>{contactProfile.financialPartnerNote}</p>
            </article>
          </div>

          <div className="contact-v2-form-shell reveal">
            <h2>Expression of Interest</h2>

            <form className="contact-v2-form" onSubmit={handleSubmit}>
              <div className="contact-v2-form-grid">
                <div className="contact-v2-field">
                  <label htmlFor="contactFullName">Full Name</label>
                  <input id="contactFullName" name="fullName" type="text" required />
                </div>

                <div className="contact-v2-field">
                  <label htmlFor="contactEmail">Email Address</label>
                  <input id="contactEmail" name="email" type="email" required />
                </div>

                <div className="contact-v2-field contact-v2-span-2">
                  <label htmlFor="contactPartnerType">Partner Type</label>
                  <select id="contactPartnerType" name="partnerType" defaultValue={partnerTypeOptions[0]} required>
                    {partnerTypeOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-v2-field contact-v2-span-2">
                  <label htmlFor="contactMessage">Message</label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    rows="4"
                    placeholder="How can we assist in building your legacy?"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="aglf-btn contact-v2-submit">
                Submit Inquiry &gt;
              </button>
            </form>

            <p className="contact-v2-form-note">
              Need contribution pathways? <Link to="/contribute">Visit contribution channels.</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="contact-v2-cta">
        <div className="container contact-v2-cta-inner">
          <div className="contact-v2-cta-copy">
            <h2>Build the Legacy With Us.</h2>
            <p>
              Engage AGLF governance to structure institutional partnerships and align
              philanthropic objectives with measurable education impact.
            </p>
          </div>

          <div className="contact-v2-cta-actions">
            <Link className="aglf-btn" to="/contribute">
              Explore Contribution Channels
            </Link>
            <Link className="aglf-btn secondary contact-v2-cta-outline" to="/about">
              Learn About AGLF
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
