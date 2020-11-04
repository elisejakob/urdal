<template>
  <main>
    <figure v-if="image" class="journal-image">
      <SanityImage :image="image" />
      <figcaption>{{ image.caption }}</figcaption>
    </figure>
    <div class="journal-text">
      <h1 class="journal-title">{{ title }}</h1>
      <p class="journal-summary">{{ summary }}</p>
      <div class="journal-content">
        <BlockContent v-if="body" :blocks="body" />
      </div>
    </div>
  </main>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import SanityImage from '~/components/SanityImage'

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
    SanityImage
  },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params)
  },
  head() {
    return {
      title: 'Urdal:' + this.title,
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
