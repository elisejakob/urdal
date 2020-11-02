<template>
  <ul v-if="entries" class="journal">
    <li v-for="entry in entries" :key="entry._id" class="entry">
      <h2 class="entry-title">
        <nuxt-link :to="`/journal/${entry._id}`">
          {{ entry.title }}
        </nuxt-link>
      </h2>
      <figure v-if="entry.image" class="entry-image">
        <SanityImage :image="entry.image" />
        <figcaption>{{ entry.image.caption }}</figcaption>
      </figure>
      <div class="entry-text">
        <p>
          {{ entry.summary }}
        </p>
        <div class="journal-content">
          <BlockContent v-if="entry.body" :blocks="entry.body" />
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import SanityImage from '~/components/SanityImage'
import BlockContent from 'sanity-blocks-vue-component'

export default {
  components: {
    SanityImage,
    BlockContent
  },
  props: {
    entries: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.journal {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  .entry {
    grid-column: span 12;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 2rem;
    margin-bottom: 5rem;
    color: inherit;
    text-decoration: none;

    &-text {
      grid-column: 7 / span 6;
    }

    &-title {
      grid-column: 1 / span 12;
      font-family: $serif;
      font-size: 2rem;

      a {
        text-decoration: none;
        font-size: $font-l;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    &-image {
      grid-column: 1 / span 6;
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
  li:nth-child(odd) {
    .entry {
      &-image {
        grid-column: 7 / span 6;
        order: 2;
      }
      &-text {
        grid-column: 1 / span 6;
      }
    }
  }

}
</style>
