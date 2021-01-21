import { shallowMount } from '@vue/test-utils'
// import Pages from '@/components/Logo.vue'
import Pages from '@/pages/index.vue'


describe('Composition Api Unit Test', () => {
  const wrapper = shallowMount(Pages, {
    data () {
      return {
        title: 'Composition Api Unit Test - Use Jest'
      }
    }
  })

  test('set title data', () => {
    expect(wrapper.find('.title').text()).toMatch('Composition Api Unit Test - Use Jest')
  })
})