import { useEffect, useState } from 'react'
import { useContentLoadingContext } from '../context/ContentLoadingContext'

/**
 * Generic async-data hook.
 * Returns { data, loading } with the resolved value or the fallback.
 *
 * @param {() => Promise<T>} loader  – async function that returns data
 * @param {T}                initial – fallback value on failure
 * @param {any[]}            deps    – dependency array (default: run once)
 */
export function useContent(loader, initial = null, deps = []) {
  const { registerLoad, unregisterLoad } = useContentLoadingContext()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    registerLoad()

    loader()
      .then((result) => {
        if (!active) return
        setData(result ?? initial)
      })
      .catch(() => {
        if (!active) return
        setData(initial)
      })
      .finally(() => {
        if (!active) return
        setLoading(false)
        unregisterLoad()
      })

    return () => {
      if (!active) return
      active = false
      unregisterLoad()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { data, loading }
}
