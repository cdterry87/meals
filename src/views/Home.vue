<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <SearchForm />
      </div>
      <div class="column is-one-third">
        <Button v-bind="favoritesLink" />
        <RandomMeal />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
import RandomMeal from '../components/RandomMeal'
import SearchForm from '../components/SearchForm'

export default {
  name: 'Home',
  components: {
    Button,
    RandomMeal,
    SearchForm
  },
  computed: {
    favoritesLink() {
      return {
        label: 'Favorites',
        link: '/favorites',
        classes: 'is-success is-fullwidth is-medium mb-4',
        icon: 'fas fa-star'
      }
    }
  }
}
</script>
