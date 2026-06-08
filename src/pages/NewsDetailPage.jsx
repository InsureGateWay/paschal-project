import { useEffect, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { useContentLoading } from '../hooks/useContentLoading'
import { getPage } from '../services/contentService'

function NewsDetailPage() {
  const { slug } = useParams()
  const { data: page, loading: pageLoading } = useContent(() => getPage('news-insights'), {})
  useContentLoading('news-detail-page', pageLoading)

  const articles = page?.articles ?? []
  const article = useMemo(
    () => articles.find((a) => a.slug === slug),
    [articles, slug]
  )

  useEffect(() => {
    document.title = article
      ? `${article.title} | AGLF Foundation`
      : 'Article | AGLF Foundation'
  }, [article])

  if (!page) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p>Loading…</p>
        </div>
      </section>
    )
  }

  if (!article) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h2>Article not found</h2>
          <p style={{ marginTop: '0.5rem' }}>
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/news-insights" className="aglf-btn" style={{ marginTop: '1.2rem' }}>
            Back to News & Insights
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="article-hero">
        {article.image && (
          <div className="article-hero-media">
            <img src={article.image} alt={article.title} className="article-hero-image" />
          </div>
        )}
        <div className="container article-hero-content">
          <Link to="/news-insights" className="article-back-link">
            ← Back to News & Insights
          </Link>
          {article.type && <p className="article-category">{article.type}</p>}
          <h1>{article.title}</h1>
          {article.detail && <p className="article-excerpt">{article.detail}</p>}
        </div>
      </section>

      <section className="section article-body-section">
        <div className="container article-body-wrap">
          {article.content ? (
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          ) : (
            <div className="article-content">
              <p>{article.detail}</p>
            </div>
          )}
        </div>
      </section>

      <section className="article-footer-nav">
        <div className="container">
          <Link to="/news-insights" className="aglf-btn secondary article-back-btn">
            ← All Articles
          </Link>
        </div>
      </section>
    </>
  )
}

export default NewsDetailPage
