import { apiService } from '../services/api'

const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'
const STORE_SEARCH_RESULTS = 'STORE_SEARCH_RESULTS'

// data / variables
const state = {
  searchResults: []
}

// taking data from state and performing computations, filters, etc. on it
const getters = {
  searchResultsCount: state => state.searchResults.length
}

// used to commits mutations and can have async actions like calling our API
const actions = {
  async runSearch({ commit, dispatch }, criteria) {
    const results = await apiService.searchByName(criteria)

    commit(STORE_SEARCH_RESULTS, results)
    dispatch('getSearchResults')
  },
  getSearchResults({ commit }) {
    const results = JSON.parse(localStorage.getItem('search') || [])
    commit(SET_SEARCH_RESULTS, results)
  }
}

// committing a mutation is the only way to CHANGE state
const mutations = {
  [STORE_SEARCH_RESULTS](_, results) {
    localStorage.setItem('search', JSON.stringify(results))
  },
  [SET_SEARCH_RESULTS](state, results) {
    state.searchResults = results
  }
}

// export your state object
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
