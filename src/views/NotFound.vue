<template>
  <div class="has-text-centered py-6">
    <i class="far fa-frown is-size-1"></i>
    <p class="title is-2 my-3">Sorry!</p>
    <p class="subtitle is-4 my-3">The page you requested could not be found</p>
    <div class="mt-5">
      <router-link to="/" class="button is-info">Return Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
