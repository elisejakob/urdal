<template>
  <footer>
    <h1>Contact</h1>
    <div class="contact" id="contact">
      <h2 class="contact-label">E-mail</h2>
      <a class="contact-link" :href="`mailto:${footer.email}`" target="_blank">{{ footer.email }}</a>
      <h2 class="contact-label">Instagram</h2>
      <a class="contact-link" :href="`https://instagram.com/${footer.instagram}`" target="_blank">@{{ footer.instagram }}</a>
    </div>
    <div class="credit">
      <BlockContent
        :blocks="footer.credit"
        :v-if="footer.credit"
      />
    </div>
    <div class="totop" @click="toTop()">
      &uarr;
    </div>
  </footer>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'

export default {
  components: {
    BlockContent
  },
  computed: {
    footer() {
      return this.$store.state.global.footer
    }
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
footer {
  min-height: 84vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid $color-text;
  position: relative;

  h1 {
    font-size: $font-l;
    font-family: $serif;
    margin: 0 0 3rem;
  }

  .contact {
    width: 100%;
    font-family: $serif;
    margin: auto 0;
    &-label {
      font-family: $sans-serif;
      font-size: $font-m;
      margin-bottom: 0;
    }
    &-link {
      display: inline-block;
      font-size: $font-l;
      margin-bottom: 3rem;
      text-decoration: none;
      transition: color .3s ease-in-out;

      &:before {
        display: inline-block;
        content: "→";
        font-size: $font-l;
        font-family: $sans-serif;
        margin-right: 1rem;
        transform: translateY(.24rem);
      }
      &:hover {
        color: $color-highlight;
      }
    }
  }

  .credit {
    font-size: $font-s;
    margin: auto 0 0 0;
    padding-right: 6rem;
    width: 100%;

    p {
      max-width: none;
    }
  }

  .totop {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2rem;
    font-size: $font-l;
    line-height: 1;
    cursor: pointer;
  }
}
</style>
