<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <Card
          v-if="!isLoading"
          :id="id"
          :image="meal.strMealThumb"
          :title="meal.strMeal"
          :subtitle="meal.strCategory"
        />
        <div class="mt-4">
          <Button v-bind="favoriteButton" @click.native="onFavoriteClick" />
          <Button v-bind="favoritesLink" />
        </div>
      </div>
      <div class="column is-two-thirds">
        <div v-if="ingredients">
          <h3 class="title is-5">Ingredients:</h3>
          <ul class="mb-4">
            <li v-for="(ingredient, index) in ingredients" :key="index">
              {{ ingredient.measurement }} {{ ingredient.name }}
            </li>
          </ul>
        </div>
        <div v-if="meal.strInstructions">
          <h3 class="title is-5">Instructions:</h3>
          <p class="mb-4">
            {{ meal.strInstructions }}
          </p>
        </div>
        <div v-if="tags">
          <h3 class="title is-5">Tags:</h3>
          <div class="tags are-medium mb-4">
            <span v-for="(tag, index) in tags" :key="index" class="tag is-info">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiService } from '../services/api'
import Button from '../components/Button'
import Card from '../components/Card'

export default {
  name: 'Meal',
  components: {
    Button,
    Card
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoading: true,
      meal: {}
    }
  },
  async created() {
    this.meal = await apiService.getById(this.id)
    this.isLoading = false
  },
  computed: {
    ingredients() {
      const ingredients = []

      for (let i = 1; i <= 15; i++) {
        const ingredientIndex = `strIngredient${i}`
        const measurementIndex = `strMeasure${i}`

        if (!this.meal[ingredientIndex]) break
        ingredients.push({
          measurement: this.meal[measurementIndex],
          name: this.meal[ingredientIndex]
        })
      }

      return ingredients
    },
    tags() {
      if (!this.meal.strTags) return
      return this.meal.strTags.split(',')
    },
    favoritesLink() {
      return {
        label: 'Favorites',
        link: '/favorites',
        classes: 'is-success is-fullwidth is-medium mt-4',
        icon: 'fas fa-star'
      }
    },
    favoriteButton() {
      return {
        classes: `is-fullwidth is-medium ${
          this.isFavorite ? 'is-danger' : 'is-info'
        }`,
        label: this.isFavorite ? 'Remove Favorite' : 'Add Favorite',
        icon: this.isFavorite ? 'fas fa-minus-circle' : 'fas fa-plus-circle'
      }
    }
  },
  methods: {
    onFavoriteClick() {
      console.log('onFavoriteClick')
    }
  }
}
</script>
