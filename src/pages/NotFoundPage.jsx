import { Link } from 'react-router-dom'

function NotFoundPage() {
  useEffect(() => { document.title = 'AGLF Foundation | Not Found' }, [])
  return (
    <section className="section reveal not-found-wrap">
      <div className="container section-header centered">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you requested does not exist in this AGLF clone.</p>
        <Link className="aglf-btn" to="/">
          Return home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
