<template>
  <article class="media" :class="{ 'has-background-warning': isFavorite }">
    <figure v-if="image" class="media-left">
      <p class="image is-64x64">
        <img :src="image" :alt="title" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h3 class="title is-5">{{ title | uppercase }}</h3>
      </div>
      <nav class="level is-mobile">
        <Button v-bind="viewButton" />
      </nav>
    </div>
    <div class="media-right" @click="onFavoriteClick">
      <i class="far fa-star is-clickable"></i>
    </div>
  </article>
</template>

<script>
import Button from './Button'

export default {
  name: 'SearchResult',
  components: {
    Button
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isFavorite: false
    }
  },
  computed: {
    viewButton() {
      return {
        classes: 'button is-info is-small',
        label: 'View Meal',
        link: `/meal/${this.id}`
      }
    }
  },
  methods: {
    onFavoriteClick() {
      this.isFavorite = true
      this.$emit('onFavorite', this.title)
    }
  }
}
</script>
