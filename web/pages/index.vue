<template>
  <main>
    <IndexBio :content="about.lead" />
    <ProjectListMasonry index :projects="projects" />
  </main>
</template>

<script>
import sanityClient from '~/sanityClient'
import ProjectListMasonry from '~/components/ProjectListMasonry'
import IndexBio from '~/components/IndexBio'

const query = `
  {
    "projects": *[_type == "project" && featured] | order(publishedAt desc),
    "about": *[_id == "about"][0] {
      lead
    }
  }
`

export default {
  components: {
    ProjectListMasonry,
    IndexBio
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  head() {
    return {
      title: 'Urdal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.about.lead
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Urdal'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.about.lead
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.$store.state.global.ogimage
        }
      ]
    }
  }
}
</script>
