/**
 * Content service for the public site.
 *
 * Fetches live content from the Cloud Functions API.
 * Falls back to hardcoded siteData.js if the API is unreachable,
 * so the site always renders even when the backend is down.
 */
import * as fallback from '../data/siteData.js'

const API_BASE =
  import.meta.env.VITE_API_BASE ||
  'http://localhost:5001'

// Simple in-memory cache so repeated calls within a session don't re-fetch
const cache = new Map()
const CACHE_TTL = 5 * 60 * 1000 // 5 min

function getCached(key) {
  const entry = cache.get(key)
  if (entry && Date.now() - entry.ts < CACHE_TTL) return entry.data
  return undefined
}

function setCache(key, data) {
  cache.set(key, { data, ts: Date.now() })
}

async function apiFetch(path) {
  const cacheKey = path
  const hit = getCached(cacheKey)
  if (hit !== undefined) return hit

  const res = await fetch(`${API_BASE}/api${path}`)
  if (!res.ok) throw new Error(`API ${res.status}`)
  const data = await res.json()
  setCache(cacheKey, data)
  return data
}

// ── Navigation ────────────────────────────────────────
export async function getNavigation() {
  try {
    const data = await apiFetch('/navigation')
    return data.items ?? data
  } catch {
    return fallback.navigation
  }
}

// ── Footer ────────────────────────────────────────────
export async function getFooter() {
  try {
    return await apiFetch('/footer')
  } catch {
    return {
      brandHeading: 'AGLF Foundation',
      brandBody:
        'A diaspora-led endowment platform engineered to fund African education and innovation for generations.',
      ctaLabel: 'Become a Visionary Partner',
      ctaPath: '/contribute',
      links: fallback.footerLinks,
      copyright: `Copyright ${new Date().getFullYear()} AGLF Foundation. Built for generational impact.`,
    }
  }
}

// ── Page by slug ──────────────────────────────────────
export async function getPage(slug) {
  try {
    return await apiFetch(`/pages/${encodeURIComponent(slug)}`)
  } catch {
    return null
  }
}

// ── Collection by name ────────────────────────────────
export async function getCollection(name) {
  try {
    const data = await apiFetch(`/collections/${encodeURIComponent(name)}`)
    return data.items ?? []
  } catch {
    // Fall back to hardcoded siteData export of the same name
    return fallback[name] ?? []
  }
}
