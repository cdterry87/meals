import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import search from './search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search
  },
  plugins: [createPersistedState()]
})
