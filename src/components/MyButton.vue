<script setup>
const props = defineProps({
  linkText: {
    type: String,
    required: false,
    default: 'My Button'
  },
  routeName: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: false
  }
})
</script>

<template>
  <router-link
    :to="{ name: props.routeName }"
    :class="props.theme"
  >
    {{ props.linkText }}
  </router-link>
</template>

<style scoped>
a {
  border: 1px solid black;
  padding: 5px;


  &:hover {
    color: #0093D3;
  }


  &.primary {
    font-size: 120%;
    padding: 10px;
  }

  &.router-link-active {
    font-weight: bold;
  }
}
</style>
