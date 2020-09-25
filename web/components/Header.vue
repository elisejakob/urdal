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

  .site-title {
    font-family: $serif;
    font-size: 2rem;
  }
  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }
  nav a {
    margin-left: 2rem;

    &.nuxt-link-active {
      font-style: italic;
    }
  }
}
</style>
