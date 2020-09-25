<template>
  <main>
    <h1 class="title">Projects</h1>
    <ProjectGrid v-if="projects" :projects="projects" />
  </main>
</template>

<script>
import sanityClient from '~/sanityClient'
import ProjectGrid from '~/components/ProjectGrid'

const query = `
  {
    "projects": *[_type == "project"]
  }
`

export default {
  components: { ProjectGrid },
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>

