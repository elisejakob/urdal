<template>
  <main class="project">
    <ProjectHeader 
      :title="title" 
      :subhead="subhead" 
      :summary="summary" 
      :type="projectType" 
      :ongoing="ongoing"
      :image="image" 
      :year="publishedAt"
      :bgColor="bgColor"
      :textColor="textColor"
    />
    <BlockContent
      :blocks="description"
      v-if="description"
    />
    <Content 
      v-if="content"
      :sections="content"
      :bgColor="bgColor"
      :textColor="textColor"
    />
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
  *[_type == "project" && slug.current == $slug] {
    ...,
    projects[] {
      project-> {
        ...,
        image {
          ...,
          asset->,
          "ogimage": asset->url
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
          content: this.summary
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title + ' | Urdal'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.summary
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.image.ogimage
        }
      ]
    }
  }
}
</script>