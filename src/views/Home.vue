<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">Home page</div>
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

export default {
  name: 'Home',
  components: {
    Button,
    RandomMeal
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
