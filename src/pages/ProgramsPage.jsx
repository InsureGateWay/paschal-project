import { useEffect, useRef, useState } from 'react'
import { useContent } from '../hooks/useContent'
import { useContentLoading } from '../hooks/useContentLoading'
import { getCollection } from '../services/contentService'
import {
  scholarshipEligibility as fallbackElig,
  scholarshipTracks as fallbackTracks,
} from '../data/siteData'

const priorityAreas = [
  {
    title: 'Access to Education',
    body: 'Build and refurbish schools, increase enrollment, and remove financial barriers for low-income families.',
  },
  {
    title: 'Teacher Development',
    body: 'Strengthen pedagogy, subject expertise, and retention through continuous learning and mentorship.',
  },
  {
    title: 'Digital Learning',
    body: 'Deploy devices, localized content, and school connectivity to scale learning opportunities.',
  },
  {
    title: 'Policy Advocacy',
    body: 'Work with public and private stakeholders to improve education policy and implementation outcomes.',
  },
]

function ProgramsPage() {
  const carouselRef = useRef(null)
  const scholCardsRef = useRef(null)
  const [scholImageHeight, setScholImageHeight] = useState(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  useEffect(() => { document.title = 'AGLF Foundation | Programs' }, [])
  const [canScrollRight, setCanScrollRight] = useState(true)
  const { data: scholarshipTracks, loading: scholarshipTracksLoading } = useContent(() => getCollection('scholarshipTracks'), fallbackTracks)
  const { data: scholarshipEligibility, loading: scholarshipEligibilityLoading } = useContent(() => getCollection('scholarshipEligibility'), fallbackElig)
  useContentLoading('programs-page', scholarshipTracksLoading || scholarshipEligibilityLoading)

  useEffect(() => {
    if (!scholCardsRef.current || typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(max-width: 900px)')

    const updateScholHeight = () => {
      if (mediaQuery.matches || !scholCardsRef.current) {
        setScholImageHeight(null)
        return
      }

      const nextHeight = Math.ceil(scholCardsRef.current.getBoundingClientRect().height)
      setScholImageHeight(nextHeight)
    }

    updateScholHeight()

    const resizeObserver = new ResizeObserver(() => {
      updateScholHeight()
    })

    resizeObserver.observe(scholCardsRef.current)

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateScholHeight)
    } else {
      mediaQuery.addListener(updateScholHeight)
    }

    window.addEventListener('resize', updateScholHeight)

    return () => {
      resizeObserver.disconnect()

      if (mediaQuery.addEventListener) {
        mediaQuery.removeEventListener('change', updateScholHeight)
      } else {
        mediaQuery.removeListener(updateScholHeight)
      }

      window.removeEventListener('resize', updateScholHeight)
    }
  }, [])

  useEffect(() => {
    if (!carouselRef.current || typeof window === 'undefined') {
      return undefined
    }

    const node = carouselRef.current

    const updateScrollState = () => {
      const maxScrollLeft = node.scrollWidth - node.clientWidth
      setCanScrollLeft(node.scrollLeft > 8)
      setCanScrollRight(node.scrollLeft < maxScrollLeft - 8)
    }

    updateScrollState()

    node.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      node.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = Math.max(260, Math.floor(carouselRef.current.clientWidth * 0.82))
      const target = direction === 'left'
        ? carouselRef.current.scrollLeft - scrollAmount
        :
        carouselRef.current.scrollLeft + scrollAmount

      carouselRef.current.scrollTo({ left: target, behavior: 'smooth' })
    }
  }

  return (
    <>
      <section className="page-banner muted">
        <div className="container banner-inner centered">
          <p className="eyebrow">Education Programs</p>
          <h1>
            Priority Initiatives for <span>Transformative Learning.</span>
          </h1>
          <p>
            Our portfolio is designed around access, teacher quality, digital learning,
            and policy reform to deliver measurable education outcomes at scale.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: '1.5rem' }}>
        <div className="container">
          <div className="carousel-container">
            <div className="carousel-wrapper" ref={carouselRef}>
              <div className="carousel-track">
                {priorityAreas.map((item, index) => (
                  <article
                    key={item.title}
                    className="model-card carousel-card"
                    style={{ '--delay': `${index * 0.08}s` }}
                  >
                    <span className="icon-dot" />
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="carousel-controls">
              <button
                className="carousel-arrow carousel-arrow-left"
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                disabled={!canScrollLeft}
              >
                ‹
              </button>
              <button
                className="carousel-arrow carousel-arrow-right"
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                disabled={!canScrollRight}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Scholarship Initiative</p>
            <h2>
              Support for Underserved <span>Secondary and Tertiary Students</span>
            </h2>
          </div>

          <div className="schol-split">
            <div
              className="schol-image"
              style={scholImageHeight ? { height: `${scholImageHeight}px` } : undefined}
            >
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                alt="Students supported by scholarship programme"
              />
            </div>

            <div className="schol-cards" ref={scholCardsRef}>
              {scholarshipTracks.map((track, index) => (
                <article
                  key={track.title}
                  className="mission-card stagger-card"
                  style={{ '--delay': `${index * 0.08}s` }}
                >
                  <h3>{track.title}</h3>
                  <p>{track.detail}</p>
                </article>
              ))}

              <div className="criteria-panel">
                <h3>Eligibility Focus</h3>
                <ul>
                  {scholarshipEligibility.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProgramsPage