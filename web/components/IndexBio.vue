<template>
  <div class="bio">
    {{ content }}
  </div>
</template>
<script>
export default {
  props: {
    content: String
  }
}
</script>

<style lang="scss" scoped>
.bio {
  border: 2px solid yellow;
  padding: 1rem 1.25rem 1.5rem;
  max-width: 30rem;
  transform: translate(20rem, -3rem);
  position: absolute;
  z-index: 1001;
}
</style>
