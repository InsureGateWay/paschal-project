import { useEffect, useState } from 'react'

/**
 * Generic async-data hook.
 * Returns { data, loading, error } with the resolved value or the fallback.
 *
 * @param {() => Promise<T>} loader  – async function that returns data
 * @param {T}                initial – value while loading (also used on error)
 * @param {any[]}            deps    – dependency array (default: run once)
 */
export function useContent(loader, initial = null, deps = []) {
  const [data, setData] = useState(initial)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    loader()
      .then((result) => {
        if (!cancelled) setData(result ?? initial)
      })
      .catch(() => {
        if (!cancelled) setData(initial)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { data, loading }
}
