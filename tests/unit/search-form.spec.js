import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
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
      },
      actions: {
        runSearch: jest.fn()
      }
    }
  }
})

describe('SearchForm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SearchForm, {
      localVue,
      store
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders correctly', () => {
    expect(wrapper.find('form').exists()).toBeTruthy()
    expect(wrapper.find('.button').exists()).toBeTruthy()
  })

  it('performs search', async () => {
    expect(wrapper.vm.hasSearchBeenPerformed).toBeFalsy()

    const search = wrapper.find('input[name="search"]')
    const form = wrapper.find('form')

    search.setValue('chicken')

    await form.trigger('submit')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.hasSearchBeenPerformed).toBeTruthy()
    expect(wrapper.emitted('onSearch')).toBeTruthy()
  })
})
