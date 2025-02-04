import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import App from './App.vue'

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

describe('watch Faimily', () => {
  it('should work', async () => {
    const result: string[] = []
    console.log = vi.fn((log: string) => {
      result.push(log?.toString()?.trim())
    })
    mount(App)
    await delay(1000)
    expect(JSON.stringify(result)).toBe(JSON.stringify([
      'Only triggered once',
      'The state.count updated',
      '[object HTMLParagraphElement]',
    ]))
  })
})
