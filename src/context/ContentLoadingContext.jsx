import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const ContentLoadingContext = createContext({
  registerLoad: () => {},
  unregisterLoad: () => {},
  isLoading: true,
})

export function ContentLoadingProvider({ children }) {
  const [activeLoads, setActiveLoads] = useState(0)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    setInitialized(true)
  }, [])

  const registerLoad = useCallback(() => {
    setActiveLoads((current) => current + 1)
  }, [])

  const unregisterLoad = useCallback(() => {
    setActiveLoads((current) => Math.max(0, current - 1))
  }, [])

  const value = useMemo(
    () => ({
      registerLoad,
      unregisterLoad,
      isLoading: !initialized || activeLoads > 0,
    }),
    [initialized, activeLoads, registerLoad, unregisterLoad],
  )

  return (
    <ContentLoadingContext.Provider value={value}>
      {children}
    </ContentLoadingContext.Provider>
  )
}

export function useContentLoadingContext() {
  return useContext(ContentLoadingContext)
}
