<template>
  <main class="project">
    <h1 class="project-title">
      {{ title }}
      <span v-if="subhead" class="project-subhead">&mdash; {{ subhead }}</span>
    </h1>
    <div class="project-lead">
      <!--<p class="project-type">{{ projectType }}</p>-->
      <p class="lead">{{ summary }}</p>
    </div>
    <figure v-if="image" class="project-image">
      <SanityImage :image="image" />
      <figcaption>{{ image.caption }}</figcaption>
    </figure>
    <div class="project-content">
      <BlockContent
        :blocks="description"
        v-if="description"
      />
      <Content v-if="content" :sections="content" />
    </div>
  </main>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import SanityImage from '~/components/SanityImage'
import Content from '~/components/Content'

const query = groq`
  *[_type == "project" && _id == $id] {
    ...,
    projects[] {
      project-> {
        ...,
        image {
          ...,
          asset->
        },
        content
      }
    }
  }[0]
`

export default {
  components: {
    BlockContent,
    SanityImage,
    Content
  },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params)
  },
  head() {
    return {
      title: 'Urdal: ' + this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.lead
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.project {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2rem;
  &-title {
    grid-column: 1 / span 12;
    font-size: $font-l;
    font-family: $serif;
    margin: 0;

    opacity: 0;
    transform: translateY(-20px);
    animation: fadeDown .8s ease;
    animation-fill-mode: forwards;
  }
  &-subhead,
  &-type {
    opacity: .3;
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
  &-content {
    grid-column: 1 / span 6;
  }
}
@keyframes fadeDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>