import { useContext, useEffect } from 'react'
import { ContentLoadingContext } from '../context/ContentLoadingContext'

/**
 * Hook to track a component's loading state
 * @param {string} componentId - Unique identifier for the component
 * @param {boolean} isLoading - Whether the component is currently loading
 */
export function useContentLoading(componentId, isLoading) {
  const context = useContext(ContentLoadingContext)
  
  if (!context) {
    console.warn('useContentLoading must be used within ContentLoadingProvider')
    return
  }

  useEffect(() => {
    context.registerLoading(componentId, isLoading)
    return () => {
      context.unregisterLoading(componentId)
    }
  }, [componentId, isLoading, context])
}
