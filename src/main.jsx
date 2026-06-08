import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ContentLoadingProvider } from './context/ContentLoadingContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContentLoadingProvider>
        <App />
      </ContentLoadingProvider>
    </BrowserRouter>
  </StrictMode>,
)
