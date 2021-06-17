<template>
  <div>
    <div
      v-if="message"
      class="notification is-success is-light"
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
      <div v-if="searchResults.length">
        <SearchResult
          v-for="(result, index) in searchResults"
          :key="index"
          :id="result.idMeal"
          :title="result.strMeal"
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
import { apiService } from '../services/api'
import SearchResult from './SearchResult'

export default {
  name: 'SearchForm',
  components: {
    SearchResult
  },
  data() {
    return {
      search: '',
      searchResults: [],
      message: '',
      hasSearchBeenPerformed: false
    }
  },
  computed: {
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
    async onSubmit() {
      this.hasSearchBeenPerformed = true
      this.searchResults = await apiService.searchByName(this.search)
    },
    onFavorite(name) {
      this.message = `<strong>${name}</strong> has been added to favorites.`
    }
  }
}
</script>
