<template>
  <div v-if="randomMeal.idMeal">
    <h3 class="title is-4 has-text-centered">Here's a meal just for you!</h3>
    <Card
      :id="randomMeal.idMeal"
      :title="randomMeal.strMeal"
      :subtitle="randomMeal.strCategory"
      :image="randomMeal.strMealThumb"
    />
    <div class="mt-4">
      <Button
        classes="is-warning is-fullwidth is-medium"
        icon="fas fa-sync"
        label="Refresh"
        @click.native="onRefreshClick"
      />
    </div>
  </div>
</template>

<script>
import { apiService } from '../services/api'
import Button from './Button'
import Card from './Card'

export default {
  name: 'RandomMeal',
  components: {
    Button,
    Card
  },
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
