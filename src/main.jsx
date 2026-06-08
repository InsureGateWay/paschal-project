import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ContentLoadingProvider } from './context/ContentLoadingContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContentLoadingProvider>
        <App />
      </ContentLoadingProvider>
    </BrowserRouter>
  </StrictMode>,
)
