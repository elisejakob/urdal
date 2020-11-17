<template>
  <li class="entry">
    <Date v-if="entry.publishedAt" :rawDate="entry.publishedAt" journal class="entry-date" />
    <h2 class="entry-title">
      <nuxt-link :to="`/journal/${entry.slug.current}`">
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
      <JournalBody v-if="entry.content && entry.body" :content="entry.content" :body="entry.body" class="entry-body" />
      <JournalBody v-else-if="entry.content" :content="entry.content" class="entry-body" />
      <JournalBody v-else-if="entry.body" :body="entry.body" class="entry-body" />
    </div>
  </li>
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
    entry: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.entry {
  grid-column: 2 / span 10;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 2rem;
  margin-bottom: 8rem;
  color: inherit;
  text-decoration: none;

  &-date {
    grid-column: 1 / span 12;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-size: $font-s;
    margin-bottom: .8em;
    text-align: center;
  }

  &-title {
    grid-column: 1 / span 12;
    font-family: $serif;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2.4rem;

    a {
      text-decoration: none;
      font-size: $font-l;
    }
  }

  &-text {
    grid-column: 7 / span 6;

    .lead {
      font-size: $font-lead-s;
      margin-bottom: 3rem;
    }
  }

  &-image {
    grid-column: 1 / span 6;
    width: 100%;
    margin: 0;

    img {
      width: 100%;
    }
  }

  &-body {
    border: 1px solid $color-text;
    border-left-width: 0;
    border-right-width: 0;
    padding: 1rem 0;
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
    &-body {
      order: 3;
    }
  }
}
</style>
