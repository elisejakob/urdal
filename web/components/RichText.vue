<template>
  <div class="richtext">
     <BlockContent
        :blocks="content.body"
        :v-if="content.body"
      />
  </div>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'

export default {
  props: {
    content: Object
  },
  components: {
    BlockContent
  }
}
</script>

<style lang="scss">
.richtext {
  margin: 0 0 7rem;
  width: 100%;
  max-width: 36rem;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 5rem;
    &:first-child {
      margin-top: 0;
    }
  }

  p {
    margin: 0 0 .75rem;
  }

  ul {
    margin: 0;
    padding: 0 1rem;
    li {
      margin-bottom: .5rem;
    }
  }
}
</style>
