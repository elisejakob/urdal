<template>
  <div class="richtext" :class="{ about: 'about' }">
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
    content: Object,
    about: Boolean
  },
  components: {
    BlockContent
  }
}
</script>

<style lang="scss">
.richtext {
  margin: 0 0 3rem;
  width: 100%;
  max-width: 36rem;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 5rem;
    &:first-child {
      margin-top: 0;
    }
  }

  h2 {
    font-size: var(--font-m);
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

  &.about {
    max-width: none;

    ul {
      max-width: none;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        display: inline-block;
        margin: .5rem .6rem 0 0;
        &:after {
          content: "/";
          display: inline-block;
          margin-left: .3rem;
        }
      }
    }
  }
}
</style>
