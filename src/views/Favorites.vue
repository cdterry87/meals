<template>
  <div>
    <h2 class="title is-4 has-text-centered my-4">
      All <span data-testid="total-favorites">{{ totalFavorites }}</span> of
      your favorites in one place!
    </h2>
    <div class="columns is-multiline my-4">
      <div
        v-if="!favorites.length"
        class="column is-8 is-offset-2 has-text-centered"
      >
        <p class="title is-size-4">Sorry, there is nothing to display.</p>
        <p class="subtitle is-size-5">You have not added any favorites yet.</p>
      </div>
      <div
        v-else
        v-for="(favorite, index) in favorites"
        :key="index"
        class="column is-one-third"
      >
        <Card
          :id="favorite.id"
          :title="favorite.title"
          :subtitle="favorite.subtitle"
          :image="favorite.image"
        />
        <p class="mt-4 has-text-centered">
          <small class="is-small">
            Added {{ getDateFromToday(favorite.date) }}
          </small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDistance } from 'date-fns'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters } = createNamespacedHelpers('favorites')

import Card from '../components/Card'

export default {
  name: 'Favorites',
  components: {
    Card
  },
  computed: {
    ...mapState(['favorites']),
    ...mapGetters(['totalFavorites'])
  },
  methods: {
    getDateFromToday(date) {
      return formatDistance(new Date(date), new Date(), {
        addSuffix: true
      })
    }
  }
}
</script>
