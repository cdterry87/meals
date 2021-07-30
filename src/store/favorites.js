const ADD_FAVORITE = 'ADD_FAVORITE'
const GET_FAVORITES = 'GET_FAVORITES'
const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
const STORE_FAVORITES = 'STORE_FAVORITES'

const state = {
  favorites: []
}

const getters = {
  totalFavorites: state => state.favorites.length
}

const actions = {
  getFavorites({ commit }) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    commit(GET_FAVORITES, favorites)
  },
  addFavorite({ commit }, { id, title, subtitle, image }) {
    commit(ADD_FAVORITE, { id, title, subtitle, image, date: new Date() })
    commit(STORE_FAVORITES)
  },
  removeFavorite({ commit }, id) {
    commit(REMOVE_FAVORITE, id)
    commit(STORE_FAVORITES)
  }
}

const mutations = {
  [GET_FAVORITES](state, favorites) {
    state.favorites = favorites
  },
  [STORE_FAVORITES](state) {
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  },
  [ADD_FAVORITE](state, { id, title, subtitle, image, date }) {
    state.favorites.push({ id, title, subtitle, image, date })
  },
  [REMOVE_FAVORITE](state, id) {
    const favoriteIndex = state.favorites.findIndex(favorite => {
      return favorite.id === id
    })
    if (favoriteIndex > -1) {
      state.favorites.splice(favoriteIndex, 1)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
