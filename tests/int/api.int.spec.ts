import { describe, it, expect } from 'vitest'

describe('API', () => {
  it('example route returns JSON', async () => {
    const base = process.env.PLAYWRIGHT_TEST_BASE_URL ?? 'http://localhost:3000'
    const res = await fetch(`${base}/my-route`)
    expect(res.ok).toBe(true)
    const data = await res.json()
    expect(data).toHaveProperty('message')
  })
})
