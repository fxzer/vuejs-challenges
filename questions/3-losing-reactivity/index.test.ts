import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import type { Ref } from 'vue'
import { isRef } from 'vue'

import LosingReactivity from './App.vue'

interface LosingReactivityType {
  useCount: () => {
    state: { count: Ref<number> }
    update: (value: number) => void
  }
}

describe('losingReactivity', () => {
  it('count is Ref', () => {
    const wrapper = mount(LosingReactivity)
    const { state: { count } } = (wrapper.vm as unknown as LosingReactivityType).useCount()
    // const { count } = (wrapper.vm as unknown as LosingReactivityType).useCount()
    expect(isRef(count)).toBe(true)
  })
})
