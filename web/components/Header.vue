<template>
  <header :style="cssVars">
    <h1 class="site-title">
      <nuxt-link to="/" class="home">Urdal</nuxt-link>
    </h1>
    <nav>
      <nuxt-link to="/projects">Projects</nuxt-link>
      <nuxt-link to="/journal">Journal</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <a href="#contact">Contact</a>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    cssVars() {
      return {
        '--link-color': this.$store.state.global.mainColor.hex
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  background: linear-gradient(var(--color-background), rgba(255, 255, 255, 0));

  .site-title {
    font-family: var(--serif);
    font-weight: 400;
    font-size: var(--font-l);
    margin: 0;
    line-height: 1;
  }
  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }
  nav a {
    margin-left: 2rem;
    transition: all .24s ease;
    font-size: var(--font-m);

    &:hover {
      color: var(--link-color);
    }

    &.nuxt-link-active {
      font-style: italic;
      text-decoration: underline;
      &:hover {
        color: inherit;
      }
    }
  }
}
@media (max-width: $media-s) {
  header {
    nav a {
      font-size: 1rem;
    }
  }
}
</style>
