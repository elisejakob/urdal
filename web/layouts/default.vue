<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

body {
  -webkit-font-smoothing: antialiased;
  background: var(--color-white);
  color: var(--color-black);
  margin: 0;
}

html,
body,
#__nuxt,
#__layout,
#__layout > div {
  height: 100%;
}

.title {
  font-weight: 600;
  margin-bottom: 0.25rem;
  padding-bottom: 0;
}

.title + p {
  margin-top: 0;
  margin-bottom: 4rem;
}
</style>
