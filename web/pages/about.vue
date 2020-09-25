<template>
  <main>
    <h1 class="title">About</h1>
    <BlockContent v-if="body" :blocks="body" :serializers="serializers" />
  </main>
</template>

<script>
import sanityClient from '~/sanityClient'
import EventBlock from '~/components/blockContent/EventBlock'
import BlockContent from 'sanity-blocks-vue-component'

const query = `
  *[_id == "about"][0] {
    body[] {
      ...,
      children[] {
        ...,
        event->
      }
    }
  }
`
export default {
  components: {
    BlockContent
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
  }
}
</script>
