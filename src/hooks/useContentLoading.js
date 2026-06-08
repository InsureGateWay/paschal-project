import { useEffect } from 'react'

export function useContentLoading(pageId, isLoading) {
  useEffect(() => {
    if (!pageId) return

    const key = `page${pageId.replace(/[^a-zA-Z0-9]/g, '')}Loading`
    document.body.dataset[key] = isLoading ? 'true' : 'false'

    return () => {
      delete document.body.dataset[key]
    }
  }, [pageId, isLoading])
}
