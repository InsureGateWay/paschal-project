import PageHero from '../components/PageHero'
import { mediaStories } from '../data/siteData'
import { contentSyncedAt, syncedMediaVideos } from '../data/syncedContent'

function MediaPage() {
  const hasSyncedVideos = syncedMediaVideos.length > 0
  const lastUpdated = new Date(contentSyncedAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <>
      <PageHero
        eyebrow="Media Centre"
        title="Media Centre"
        description="Latest updates, announcements and portfolio news from Investment Corporation of Dubai."
      />

      {hasSyncedVideos ? (
        <section className="section-wrap reveal">
          <div className="container">
            <div className="section-header">
              <p className="page-eyebrow">Corporate Videos</p>
              <h2>Video library from source content</h2>
              <p className="sync-meta">Synced from source on {lastUpdated}</p>
            </div>

            {syncedMediaVideos.map((group) => (
              <div key={group.sectionTitle} className="video-group">
                <h3 className="video-group-title">{group.sectionTitle}</h3>
                <div className="video-grid">
                  {group.items.map((video, index) => (
                    <article
                      key={`${group.sectionTitle}-${video.title}`}
                      className="video-card stagger-card"
                      style={{ '--delay': `${index * 0.07}s` }}
                    >
                      <div className="video-thumb-wrap">
                        <img src={video.thumbnail} alt={video.alt} className="video-thumb" />
                      </div>
                      <h4>{video.title}</h4>
                      <a href={video.videoUrl} target="_blank" rel="noreferrer">
                        Watch video
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-wrap reveal">
        <div className="container">
          <div className="section-header">
            <p className="page-eyebrow">Latest Updates</p>
            <h2>Corporate and portfolio stories</h2>
          </div>

          <div className="news-grid">
            {mediaStories.map((story, index) => (
              <article
                key={story.title}
                className="news-card stagger-card"
                style={{ '--delay': `${index * 0.09}s` }}
              >
                <p className="news-meta">
                  {story.date} | {story.category}
                </p>
                <h3>{story.title}</h3>
                <p>{story.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default MediaPage
