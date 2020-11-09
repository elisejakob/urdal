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
@import '@/assets/css/variables.scss';

.bio {
  border: 2px solid $color-highlight;
  padding: 1rem 1.25rem 1.5rem;
  max-width: 30rem;
  transform: translate(20rem, -3rem);
  position: absolute;
  z-index: 1001;
}
</style>
