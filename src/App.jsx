import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import ContributePage from './pages/ContributePage'
import HomePage from './pages/HomePage'
import ImpactPage from './pages/ImpactPage'
import LeadershipPage from './pages/LeadershipPage'
import ModelPage from './pages/ModelPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/our-model" element={<ModelPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/contribute" element={<ContributePage />} />

        <Route path="/about-icd" element={<Navigate to="/about" replace />} />
        <Route path="/our-organisation" element={<Navigate to="/leadership" replace />} />
        <Route path="/our-portfolio" element={<Navigate to="/our-model" replace />} />
        <Route path="/financial-information" element={<Navigate to="/impact" replace />} />
        <Route
          path="/corporate-social-responsibility"
          element={<Navigate to="/impact" replace />}
        />
        <Route path="/media-centre" element={<Navigate to="/impact" replace />} />
        <Route path="/contact-us" element={<Navigate to="/contribute" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
