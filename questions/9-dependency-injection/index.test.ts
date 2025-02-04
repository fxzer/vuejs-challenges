import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import App from './App.vue'

describe('dependency Injection', () => {
  it('should work\'', () => {
    const wrapper = mount(App)
    expect(wrapper.vm.$el.textContent).toBe('1')
  })
})
