<template>
  <div class="journal-body" :class="{ open: open }">
    <div class="journal-body-readmore" @click="open = !open">
      <span class="readmore-text">Read the whole thing</span>
      <span>&darr;</span>
    </div>
    <div class="journal-body-content" :class="{ open: open }">
      <BlockContent v-if="content" :blocks="content" />
    </div>
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
  },
  data() {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.journal-body {
  &-readmore {
    font-family: $sans-serif;
    font-weight: 500;
    line-height: 1.4;
    display: flex;
    justify-content: space-between;
    &:hover {
      cursor: pointer;
    }
  }
  &-content {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    display: none;

    &.open {
      display: block;
    }
  }
  &.open {
    .readmore-text {
      visibility: hidden;
    }
  }
}
</style>
