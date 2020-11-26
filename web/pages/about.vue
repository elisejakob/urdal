<template>
  <main class="about">
    <p class="lead">{{ lead }}</p>
    <div class="about-header">
      <div class="about-header-content">
        <BlockContent v-if="body" :blocks="body" :serializers="serializers" />
      </div>
      <figure v-if="image" class="about-header-portrait">
        <SanityImage :image="image" />
        <figcaption>{{ image.caption }}</figcaption>
      </figure>
    </div>
    <Content v-if="content" :sections="content" about />
  </main>
</template>

<script>
import sanityClient from '~/sanityClient'
import EventBlock from '~/components/blockContent/EventBlock'
import Content from '~/components/Content'
import BlockContent from 'sanity-blocks-vue-component'
import SanityImage from '~/components/SanityImage'

const query = `
  *[_id == "about"][0] {
    lead,
    body[] {
      ...,
      children[] {
        ...,
        event->
      }
    },
    image {
      ...,
      asset->,
      "ogimage": asset->url
    },
    content
  }
`
export default {
  components: {
    BlockContent,
    Content,
    SanityImage
  },
  data() {
    return {
      serializers: {
        types: {
          eventReference: EventBlock
        }
      }
    }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  head() {
    return {
      title: 'Urdal: About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.lead
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title + ' | Urdal'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.lead
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.image.ogimage
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.about {
  margin-top: 12rem;

  &-header {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 2rem;

    &-content,
    &-portrait {
      grid-column: span 6;
    }
  }
}
@media (max-width: $media-s) {
  .about {
    margin-top: 6rem;

    &-header {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: 2rem;

      &-content,
      &-portrait {
        grid-column: span 12;
      }
      &-portrait {
        order: 1;
        margin-bottom: 2rem;
      }
      &-content {
        order: 2;
      }
    }
  }
}
</style>
