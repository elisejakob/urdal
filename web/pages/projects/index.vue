<template>
  <main>
    <h1 class="title">Projects</h1>
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
  }
}
</script>

