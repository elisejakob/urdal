<template>
  <header>
    <nuxt-link to="/" class="home">Urdal</nuxt-link>
    <nav>
      <nuxt-link to="/projects">Projects</nuxt-link>
      <nuxt-link to="/journal">Journal</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 1.5rem;
  margin: 0 auto;

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }
}

</style>
