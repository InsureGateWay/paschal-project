import PageHero from '../components/PageHero'
import { annualReports, financialHighlights } from '../data/siteData'
import { contentSyncedAt, syncedFinancialReports } from '../data/syncedContent'

function FinancialPage() {
  const usingSyncedReports = syncedFinancialReports.length > 0
  const reportRows = usingSyncedReports
    ? syncedFinancialReports
    : annualReports.map((report) => ({
        year: report.year,
        category: 'Annual',
        title: report.type,
        links: [],
      }))

  const lastUpdated = new Date(contentSyncedAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <>
      <PageHero
        eyebrow="Financial Information"
        title="Financial Information"
        description="Financial highlights, analysis and reporting aligned with ICD's long-term mandate."
      />

      <section id="financial-highlights-analysis" className="section-wrap reveal">
        <div className="container">
          <div className="section-header">
            <p className="page-eyebrow">Financial Highlights and Analysis</p>
            <h2>Performance overview grounded in strategic value</h2>
          </div>

          <div className="pillar-grid">
            {financialHighlights.map((item, index) => (
              <article
                key={item.label}
                className="pillar-card stagger-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <h3>{item.label}</h3>
                <p className="metric-value">{item.value}</p>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="financial-reports" className="section-wrap muted reveal">
        <div className="container">
          <div className="section-header">
            <p className="page-eyebrow">Financial Reports</p>
            <h2>Annual report library</h2>
            {usingSyncedReports ? (
              <p className="sync-meta">Synced from source on {lastUpdated}</p>
            ) : null}
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Type</th>
                  <th>Document</th>
                  <th>Access</th>
                </tr>
              </thead>
              <tbody>
                {reportRows.map((report) => (
                  <tr key={`${report.year}-${report.category}-${report.title}`}>
                    <td>{report.year}</td>
                    <td>{report.category}</td>
                    <td>{report.title}</td>
                    <td>
                      {report.links.length ? (
                        <div className="report-links">
                          {report.links.map((link) => (
                            <a
                              key={`${report.year}-${report.title}-${link.url}`}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <span>Archive</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export default FinancialPage
