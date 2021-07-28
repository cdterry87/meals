<template>
  <component
    :is="link ? 'router-link' : 'button'"
    :to="link ? link : undefined"
    :class="classes"
    class="button"
  >
    <span data-testid="label">{{ label | uppercase }}</span>
    <span v-if="icon" class="icon" :key="label" data-testid="icon">
      <i :class="icon" />
    </span>
  </component>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
