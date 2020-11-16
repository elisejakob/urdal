<template>
  <main class="entry-wrapper">
    <div class="entry">
      <Date v-if="publishedAt" :rawDate="publishedAt" journal class="entry-date" />
      <h2 class="entry-title">
        {{ title }}
      </h2>
      <figure v-if="image" class="entry-image">
        <SanityImage :image="image" />
        <figcaption>{{ image.caption }}</figcaption>
      </figure>
      <div class="entry-text">
        <p class="lead" v-if="summary">
          {{ summary }}
        </p>
        <Content v-if="content" :sections="content" class="entry-body" />
        <BlockContent v-else-if="body" :blocks="body" class="entry-body" />
      </div>
    </div>
    <nuxt-link to="/journal" class="viewall">Read more journal entries</nuxt-link>
  </main>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import SanityImage from '~/components/SanityImage'
import Date from '~/components/Date'

const query = groq`
  *[_type == "journal" && _id == $id] {
    ...,
    journal[] {
      journal-> {
        ...,
        image {
          ...,
          asset->
        }
      }
    }
  }[0]
`

export default {
  components: {
    BlockContent,
    SanityImage,
    Date
  },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params)
  },
  head() {
    return {
      title: 'Urdal: ' + this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.lead
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.entry-wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 2rem;
}
.entry {
  margin-top: 4rem;
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
    font-size: $font-l;
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
.viewall {
  grid-column: 2 / span 10;
}
</style>