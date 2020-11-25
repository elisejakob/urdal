<template>
  <nuxt-link to="/about" class="bio" :style="cssVars">
    {{ content }}
    <span class="readmore">Read more</span>
  </nuxt-link>
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
  display: block;
  text-decoration: none;
  border: 2px solid var(--main-color);
  padding: 1rem 1.25rem 1.8rem;
  margin: 2.4rem 0;
  max-width: 30rem;
  transform: translate(50%, -3rem);
  position: absolute;
  z-index: 5;
  transition: all .3s ease;

  .readmore {
    display: block;
    font-size: var(--font-xs);
    text-align: right;
    text-transform: uppercase;
    letter-spacing: .1em;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .8rem;
    opacity: 0;
    transition: all .3s ease;
  }

  &:hover {
    transform: translate(50%, -4rem);
    .readmore {
      opacity: 1;
    }
  }
}
@media (max-width: $media-s) {
  .bio {
    transform: none;
    position: static;
    &:hover {
      transform: translate(0, -1rem);
      .readmore {
        opacity: 1;
      }
    }
  }
}
</style>
