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

  const unregisterLoading = useCallback((componentId) => {
    setLoadingStates((prev) => {
      const updated = { ...prev }
      delete updated[componentId]
      return updated
    })
  }, [])

  // Check if all registered components are loaded
  // If no components registered, assume ready (for static pages)
  useEffect(() => {
    const values = Object.values(loadingStates)
    const criticalLoaded = loadingStates.header === false && loadingStates.footer === false
    
    // Ready when: (1) critical components exist and are loaded, OR (2) nothing registered (static page)
    const shouldBeReady = values.length === 0 || (criticalLoaded && values.every((value) => value === false))
    setIsReady(shouldBeReady)
  }, [loadingStates])

  return (
    <ContentLoadingContext.Provider value={{ registerLoading, unregisterLoading, isReady }}>
      {children}
    </ContentLoadingContext.Provider>
  )
}
