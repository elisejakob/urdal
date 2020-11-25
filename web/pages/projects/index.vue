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
    "projects": *[_type == "project"] | order(publishedAt desc)
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
          content: this.lead
        },
        {
          name: 'og:title',
          content: this.title + '| Urdal'
        }
      ]
    }
  }
}
</script>

