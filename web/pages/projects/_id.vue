<template>
  <main class="project">
    <ProjectHeader :title="title" :subhead="subhead" :summary="summary" :type="projectType" :image="image" />
    <BlockContent
      :blocks="description"
      v-if="description"
    />
    <Content v-if="content" :sections="content" />
  </main>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import SanityImage from '~/components/SanityImage'
import Content from '~/components/Content'
import ProjectHeader from '~/components/ProjectHeader'

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
    Content,
    ProjectHeader
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