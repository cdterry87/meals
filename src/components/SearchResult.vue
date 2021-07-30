<template>
  <article class="media">
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
      <span v-if="isFavorite" key="fas">
        <i v-show="isFavorite" class="fas fa-star is-clickable"></i>
      </span>
      <span v-else key="far">
        <i v-show="!isFavorite" class="far fa-star is-clickable"></i>
      </span>
    </div>
  </article>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Button from './Button'

const { mapState, mapActions } = createNamespacedHelpers('favorites')

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
    subtitle: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState(['favorites']),
    isFavorite() {
      const favoriteIndex = this.favorites.findIndex(favorite => {
        return favorite.id === this.id
      })
      return favoriteIndex > -1 ? true : false
    },
    viewButton() {
      return {
        classes: 'button is-info is-small',
        label: 'View Meal',
        link: `/meal/${this.id}`
      }
    }
  },
  methods: {
    ...mapActions(['addFavorite', 'removeFavorite']),
    onFavoriteClick() {
      this.isFavorite
        ? this.removeFavorite(this.id)
        : this.addFavorite({
            id: this.id,
            title: this.title,
            subtitle: this.subtitle,
            image: this.image
          })

      this.$emit('onFavorite', {
        name: this.title,
        isFavorite: this.isFavorite
      })
    }
  }
}
</script>
