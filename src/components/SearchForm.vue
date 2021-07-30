<template>
  <div>
    <div
      v-if="message"
      class="notification is-info is-light"
      v-html="message"
    />
    <form @submit.prevent="onSubmit">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            class="input is-medium"
            type="search"
            name="search"
            v-focus
            v-model="search"
            placeholder="Search for something!"
          />
        </div>
        <div class="control">
          <button class="button is-info is-medium">Search</button>
        </div>
      </div>
    </form>
    <div class="mt-5">
      <div v-if="searchResultsCount">
        <p class="my-5 has-text-weight-bold">
          We found {{ searchResultsCount }} results!
        </p>
        <SearchResult
          v-for="(result, index) in searchResults"
          :key="index"
          :id="result.idMeal"
          :title="result.strMeal"
          :subtitle="result.strCategory"
          :image="result.strMealThumb"
          @onFavorite="onFavorite"
        />
      </div>
      <div v-else class="mt-5">
        <p class="title is-size-4">{{ emptySearchTitle }}</p>
        <p class="subtitle is-size-5">{{ emptySearchSubtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import SearchResult from './SearchResult'

const { mapState, mapGetters, mapActions } = createNamespacedHelpers('search')

export default {
  name: 'SearchForm',
  components: {
    SearchResult
  },
  data() {
    return {
      search: '',
      message: '',
      hasSearchBeenPerformed: false
    }
  },
  computed: {
    ...mapState(['searchResults']),
    ...mapGetters(['searchResultsCount']),
    emptySearchTitle() {
      return this.hasSearchBeenPerformed
        ? 'Sorry, your search returned no results.'
        : 'There are no results to display.'
    },
    emptySearchSubtitle() {
      return this.hasSearchBeenPerformed
        ? 'Please try another search.'
        : 'Use the search above to search for your favorite drinks!'
    }
  },
  methods: {
    ...mapActions(['runSearch']),
    async onSubmit() {
      this.hasSearchBeenPerformed = true
      this.runSearch(this.search)
    },
    onFavorite(payload) {
      const { name, isFavorite } = payload
      const status = isFavorite ? 'added to' : 'removed from'
      this.message = `<strong>${name}</strong> was ${status} your favorites!`
    }
  }
}
</script>
