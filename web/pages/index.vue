<template>
  <main>
    <ProjectList :projects="projects" />
  </main>
</template>

<script>
import sanityClient from '~/sanityClient'
import ProjectList from '~/components/ProjectList'

const query = `
  {
    "projects": *[_type == "project" && featured]
  }
`

export default {
  components: {
    ProjectList
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  head() {
    if (!this || !this.info) {
      return
    }
    return {
      title: 'Urdal',
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
