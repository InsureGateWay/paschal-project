function PageHero({ eyebrow, title, description }) {
  return (
    <header className="page-hero reveal">
      <div className="container">
        <p className="page-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description ? <p className="page-description">{description}</p> : null}
      </div>
    </header>
  )
}

export default PageHero
