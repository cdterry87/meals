<template>
  <div>
    Meal page
    <p>ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'Meal',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
