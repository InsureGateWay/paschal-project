import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ContributePage from './pages/ContributePage'
import GovernancePrinciplesPage from './pages/GovernancePrinciplesPage'
import HomePage from './pages/HomePage'
import ImpactPage from './pages/ImpactPage'
import LeadershipPage from './pages/LeadershipPage'
import ModelPage from './pages/ModelPage'
import NewsInsightsPage from './pages/NewsInsightsPage'
import NotFoundPage from './pages/NotFoundPage'
import PartnersPage from './pages/PartnersPage'
import ProgramsPage from './pages/ProgramsPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/governance-principles" element={<GovernancePrinciplesPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/our-model" element={<ModelPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/news-insights" element={<NewsInsightsPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/about-icd" element={<Navigate to="/about" replace />} />
        <Route path="/governance" element={<Navigate to="/governance-principles" replace />} />
        <Route path="/our-organisation" element={<Navigate to="/leadership" replace />} />
        <Route path="/our-portfolio" element={<Navigate to="/our-model" replace />} />
        <Route path="/financial-information" element={<Navigate to="/impact" replace />} />
        <Route
          path="/corporate-social-responsibility"
          element={<Navigate to="/impact" replace />}
        />
        <Route path="/media-centre" element={<Navigate to="/news-insights" replace />} />
        <Route path="/news" element={<Navigate to="/news-insights" replace />} />
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
