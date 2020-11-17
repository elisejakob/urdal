<template>
  <ul class="project-list" :class="{index: index}">
    <ProjectItem 
      v-for="(project, index) in projects" 
      class="project"
      :style="{ animationDelay: index/10 + 's' }"
      :project="project"
      :index="index"
      :key="index"
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
    },
    index: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.project-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  max-width: none;
}
.project {
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeDown .8s ease;
  animation-fill-mode: forwards;
}
@keyframes fadeDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: $media-s) {
  .project-list {
    margin-top: -3rem;
  }
}
</style>
