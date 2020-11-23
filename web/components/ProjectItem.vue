<template>
  <li class="project" :style="cssVars">
    <nuxt-link :to="{ path: `/projects/${project.slug.current}` }">
      <SanityImage v-if="project.image" :image="project.image" class="project-image" />
      <div class="project-text">
        <h3>
          <span class="number">{{ index+1 }}.</span> {{ project.title }}<br />
          {{ project.subhead }}
        </h3>
        <p v-if="project.summary">
          {{ project.summary }}
        </p>
        <div v-if="project.ongoing" class="project-ongoing">Ongoing</div>
      </div>
      <div v-if="project.norwegian" class="project-norwegian">
        <img src="/only-in-norwegian.svg" />
      </div>
    </nuxt-link>
  </li>
</template>

<script>
import SanityImage from '~/components/SanityImage'

export default {
  components: { SanityImage },
  props: {
    project: Object,
    index: Number
  },
  computed: {
    cssVars() {
      if (this.project.bgColor && this.project.textColor) {
        return {
          '--bg-color': this.project.bgColor.hex,
          '--text-color': this.project.textColor.hex,
        }
      }
      return {
        '--bg-color': this.$store.state.global.mainColor.hex,
        '--text-color': '#000',
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.project {
  grid-column: span 4;
  padding: 2rem;
  position: relative;

  a {
    text-decoration: none;
    color: inherit;
    display: grid;
    grid-template-columns: 1fr;
  }
  &-image {
    z-index: 1;
    transform: translate(0, 0);
    transition: all .3s ease;
  }
  &-text {
    border: 1px solid var(--text-color);
    padding: 1.4rem;
    margin: 0;
    z-index: 10;
    transform: translate(1.5rem, -1.5rem);
    transition: all .3s ease;
    p {
      line-height: 1.3;
    }
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
    .project-norwegian {
      transform: rotate(360deg);
      transition: transform 6s linear;
    }
  }

  &:nth-child(odd) {
    .project-text {
      background: var(--bg-color);
      border-color: var(--bg-color);
      transform: translate(0, -1.5rem);
    }
    .project-image {
      transform: translate(1.5rem, 0);
    }

    &:hover {
      .project-image {
        transform: translate(.5rem, .5rem);
      }
      .project-text {
        transform: translate(1.2rem, -3rem);
        box-shadow: 0 0 .6rem rgba(0, 0, 0, .2);
      }
    }
  }
  &:nth-child(3n+3) {  
    .project-text {
      order: 1;
      transform: translate(0, 1.5rem);
    }
    .project-image {
      order: 2;
      transform: translate(2rem, 0);
    }
    &:hover {
      .project-text {
        transform: translate(.5rem, 2rem);
      }
      .project-image {
        transform: translate(2.5rem, -.5rem);
      }
    }
  }
  &-ongoing {
    font-size: var(--font-xs);
    text-align: right;
    text-transform: uppercase;
    letter-spacing: .1em;
  }
  &-norwegian {
    width: 6rem;
    height: 6rem;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    transform: rotate(36deg);
    transition: transform 1s linear;
  }
}
.project-list.index {
  .project:first-of-type {
    margin-top: 7.2rem;
  }
  .project:nth-of-type(2) {
    margin-top: 6rem;
  }
  .project:nth-of-type(3) {
    margin-top: -6rem;
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
    &:nth-child(3n+3) {  
      .project-text {
        order: 2;
        transform: translate(0, -1.5rem);
      }
      .project-image {
        order: 1;
        transform: translate(-2rem, 0);
      }
    }
  }
  .project-list.index {
    .project:first-of-type {
      margin-top: 0;
    }
    .project:nth-of-type(2) {
      margin-top: 0;
    }
    .project:nth-of-type(3) {
      margin-top: 0;
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
