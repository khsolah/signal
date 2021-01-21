import Pages from '@/pages/index.vue'
import { shallowMount } from '@vue/test-utils'

describe('Composition Api Unit Test', () => {
  it('Pages test', () => {
    const wrapper = shallowMount(Pages, {
      data() {
        return {
          title: 'Welcom to Composition Api Unit Test'
        }
      }
    })
    expect(wrapper.find('.title').text()).toBe('Welcom to Composition Api Unit Test')
  })
})