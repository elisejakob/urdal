<template>
  <main>
    <ProjectListMasonry v-if="projects" :projects="projects" />
  </main>
</template>

<script>
import sanityClient from '~/sanityClient'
//import ProjectList from '~/components/ProjectList'
import ProjectListMasonry from '~/components/ProjectListMasonry'

const query = `
  {
    "projects": *[_type == "project"] | order(publishedAt desc),
    "about": *[_id == "about"][0] {
      lead
    }
  }
`

export default {
  components: { ProjectListMasonry },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  head() {
    return {
      title: 'Urdal: Projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.about.lead
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Projects | Urdal'
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

