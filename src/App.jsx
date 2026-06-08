import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ContributePage from './pages/ContributePage'
import HomePage from './pages/HomePage'
import ImpactPage from './pages/ImpactPage'
import NewsInsightsPage from './pages/NewsInsightsPage'
import NewsDetailPage from './pages/NewsDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import ProgramsPage from './pages/ProgramsPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<HomePage />} />

        <Route path="about" element={<AboutPage />} />
        <Route path="governance-principles" element={<Navigate to="/about#governance" replace />} />
        <Route path="leadership" element={<Navigate to="/about#leadership" replace />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="partners" element={<Navigate to="/about#partners" replace />} />
        <Route path="our-model" element={<Navigate to="/about#model" replace />} />
        <Route path="impact" element={<ImpactPage />} />
        <Route path="news-insights" element={<NewsInsightsPage />} />
        <Route path="news-insights/:slug" element={<NewsDetailPage />} />
        <Route path="contribute" element={<ContributePage />} />
        <Route path="contact" element={<ContactPage />} />

        <Route path="about-icd" element={<Navigate to="/about" replace />} />
        <Route path="governance" element={<Navigate to="/about#governance" replace />} />
        <Route path="our-organisation" element={<Navigate to="/about#leadership" replace />} />
        <Route path="our-portfolio" element={<Navigate to="/about#model" replace />} />
        <Route path="financial-information" element={<Navigate to="/impact" replace />} />
        <Route
          path="corporate-social-responsibility"
          element={<Navigate to="/impact" replace />}
        />
        <Route path="media-centre" element={<Navigate to="/news-insights" replace />} />
        <Route path="news" element={<Navigate to="/news-insights" replace />} />
        <Route path="contact-us" element={<Navigate to="/contact" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
