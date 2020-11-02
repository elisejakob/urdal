<template>
  <header>
    <h1 class="site-title">
      <nuxt-link to="/" class="home">Urdal</nuxt-link>
    </h1>
    <nav>
      <nuxt-link to="/projects">Projects</nuxt-link>
      <nuxt-link to="/journal">Journal</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

  .site-title {
    font-family: $serif;
    font-weight: 400;
    font-size: $font-l;
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
    font-size: 2rem;

    &:hover {
      color: yellow;
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
</style>
