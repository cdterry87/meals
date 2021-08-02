import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home'
import RandomMeal from '@/components/RandomMeal'
import SearchForm from '@/components/SearchForm'

const localVue = createLocalVue()

describe('Home', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Home, {
      localVue
    })

    expect(wrapper.findComponent(RandomMeal).exists()).toBeTruthy()
    expect(wrapper.findComponent(SearchForm).exists()).toBeTruthy()
  })
})
