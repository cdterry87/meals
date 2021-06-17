<template>
  <router-link :to="`/drink/${this.id}`">
    <div class="card">
      <div v-if="image" class="card-image">
        <figure class="image is-4by3">
          <img :src="image" :alt="title" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4 has-text-centered">{{ title | uppercase }}</p>
            <p v-if="subtitle" class="subtitle is-7 has-text-centered">
              ({{ subtitle | uppercase }})
            </p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Card',
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
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
