<template>
  <ul v-if="entries" class="journal-entries">
    <li v-for="entry in entries" :key="entry._id" class="entry">
      <Date :rawDate="entry.publishedAt" journal class="entry-date" />
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
        <p class="lead" v-if="entry.summary">
          {{ entry.summary }}
        </p>
      </div>
      <JournalBody v-if="entry.body" :content="entry.body" class="entry-body" />
    </li>
  </ul>
</template>
<script>
import SanityImage from '~/components/SanityImage'
import Date from '~/components/Date'
import JournalBody from '~/components/JournalBody'

export default {
  components: {
    SanityImage,
    Date,
    JournalBody
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
.journal-entries {
  list-style: none;
  margin: 4rem 0;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 2rem;
  max-width: none;

  .entry {
    grid-column: 1 / span 12;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 2rem;
    margin-bottom: 5rem;
    color: inherit;
    text-decoration: none;

    &-date {
      grid-column: 2 / span 10;
      text-transform: uppercase;
      letter-spacing: .1em;
      font-size: $font-s;
      margin-bottom: .8em;
    }

    &-title {
      grid-column: 2 / span 10;
      font-family: $serif;
      font-size: 2rem;

      a {
        text-decoration: none;
        font-size: $font-l;
      }
    }

    &-text {
      grid-column: 7 / span 5;

      .lead {
        font-size: $font-lead-s;
      }
    }

    &-image {
      grid-column: 2 / span 5;
      width: 100%;
      margin: 0;

      img {
        width: 100%;
      }
    }

    &-body {
      grid-column: 2 / span 10;
      border: 1px solid $color-text;
      border-left-width: 0;
      border-right-width: 0;
      padding: 1rem 0;
    }
  }
  li:nth-child(odd) {
    .entry {
      &-image {
        grid-column: 7 / span 5;
        order: 2;
      }
      &-text {
        grid-column: 2 / span 5;
      }
      &-body {
        order: 3;
      }
    }
  }

}
</style>
