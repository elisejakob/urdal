<template>
  <footer>
    <a href="mailto:thea.urdal@gmail.com" target="_blank">thea.urdal@gmail.com</a>
    <a href="mailto:thea.urdal@gmail.com" target="_blank">instagram</a>
    <a href="mailto:thea.urdal@gmail.com" target="_blank">og sånt</a>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
footer {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  border-top: 1px solid $color-text;
  padding-bottom: 10rem;

  a {
    grid-column: span 4;
    font-size: 1.6rem;
    font-family: $serif;
  }
}
</style>
