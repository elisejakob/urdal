<template>
  <ul v-if="projects" class="projectGrid">
    <li v-for="project in projects" :key="project._id" class="project">
      <nuxt-link :to="`/projects/${project._id}`">
        <span class="top">
          <span>
            <span class="type">{{ project.projectType }}</span>
            <h2 class="projectTitle">{{ project.title }}</h2>
          </span>
        </span>
        <p>
          {{ project.summary }}
        </p>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.projectGrid {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 3rem;
}

h2.projectTitle {
  font-weight: 600;
  margin: 0;
  margin-top: 0.5rem;
}

.project {
  display: flex;
  flex-direction: column;
}

.projectGrid a {
  color: inherit;
  text-decoration: inherit;
}

.project .top {
  display: flex;
  justify-content: space-between;
}

.projectGrid a > span {
  display: block;
}

.projectGrid a span.type {
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>
