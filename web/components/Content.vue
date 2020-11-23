<template>
  <div class="content" :class="{ journal: journal }">
    <div v-for="(section, index) in sections" :key="index" class="content-section">
      <ImageWithCaption :image="section" v-if="section._type == 'mainImage'" />
      <RichText :content="section" v-if="section._type == 'richText'" />
      <Pdf :content="section" :bgColor="bgColor" v-if="section._type == 'pdf'" />
    </div>
  </div>
</template>

<script>
import ImageWithCaption from "~/components/ImageWithCaption.vue"
import RichText from "~/components/RichText.vue"
import Pdf from "~/components/Pdf.vue"

export default {
  props: {
    sections: Array,
    journal: Boolean,
    bgColor: Object,
    textColor: Object
  },
  components: { 
    ImageWithCaption, 
    RichText,
    Pdf
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.content {
  grid-column: 1 / span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 2rem;
  margin: 3rem 0;
  align-items: center;

  p, div, figure {
    grid-column: span 6;
  }

  &.journal {
    grid-column: 1 / span 12;
    margin: 1rem 0;
    p, div, figure {
      grid-column: span 12;
      margin: 0 0 1rem;
    }
  }
}

@media (max-width: $media-s) {
  .content {
    p, div, figure {
      grid-column: span 12;
    }
  }
}

@media (min-width: $media-l) {
  .content {
    p, div, figure {
      grid-column: 2 / span 5;
      &:nth-child(even) {
        grid-column: 7 / span 5;
      }
    }
    &.journal {
      grid-column: 1 / span 12;
      p, div, figure {
        grid-column: span 12;
        &:nth-child(even) {
          grid-column: span 12;
        }
      }
    }
  }
}
</style>
