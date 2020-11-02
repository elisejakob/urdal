<template>
  <main>
    <ProjectList v-if="projects" :projects="projects" />
  </main>
</template>

<script>
import sanityClient from '~/sanityClient'
import ProjectList from '~/components/ProjectList'

const query = `
  {
    "projects": *[_type == "project"]
  }
`

export default {
  components: { ProjectList },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  head() {
    if (!this || !this.info) {
      return
    }
    return {
      title: 'Urdal: Projects',
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

