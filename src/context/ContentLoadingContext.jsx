import { createContext, useState, useCallback, useEffect } from 'react'

export const ContentLoadingContext = createContext()

export function ContentLoadingProvider({ children }) {
  const [loadingStates, setLoadingStates] = useState({})
  const [isReady, setIsReady] = useState(false)

  // Register a component's loading state
  const registerLoading = useCallback((componentId, isLoading) => {
    setLoadingStates((prev) => {
      const updated = { ...prev, [componentId]: isLoading }
      return updated
    })
  }, [])

  // Check if all critical components are loaded
  useEffect(() => {
    const criticalComponents = ['header', 'footer']
    const allCriticalLoaded = criticalComponents.every(
      (id) => loadingStates[id] === false
    )
    
    // Set ready only after critical components are loaded
    // and a minimum time has passed to ensure data has been fetched
    if (allCriticalLoaded && Object.keys(loadingStates).length > 0) {
      setIsReady(true)
    }
  }, [loadingStates])

  return (
    <ContentLoadingContext.Provider value={{ registerLoading, isReady }}>
      {children}
    </ContentLoadingContext.Provider>
  )
}
