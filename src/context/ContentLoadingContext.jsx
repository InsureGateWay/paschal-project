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
    const values = Object.values(loadingStates)
    const allLoaded = values.length > 0 && values.every((value) => value === false)
    setIsReady(allLoaded)
  }, [loadingStates])

  return (
    <ContentLoadingContext.Provider value={{ registerLoading, isReady }}>
      {children}
    </ContentLoadingContext.Provider>
  )
}
