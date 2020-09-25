<template>
  <ul class="projectList">
    <ProjectItem
      v-for="(project, index) in projects"
      :key="project._key"
      :index="index"
      :project="project"
    />
  </ul>
</template>
<script>
import ProjectItem from '~/components/ProjectItem'
export default {
  components: {
    ProjectItem
  },
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.projectList {
  margin: 0;
  padding: 0;
}
</style>
