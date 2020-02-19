import { mount } from '@vue/test-utils'
import Component from '@/components/TheFooter'

describe('TheFooter component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Component)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
