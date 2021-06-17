<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">Home page</div>
      <div class="column is-one-third">
        <router-link to="/favorites">Favorites</router-link>
        <br />
        <button @click="onRefreshClick" class="button is-info">Refresh</button>
        <p>
          {{ randomMeal }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { apiService } from '../services/api'

export default {
  name: 'Home',
  data() {
    return {
      randomMeal: {}
    }
  },
  created() {
    this.getRandomMeal()
  },
  methods: {
    async getRandomMeal() {
      this.randomMeal = await apiService.getRandom()
    },
    onRefreshClick() {
      this.getRandomMeal()
    }
  }
}
</script>
