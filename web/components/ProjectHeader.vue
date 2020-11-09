<template>
  <div>
    <h1 class="project-title">
      {{ title }}
      <span v-if="subhead" class="project-subhead">&mdash; {{ subhead }}</span>
    </h1>
    <div class="project-lead">
      <p class="lead">{{ summary }}</p>
    </div>
    <p class="project-type">{{ type }}</p>
    <figure v-if="image" class="project-image">
      <SanityImage :image="image" />
      <figcaption>{{ image.caption }}</figcaption>
    </figure>
  </div>
</template>

<script>
import SanityImage from '~/components/SanityImage'

export default {
  props: {
    title: String,
    subhead: String,
    summary: String,
    type: String,
    image: Object
  },
  components: {
    SanityImage
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.project-header {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 2rem;
}
.project {
  &-title {
    grid-column: 1 / span 12;
    font-size: $font-l;
    font-family: $serif;
    margin: 0 0 4rem;

    opacity: 0;
    transform: translateY(-20px);
    animation: fadeDown .8s ease;
    animation-fill-mode: forwards;
  }
  &-lead {
    grid-column: 1 / span 6;
  }
  &-image {
    grid-column: 7 / span 6;
    padding-top: .6rem;

    img {
      width: 100%;
    }
  }
}
@keyframes fadeDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>