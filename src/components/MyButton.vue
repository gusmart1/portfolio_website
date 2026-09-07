<script setup>
const props = defineProps({
  linkText: { type: String, default: 'My Button' },
  routeName: { type: String, required: true },
  theme: { type: String, default: '' }
})
</script>

<template>
  <router-link
    :to="{ name: props.routeName }"
    :class="['nav-link', props.theme]"
  >
    {{ props.linkText }}
  </router-link>
</template>

<style scoped>
.nav-link {
  padding: 8px 15px;
  text-decoration: none;
  color: black;
  transition: all 0.2s ease;
  display: inline-block;
}

/* Hover */
.nav-link.home:hover {
  color: black;
}

.nav-link.portfolio:hover {
  color: #0093D3;
}

.nav-link.about:hover {
  color: #CC016B;
}

.nav-link.contact:hover {
  color: #FFF10D;
}

/* Active page */
.nav-link.router-link-active.home {
  color: black;
}

.nav-link.router-link-active.portfolio {
  color: #0093D3;
}

.nav-link.router-link-active.about {
  color: #CC016B;
}

.nav-link.router-link-active.contact {
  color: #FFF10D;
}

</style>
