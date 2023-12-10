import { describe, expect, it } from 'vitest'

import AppRaw from './App.vue?raw'

describe('domPortal', () => {
  it('render to body', () => {
    expect(AppRaw).toContain(atob('Omdsb2JhbChib2R5KQ=='))
  })
})
