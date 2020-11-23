<template>
  <div class="project-header" :style="cssVars">
    <div class="project-text">
       <div class="project-meta">
        <span v-if="type" class="project-type">{{ type }}</span>
        <span v-if="year" class="project-year">
          <Date :rawDate="year" yearonly />
        </span>
        <span v-if="ongoing" class="project-ongoing">Ongoing</span>
      </div>
      <h1 class="project-title">
        {{ title }}
        <span v-if="subhead" class="project-subhead">&mdash; {{ subhead }}</span>
      </h1>
      <div class="project-lead" v-if="summary">
        <p class="lead">{{ summary }}</p>
      </div>
    </div>
    <figure v-if="image" class="project-image">
      <SanityImage :image="image" />
      <figcaption>{{ image.caption }}</figcaption>
    </figure>
  </div>
</template>

<script>
import SanityImage from '~/components/SanityImage'
import Date from '~/components/Date'

export default {
  props: {
    title: String,
    subhead: String,
    summary: String,
    type: String,
    ongoing: Boolean,
    image: Object,
    year: String,
    textColor: Object,
    bgColor: Object
  },
  components: {
    SanityImage,
    Date
  },
  computed: {
    cssVars() {
      if (this.bgColor && this.textColor) {
        return {
          '--bg-color': this.bgColor.hex,
          '--text-color': this.textColor.hex,
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

.project-header {
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 2rem;
}
.project {
  &-text {
    grid-column: 1 / span 6;
    padding: 40% 0 4rem;
  }
  &-title {
    width: calc(100% + 4em);
    font-size: var(--font-l);
    font-family: var(--serif);
    margin: 0 0 4rem;
    text-shadow: -.02em .02em .08em rgba(255, 255, 255, .8);

    opacity: 0;
    transform: translateY(-20px);
    animation: fadeDown .8s ease;
    animation-fill-mode: forwards;
  }
  &-meta {
    color: var(--text-color);
    text-transform: uppercase;
    letter-spacing: .1em;
    font-size: var(--font-s);
    padding-left: .24em;
    margin: 0 0 .8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-lead {
    grid-column: 1 / span 6;
    p {
      font-size: var(--font-lead-s);
    }
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