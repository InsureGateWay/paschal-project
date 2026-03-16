import PageHero from '../components/PageHero'
import { contactDetails } from '../data/siteData'

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Contact Us"
        description="For official inquiries, please use the details below or submit the contact form."
      />

      <section className="section-wrap reveal">
        <div className="container contact-grid">
          <div>
            <h2>Contact details</h2>
            <ul className="contact-list">
              <li>{contactDetails.location}</li>
              <li>{contactDetails.phone}</li>
              <li>{contactDetails.email}</li>
            </ul>

            <div className="warning-card">
              <h3>Fraud Warning</h3>
              <p>{contactDetails.warning}</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />

            <button type="submit" className="icd-button">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactPage
