<template>
  <div class="bio" :style="cssVars">
    {{ content }}
  </div>
</template>

<script>
export default {
  props: {
    content: String
  },
  computed: {
    cssVars() {
      return {
        '--main-color': this.$store.state.global.mainColor.hex
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.bio {
  border: 2px solid var(--main-color);
  padding: 1rem 1.25rem 1.5rem;
  margin: 3rem 0;
  max-width: 30rem;
  transform: translate(50%, -3rem);
  position: absolute;
  z-index: 1001;
}
</style>
