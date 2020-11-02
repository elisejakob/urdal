<template>
  <main>
    <figure v-if="image" class="project-image">
      <SanityImage :image="image" />
      <figcaption>{{ image.caption }}</figcaption>
    </figure>
    <div class="content">
      <p class="project-type">{{ projectType }}</p>
      <h1 class="project-title">{{ title }}</h1>
      <p class="summary">{{ summary }}</p>
      <div class="project-content">
        <BlockContent
          :blocks="description"
          v-if="description"
        />
        <Content v-if="content" :sections="content" />
      </div>
    </div>
  </main>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import SanityImage from '~/components/SanityImage'
import Content from '~/components/Content'

const query = groq`
  *[_type == "project" && _id == $id] {
    ...,
    projects[] {
      project-> {
        ...,
        image {
          ...,
          asset->
        },
        content
      }
    }
  }[0]
`

export default {
  components: {
    BlockContent,
    SanityImage,
    Content
  },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params)
  },
  head() {
    if (!this || !this.info) {
      return
    }
    return {
      title: 'Urdal:' + this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.info.description
        }
      ]
    }
  }
}
</script>