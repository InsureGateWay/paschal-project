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
  useEffect(() => {
    const values = Object.values(loadingStates)
    const allLoaded = values.length > 0 && values.every((value) => value === false)
    setIsReady(allLoaded)
  }, [loadingStates])

  return (
    <ContentLoadingContext.Provider value={{ registerLoading, unregisterLoading, isReady }}>
      {children}
    </ContentLoadingContext.Provider>
  )
}
