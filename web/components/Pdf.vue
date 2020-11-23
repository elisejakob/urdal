<template>
  <div class="pdf" :style="cssVars">
    <span>Download:</span>
    <a :href="`${getUrl(content.pdfFile.asset._ref)}?dl=${content.downloadText}.pdf`">&#x1F4CE; {{ content.downloadText }}</a>
  </div>
</template>

<script>
export default {
  props: {
    content: Object,
    bgColor: Object
  },
  methods: {
    getUrl(ref) {
      const [_file, id, extension] = ref.split('-')
      return `https://cdn.sanity.io/files/u2ny62rh/production/${id}.${extension}`
    }
  },
  computed: {
    cssVars() {
      if (this.bgColor) {
        return {
          '--bg-color': this.bgColor.hex
        }
      }
      return {
        '--bg-color': this.$store.state.global.mainColor.hex
      }
    }
  }
}
</script>

<style lang="scss">
.pdf {
  max-width: 20rem;
  margin: 0 0 3rem;
  span {
    display: block;
    font-size: var(--font-xs);
    text-transform: uppercase;
    letter-spacing: .1em;
    margin-bottom: .4rem;
  }
  a {
    display: inline-block;
    padding: 1rem 1.4rem;
    background: var(--bg-color);
    text-decoration: none;
  }
}
</style>
