<template>
  <ul class="project-list">
    <li v-for="(project, index) in projects" class="project" :style="{ animationDelay: index/10 + 's' }" :key="index">
      <nuxt-link :to="{ path: `/projects/${project._id}` }">
        <SanityImage v-if="project.image" :image="project.image" class="project-image" />
        <div class="project-text">
          <h3><span class="number">{{ index+1 }}.</span> {{ project.title }}</h3>
          <p>
            {{ project.summary }}
          </p>
        </div>
      </nuxt-link>
    </li>

    <li v-for="(project, index) in projects" class="project" :key="index">
      <nuxt-link :to="{ path: `/projects/${project._id}` }">
        <SanityImage v-if="project.image" :image="project.image" class="project-image" />
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
@import '@/assets/css/variables.scss';
.project-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 2rem;
  place-items: center;
}
.project {
  grid-column: span 4;
  padding: 2rem;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp .8s ease;
  animation-fill-mode: forwards;

  a {
    text-decoration: none;
    color: inherit;
  }
  &-image {
    z-index: 1;
    transform: translate(0, 0);
    transition: all .3s ease;
  }
  &-text {
    border: 2px solid black;
    padding: 1.4rem;
    margin: 0;
    z-index: 10;
    transform: translate(1.5rem, -1.5rem);
    transition: all .3s ease;
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    .number {
      display: inline-block;
      margin-right: 1rem;
    }
  }

  &:hover {
    .project-image {
      transform: translate(0, .5rem);
      transition: all .6s ease;
    }
    .project-text {
      transform: translate(1.5rem, -2rem);
      transition: all .6s ease;
    }
  }

  &:nth-child(odd) {
    .project-text {
      background: yellow;
      border-color: yellow;
    }

    &:hover {
      .project-image {
        transform: translate(.5rem, .5rem);
      }
      .project-text {
        transform: translate(1.2rem, -3rem);
      }
    }
  }
}
@media (min-width: $media-l) {
  .project {
    grid-column: span 3;
  }
}
@media (max-width: $media-m) {
  .project {
    grid-column: span 6;
  }
}
@media (max-width: $media-s) {
  .project {
    grid-column: span 12;
  }
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
