import type { TestResult } from '@/lib/types'

const STORAGE_KEY = 'fairy-career-test-result'

let cachedRaw: string | null | undefined
let cachedResult: TestResult | null = null

function invalidateCache () {
  cachedRaw = undefined
  cachedResult = null
}

export function saveTestResult (result: TestResult): void {
  if (typeof window === 'undefined') return
  const raw = JSON.stringify(result)
  localStorage.setItem(STORAGE_KEY, raw)
  cachedRaw = raw
  cachedResult = result
}

export function loadTestResult (): TestResult | null {
  if (typeof window === 'undefined') return null

  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === cachedRaw) return cachedResult

    cachedRaw = raw
    if (!raw) {
      cachedResult = null
      return null
    }

    cachedResult = JSON.parse(raw) as TestResult
    return cachedResult
  } catch {
    invalidateCache()
    return null
  }
}

export function clearTestResult (): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
  invalidateCache()
}
