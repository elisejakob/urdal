<template>
  <ul class="project-list">
    <li v-for="(project, index) in projects" class="project" :key="index">
      <nuxt-link :to="{ path: `/projects/${project._id}` }">
        <SanityImage v-if="project.image" :image="project.image" />
        <div class="project-text">
          <h3><span class="number">{{ index+1 }}.</span> {{ project.title }}</h3>
          <p>
            {{ project.summary }}
          </p>
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import SanityImage from '~/components/SanityImage'
export default {
  components: {
    SanityImage
  },
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.project-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5rem;
}
.project {
  a {
    text-decoration: none;
    color: inherit;
  }
  &-text {
    background: #efefef;
    padding: 1.4rem;
  }
  h3 {
    font-weight: 400;
    text-align: center;
    .number {
      display: inline-block;
      margin-right: 1rem;
    }
  }
}
</style>
