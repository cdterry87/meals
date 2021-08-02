import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home'
import RandomMeal from '@/components/RandomMeal'
import SearchForm from '@/components/SearchForm'

import '@/directives/focus'
import '@/filters/uppercase'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    search: {
      namespaced: true,
      state: {
        results: []
      },
      getters: {
        searchResultsCount: () => 0
      }
    },
    favorites: {
      namespaced: true,
      state: {
        favorites: []
      }
    }
  }
})

describe('Home', () => {
  it('renders correctly', () => {
    const wrapper = mount(Home, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.findComponent(RandomMeal).exists()).toBeTruthy()
    expect(wrapper.findComponent(SearchForm).exists()).toBeTruthy()
  })
})
