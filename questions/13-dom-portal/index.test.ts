import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import App from './App.vue'

describe('domPortal', () => {
  it('render to body', () => {
    const wrapper = mount(App)
    expect(wrapper.find('span').exists()).toBeFalsy()
    expect(document.body.innerHTML).toMatchInlineSnapshot('"<span>Hello World</span>"')
  })
})
