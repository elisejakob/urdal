<template>
  <main>
    <SanityImage v-if="image" :image="image" />
    <div class="content">
      <p class="projectType">{{ projectType }}</p>
      <h1 class="projectTitle">{{ title }}</h1>
      <p class="summary">{{ summary }}</p>
      <div class="projectContent">
        <BlockContent
          :blocks="description"
          :v-if="description"
          :serializers="serializers"
        />
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
  *[_type == "project" && _id == $id] {
    ...,
    persons[] {
      person-> {
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
  }
}
</script>